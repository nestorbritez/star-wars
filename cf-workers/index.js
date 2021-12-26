/* Deployed by hand but can be automated */

const fetchHost = 'swapi.dev/api'

const filmImageUrl = (id) =>
  `https://starwars-visualguide.com/assets/img/films/${id}.jpg`

const getObjectId = (url) => +url.slice(-2, -1)

async function handleRequest(event) {
  const request = event.request

  /**
   * The best practice is to only assign new properties on the request
   * object (i.e. RequestInit props) using either a method or the constructor
   */
  const newRequestInit = {
    method: 'GET',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
    },
    // Change a Cloudflare feature on the outbound response
    cf: {
      apps: false,
    },
  }

  // Take into account the path of the url
  const myHost = new URL(request.url).host
  const url = new URL(request.url.replace(myHost, fetchHost))

  // Best practice is to always use the original request to construct the new request
  // to clone all the attributes. Applying the URL also requires a constructor
  // since once a Request has been constructed, its URL is immutable.
  const newRequest = new Request(url.toString(), newRequestInit)

  try {
    /**
     * Cache API is not enabled on workers.dev
     * This is due to the cache being at the zone level (meaning it’d be shared between everyone on workers.dev)
     * You will need to deploy this over a custom domain to see it work.
     */
    const cache = await caches.open(fetchHost)
    let cacheResponse = await cache.match(newRequest)

    if (!cacheResponse) {
      cacheResponse = await fetch(newRequest)
      event.waitUntil(cache.put(newRequest, cacheResponse.clone()))
    }

    let data = await cacheResponse.text()
    let errorResponse

    try {
      data = JSON.parse(data)
    } catch (err) {
      errorResponse = new Response(data, {
        headers: cacheResponse.headers,
        status: 500,
      })
    }

    // Array type
    if (data?.results?.length) {
      data = Array.from(data.results, (film, index) => ({
        ...film,
        id: getObjectId(film.url),
        filmImageUrl: filmImageUrl(index + 1),
      }))
    } else {
      data.id = getObjectId(data.url)
      data.filmImageUrl = filmImageUrl(data.id)
    }

    return (
      errorResponse ||
      new Response(
        JSON.stringify(data)
          .replace(
            // To camelCase
            /(_\w)\w+":/g,
            (match) => match[1].toUpperCase() + match.substring(2)
          )
          .replace(fetchHost, myHost),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
        }
      )
    )
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 })
  }
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event))
})

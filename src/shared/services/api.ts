/* eslint-disable camelcase */

const { VITE_API_URL } = import.meta.env

export function fetchFromApi(resource: string) {
  return fetch(VITE_API_URL + resource, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch(console.error)
}

export type TFilm = {
  id: number
  title: string
  filmImageUrl: string
  openingCrawl: string
  releaseDate: string
  director: string
}

export async function fetchFilms(): Promise<TFilm[]> {
  return fetchFromApi('films')
}

export async function fetchOneFilm(id: TFilm['id']): Promise<TFilm> {
  return fetchFromApi(`films/${id}`)
}

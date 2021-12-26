import { Card } from 'components/ListingCard'
import heroImage from 'images/hero.jpg'
import { useEffect } from 'react'
import { useListingPageData } from 'shared/hooks/useData'
import { Headings, Title } from 'shared/ui/Headings'
import Loading from 'shared/ui/Loading'
import tw from 'tailwind-styled-components'

const Main = tw.main`
  flex flex-col items-center
  gap-7 mb-12 md:my-12
  animate-fade-in-down
`

const StyledHeadings = tw(Headings)`
  flex justify-center text-center
`

const Grid = tw.div`
  grid grid-cols-2 md:grid-cols-3
  justify-items-center
  gap-7 mx-7
`

const Hero = tw.img`
  object-cover
  w-full h-80 max-w-3xl
  md:rounded-2xl
`

export function Listing() {
  const {
    isLoading = false,
    data: listing = [],
    refetch,
  } = useListingPageData()

  useEffect(() => {
    refetch()
  }, [refetch])

  return (
    <Main aria-label="Listing Page">
      <Hero src={heroImage} />

      <StyledHeadings>
        <Title>Star Wars Films</Title>
      </StyledHeadings>

      {/* React 18 implements Suspense */}
      {isLoading ? (
        <Loading>Loading films...</Loading>
      ) : (
        <Grid role="grid">
          {listing.map(({ id, title, filmImageUrl }) => (
            <Card
              role="gridcell"
              key={title}
              filmImageUrl={filmImageUrl}
              title={title}
              filmId={id}
            />
          ))}
        </Grid>
      )}
    </Main>
  )
}

export default Listing

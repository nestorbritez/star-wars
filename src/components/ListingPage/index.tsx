import tw from 'tailwind-styled-components'

import Card from '@/components/ListingCard'
import heroImage from '@/images/hero.jpg'
import { useListingPageData } from '@/shared/hooks/useData'
import { Headings, Title } from '@/shared/ui/Headings'
import Loading from '@/shared/ui/Loading'

import WarningMessage from '../WarningMessage'

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

export default function Listing() {
  const { isLoading, data: listing = [] } = useListingPageData()

  if (!isLoading && (!listing || !listing.length)) {
    return (
      <WarningMessage>
        <p>The server is not responding as expected.</p>
        <p>Patience you must have my young Padawan.</p>
      </WarningMessage>
    )
  }

  return (
    <Main aria-label="Listing Page">
      <Hero
        src={heroImage}
        width={1920}
        height={1200}
        role="banner"
        title="May the Force be with you"
      />

      <StyledHeadings>
        <Title>Star Wars Films</Title>
      </StyledHeadings>

      {/* React 18 implements Suspense */}
      {isLoading ? (
        <Loading>Loading films...</Loading>
      ) : (
        <Grid role="list">
          {listing.map(({ id, title, filmImageUrl }) => (
            <Card
              role="listitem"
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

import { ArrowLeftIcon } from '@heroicons/react/solid'
import React from 'react'
import { useParams } from 'react-router-dom'
import tw from 'tailwind-styled-components'

import logoImage from '@/images/favicon.svg'
import { useDetailPageData } from '@/shared/hooks/useData'
import { TFilm } from '@/shared/services/api'
import { CardSection } from '@/shared/ui/Card'
import { Headings, Subtitle, Title } from '@/shared/ui/Headings'
import Loading from '@/shared/ui/Loading'

const Container = tw.main`
  flex flex-col items-center
  gap-4 sm:gap-10 my-4 sm:mt-10 sm:mb-44
  sm:max-w-3xl sm:mx-auto
  animate-fade-in-up
`
const Logo = tw.img`
  w-52 sm:w-72
  animate-pulse
`
const PosterContainer = tw.div`
  sm:w-xl
  overflow-visible
`
const Poster = tw.img`
  w-full
  rounded-2xl
  shadow-xl
`
const Card = tw(CardSection)`
  flex flex-col sm:flex-row
  gap-7 sm:p-7 sm:mx-4
  sm:max-h-96
`
const Content = tw.div`
  flex flex-col
  text-slate-500
  gap-7 m-7 sm:m-0
`
const TextContent = tw.p`
  overflow-y-scroll
  whitespace-pre-line
  text-center
`
const StyledHeadings = tw(Headings)`
  flex flex-col
  gap-2
`
const StyledTitle = tw(Title)`
  text-3xl
  text-indigo-900
`
const StyledSubtitle = tw(Subtitle)`
  text-lg
  text-slate-500
  flex items-center
  gap-4
`
const Divider = tw.span`
  inline-block
  w-0.5 h-6
  bg-slate-300
`

const GoBack = tw.a`
  flex gap-2 items-center
  uppercase tracking-wider
  text-sm
  text-slate-500
`
const StyledLeftArrow = tw(ArrowLeftIcon)`
  w-5 h-5
`

export default function DetailPage() {
  const { seoId = '' } = useParams()
  const id = +seoId.split('-').reverse()[0]
  const { isLoading, data: detail = {} as TFilm } = useDetailPageData(
    isNaN(id) ? Math.floor(Math.random() * 6) + 1 : id
  ) // Get a random id if doesn't exist

  if (isLoading) {
    return <Loading>Loading...</Loading>
  }

  return (
    <Container>
      <GoBack href="/">
        <StyledLeftArrow /> Go Back
      </GoBack>
      <Logo src={logoImage} />

      {isNaN(id) && (
        <p>
          We couldn&apos;t found the film you&apos;re looking for, but we picked
          a random film for you 😅
        </p>
      )}

      <Card>
        <PosterContainer>
          <Poster src={detail.filmImageUrl} />
        </PosterContainer>

        <Content>
          <StyledHeadings>
            <StyledTitle>Star Wars: {detail.title}</StyledTitle>
            <StyledSubtitle>
              <span>By {detail.director}</span>
              <Divider />
              <span>{detail.releaseDate?.substring(0, 4)}</span>
            </StyledSubtitle>
          </StyledHeadings>

          <TextContent>{detail.openingCrawl}</TextContent>
        </Content>
      </Card>
    </Container>
  )
}

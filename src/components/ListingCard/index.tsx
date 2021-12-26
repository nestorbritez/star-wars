import React, { useMemo } from 'react'
import { TFilm } from 'shared/services/api'
import { seoFriendly as toSeoFriendly } from 'shared/services/utils'
import tw from 'tailwind-styled-components'

const { VITE_DETAIL_PAGE_PATH } = import.meta.env

const Container = tw.section`
  flex flex-col
  gap-2
  text-center
  animate-fade-in-up
`

const Title = tw.h2`
  text-gray-100
  order-last
`

const Photo = tw.img`
  rounded-2xl
  border border-slate-500
`

type CardProps = React.HTMLAttributes<React.FC> &
  Pick<TFilm, 'filmImageUrl' | 'title'> & {
    filmId: TFilm['id']
  }

export function Card({ filmId, filmImageUrl, title }: CardProps) {
  const cardLink = useMemo(
    () => `/${VITE_DETAIL_PAGE_PATH}/${toSeoFriendly(title, filmId)}`,
    [filmId, title]
  )

  return (
    /**
     * The a element may be wrapped around entire paragraphs, lists, tables, and so forth, even entire sections
     * https://www.w3.org/TR/2011/WD-html5-20110525/text-level-semantics.html#the-a-element
     *
     * Sections should always have a heading, with very few exceptions.
     * The `role` attribute is used to identify the purpose of the element.
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section
     */
    <a title={title} href={cardLink}>
      <Container>
        <Title>{title}</Title>
        <Photo src={filmImageUrl} alt={title} width="234" height="321" />
      </Container>
    </a>
  )
}

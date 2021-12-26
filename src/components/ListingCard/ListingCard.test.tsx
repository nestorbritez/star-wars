import { render, screen } from '@testing-library/react'

import { mockFilm } from '@/shared/test/mockData'

import ListingCard from './index'

describe('Listing Card', () => {
  beforeEach(() => {
    const { title, filmImageUrl, id: filmId } = mockFilm

    render(
      <ListingCard
        title={title}
        filmImageUrl={filmImageUrl}
        filmId={filmId}
        role="main"
      />
    )
  })

  test('is rendering main link component', () => {
    const target = screen.getByRole('link')
    expect(target).toHaveAccessibleName('Star Wars: The Rise of Skywalker')
  })

  test('is rendering heading component', () => {
    const target = screen.getByRole('heading')
    expect(target).toHaveAccessibleName('Star Wars: The Rise of Skywalker')
  })

  test('is rendering image component', () => {
    const target = screen.getByRole('img')
    expect(target).toHaveAccessibleName('Star Wars: The Rise of Skywalker')
  })
})

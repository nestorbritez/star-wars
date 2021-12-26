import { render, screen } from '@testing-library/react'

import { useListingPageData } from '@/shared/hooks/useData'
import { mockFilm } from '@/shared/test/mockData'

import ListingPage from './index'

jest.mock('@/shared/hooks/useData', () => ({
  useListingPageData: jest.fn(),
}))

describe('Loading - Listing Page', () => {
  beforeEach(() => {
    // Spy on the response from the custom hook
    ;(useListingPageData as jest.Mock).mockReturnValue({
      isLoading: true,
      data: [mockFilm],
    })

    render(<ListingPage />)
  })

  test('is displaying the loading', () => {
    const target = screen.getByRole('status', { name: 'Loading' })
    expect(target).toBeInTheDocument()
  })
})

describe('Loaded - Listing Page', () => {
  beforeEach(() => {
    // Spy on the response from the custom hook
    ;(useListingPageData as jest.Mock).mockReturnValue({
      isLoading: false,
      data: [mockFilm],
    })

    render(<ListingPage />)
  })

  test('is rendering main container', () => {
    const target = screen.getByRole('main')
    expect(target).toHaveAccessibleName('Listing Page')
  })

  test('is rendering hero component', () => {
    const target = screen.getByRole('banner')
    expect(target).toHaveAccessibleName('May the Force be with you')
  })

  test('is rendering heading', () => {
    const target = screen.getByRole('heading', { name: 'Star Wars Films' })
    expect(target).toBeInTheDocument()
  })

  test('is rendering a list with at least 1 child', () => {
    const target = screen.getByRole('list')
    expect(target).toBeInTheDocument()
    expect(target.childElementCount).toBeGreaterThan(0)
  })

  test('is rendering the card on the list', () => {
    const target = screen.getByRole('listitem')
    expect(target).toBeInTheDocument()
  })
})

describe('Server Error - Detail Page', () => {
  beforeEach(() => {
    ;(useListingPageData as jest.Mock).mockReturnValue({
      isLoading: false,
      data: undefined,
    })

    render(<ListingPage />)
  })

  test('is rendering warning message', () => {
    const target = screen.getByRole('alert')
    expect(target).toHaveAccessibleName('Warning')
    expect(target).toHaveTextContent(
      'The server is not responding as expected.' +
        'Patience you must have my young Padawan.'
    )
  })
})

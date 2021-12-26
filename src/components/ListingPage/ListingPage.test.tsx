import { render, screen } from '@testing-library/react'

import { useListingPageData } from '@/shared/hooks/useData'
import { film } from '@/shared/test/mockData'

import ListingPage from './index'

jest.mock('@/shared/hooks/useData', () => ({
  useListingPageData: jest.fn(),
}))

describe('Loading - Listing Page', () => {
  beforeEach(() => {
    // Spy on the response from the custom hook
    ;(useListingPageData as jest.Mock).mockReturnValue({
      isLoading: true,
      refetch: jest.fn(),
      data: [],
    })

    render(<ListingPage />)
  })

  test('is displaying the loading', () => {
    const target = screen.getByRole('contentinfo')
    expect(target).toHaveAccessibleName('Loading')
  })
})

describe('Loaded - Listing Page', () => {
  beforeEach(() => {
    // Spy on the response from the custom hook
    ;(useListingPageData as jest.Mock).mockReturnValue({
      isLoading: false,
      refetch: jest.fn(),
      data: [film],
    })

    render(<ListingPage />)
  })

  test('is rendering main container', () => {
    const target = screen.getByRole('main')
    expect(target).toHaveAccessibleName('Listing Page')
  })

  test('is rendering hero component', () => {
    const target = screen.getByRole('img', { name: 'Star Wars Hero' })
    expect(target).toHaveAttribute('title', 'May the Force be with you')
  })

  test('is rendering heading', () => {
    const target = screen.getByRole('heading', { name: 'Star Wars Films' })
    expect(target).toBeInTheDocument()
  })

  test('is rendering a grid with at least 1 child', () => {
    const target = screen.getByRole('grid')
    expect(target).toBeInTheDocument()
    expect(target.childElementCount).toBeGreaterThan(0)
  })

  test('is rendering the card on the grid', () => {
    const target = screen.getByRole('gridcell')
    expect(target).toBeInTheDocument()
  })
})

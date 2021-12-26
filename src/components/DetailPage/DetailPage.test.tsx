import { render, screen } from '@testing-library/react'

import { useDetailPageData } from '@/shared/hooks/useData'
import { mockFilm } from '@/shared/test/mockData'

import DetailPage from './index'

jest.mock('@/shared/hooks/useData', () => ({
  useDetailPageData: jest.fn(),
}))

describe('Loading - Detail Page', () => {
  beforeEach(() => {
    ;(useDetailPageData as jest.Mock).mockReturnValue({
      isLoading: true,
      data: mockFilm,
    })

    render(<DetailPage />)
  })

  test('is rendering the loading component', () => {
    const target = screen.getByRole('status', { name: 'Loading' })
    expect(target).toBeInTheDocument()
  })
})

describe('Loaded - Detail Page', () => {
  beforeEach(() => {
    ;(useDetailPageData as jest.Mock).mockReturnValue({
      isLoading: false,
      data: mockFilm,
    })

    render(<DetailPage />)
  })

  test('is rendering main container', () => {
    const target = screen.getByRole('main')
    expect(target).toHaveAccessibleName('Detail Page')
  })

  test('is rendering header elements', () => {
    const link = screen.getByRole('link')
    const logo = screen.getByRole('img', { name: 'Star Wars' })

    expect(link).toHaveAccessibleName('Go Back')
    expect(logo).toBeInTheDocument()
  })

  test('is rendering card element', () => {
    const card = screen.getByRole('article')
    expect(card).toBeInTheDocument()
  })

  test('is rendering poster element', () => {
    const poster = screen.getByRole('img', {
      name: 'Star Wars: The Rise of Skywalker',
    })
    expect(poster).toBeInTheDocument()
  })

  test('is rendering heading elements', () => {
    const title = screen.getByRole('heading', {
      name: 'Star Wars: Star Wars: The Rise of Skywalker',
    })
    const separator = screen.getByRole('separator')
    const subtitle = screen.getByRole('heading', {
      name: 'By George Lucas 2019',
    })

    expect(title).toBeInTheDocument()
    expect(separator).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
  })

  test('is rendering text opening element', () => {
    const text = screen.getByRole('region', { name: 'Opening' })
    expect(text).toHaveTextContent(
      'Lorem ipusm dolor sit amet consectetur adipisicing elit.'
    )
  })
})

describe('404 Page - Detail Page', () => {
  beforeEach(() => {
    ;(useDetailPageData as jest.Mock).mockReturnValue({
      isLoading: false,
      data: mockFilm,
    })

    render(<DetailPage />)
  })

  test('is rendering the proper message', () => {
    const target = screen.getByRole('alert', { name: 'Page not found' })
    expect(target).toHaveTextContent(
      `We couldn't found the film you're looking for, but we picked a random film for you 😅`
    )
  })
})

describe('Server Error - Detail Page', () => {
  beforeEach(() => {
    ;(useDetailPageData as jest.Mock).mockReturnValue({
      isLoading: false,
      data: undefined,
    })

    render(<DetailPage />)
  })

  test('is rendering warning message', () => {
    const target = screen.getByRole('alert')
    expect(target).toHaveAccessibleName('Warning')
    expect(target).toHaveTextContent(
      'Oh no!' + 'R2D2 is having troubles displaying this page.'
    )
  })
})

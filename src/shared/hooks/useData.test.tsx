import { renderHook } from '@testing-library/react-hooks/pure'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { useDetailPageData, useListingPageData } from '@/shared/hooks/useData'
import * as Api from '@/shared/services/api'
import { mockFilm } from '@/shared/test/mockData'

describe('useListingPageData hook', () => {
  const queryClient = new QueryClient()

  const wrapper = ({ children }: React.HTMLAttributes<React.FC>) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )

  beforeEach(() => {
    jest
      .spyOn(Api, 'fetchFilms')
      .mockReturnValue(Promise.resolve([mockFilm, mockFilm]))
  })

  test('is retrieving 2 elements', async () => {
    const { result, waitFor } = renderHook(useListingPageData, { wrapper })

    await waitFor(() => result.current.isSuccess, {
      timeout: 10000,
    })

    expect(result.current.data).toHaveLength(2)
  })
})

describe('useDetailPageData hook', () => {
  const queryClient = new QueryClient()

  const wrapper = ({ children }: React.HTMLAttributes<React.FC>) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )

  beforeEach(() => {
    jest.spyOn(Api, 'fetchOneFilm').mockReturnValue(Promise.resolve(mockFilm))
  })

  test('is retrieving the ID 1', async () => {
    const { result, waitFor } = renderHook(useDetailPageData, {
      wrapper,
      initialProps: 1,
    })

    await waitFor(() => result.current.isSuccess, {
      timeout: 10000,
    })

    expect(result.current.data).toStrictEqual({
      director: 'George Lucas',
      filmImageUrl: 'https://starwars.com/assets/img/films/7.jpg',
      id: 1,
      openingCrawl: 'Lorem ipusm dolor sit amet consectetur adipisicing elit.',
      releaseDate: '2019-12-18',
      title: 'Star Wars: The Rise of Skywalker',
    })
  })
})

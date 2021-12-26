import { mockFilm } from '../test/mockData'
import { fetchFilms, fetchOneFilm } from './api'

describe('API', () => {
  const setGlobalFetch = (data: unknown) =>
    (global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(data),
      })
    ) as jest.Mock)

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('is performing a call to fetchFilms', async () => {
    setGlobalFetch([mockFilm])

    expect(await fetchFilms()).toStrictEqual([
      {
        director: 'George Lucas',
        filmImageUrl: 'https://starwars.com/assets/img/films/7.jpg',
        id: 1,
        openingCrawl:
          'Lorem ipusm dolor sit amet consectetur adipisicing elit.',
        releaseDate: '2019-12-18',
        title: 'Star Wars: The Rise of Skywalker',
      },
    ])
  })

  test('is performing a call to fetchOneFilm', async () => {
    setGlobalFetch(mockFilm)

    const result = await fetchOneFilm(1)

    expect(result).toStrictEqual({
      director: 'George Lucas',
      filmImageUrl: 'https://starwars.com/assets/img/films/7.jpg',
      id: 1,
      openingCrawl: 'Lorem ipusm dolor sit amet consectetur adipisicing elit.',
      releaseDate: '2019-12-18',
      title: 'Star Wars: The Rise of Skywalker',
    })
  })
})

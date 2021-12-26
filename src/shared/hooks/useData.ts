import { useQuery } from 'react-query'
import { fetchFilms, fetchOneFilm, TFilm } from 'shared/services/api'

export function useListingPageData() {
  return useQuery('films', fetchFilms)
}

export function useDetailPageData(id: TFilm['id']) {
  return useQuery(`films/${id}`, fetchOneFilm.bind(null, id))
}

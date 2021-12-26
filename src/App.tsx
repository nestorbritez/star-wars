import DetailPage from 'components/DetailPage'
import ListingPage from 'components/ListingPage'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental'
import { persistQueryClient } from 'react-query/persistQueryClient-experimental'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import tw from 'tailwind-styled-components'

const { VITE_DETAIL_PAGE_PATH } = import.meta.env

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
})

persistQueryClient({
  queryClient,
  persistor: createWebStoragePersistor({
    storage: window.localStorage,
  }),
})

const Footer = tw.footer`
  text-slate-500
  text-center
  my-8
`

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path={`/${VITE_DETAIL_PAGE_PATH}/:seoId`}
            element={<DetailPage />}
          />
          <Route path="/" element={<ListingPage />} />
        </Routes>
      </BrowserRouter>

      <Footer>
        <p>Made with ❤️ in Argentina</p>
      </Footer>
    </QueryClientProvider>
  )
}

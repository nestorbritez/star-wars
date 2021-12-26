import { render, screen } from '@testing-library/react'

import App from './App'

describe('App component', () => {
  beforeEach(() => {
    render(<App />)
  })

  test('renders the app', () => {
    const main = screen.getByRole('main')
    const footer = screen.getByRole('contentinfo', { name: 'footer' })

    expect(main).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
  })
})

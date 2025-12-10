import { render, screen } from '@testing-library/react'
import Home from '@/pages/Home'

describe('Home page', () => {
  it('renders heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument()
  })
})

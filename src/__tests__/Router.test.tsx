import { render, screen } from '@testing-library/react'
import { MemoryRouter, RouteObject, RouterProvider, createMemoryRouter } from 'react-router-dom'
import App from '@/App'
import Home from '@/pages/Home'
import About from '@/pages/About'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
    ],
  },
]

describe('Router', () => {
  it('navigates to Home by default', () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/'] })
    render(<RouterProvider router={router} />)
    expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument()
  })

  it('navigates to About', () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/about'] })
    render(<RouterProvider router={router} />)
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument()
  })
})

import { render } from '@testing-library/react'
import Button from '@/components/ui/Button'

describe('Tailwind Button styles', () => {
  it('renders primary button with classnames', () => {
    const { container } = render(<Button>Click</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })
})

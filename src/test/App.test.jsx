import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText(/Building Modern Web Applications/i)).toBeInTheDocument()
  })

  it('displays the slide deck component', () => {
    const { container } = render(<App />)
    expect(container.querySelector('.slide-deck')).toBeInTheDocument()
  })
})

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SlideDeck from '../components/SlideDeck'

const mockSlides = [
  {
    type: 'title',
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    footer: 'Test Footer',
  },
  {
    type: 'content',
    title: 'Content Slide',
    content: ['Point 1', 'Point 2', 'Point 3'],
  },
  {
    type: 'content',
    title: 'Another Slide',
    content: 'This is text content',
  },
]

describe('SlideDeck', () => {
  beforeEach(() => {
    // Mock requestFullscreen and exitFullscreen
    document.documentElement.requestFullscreen = vi.fn()
    document.exitFullscreen = vi.fn()
  })

  it('renders the first slide by default', () => {
    render(<SlideDeck slides={mockSlides} />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument()
  })

  it('displays slide counter correctly', () => {
    render(<SlideDeck slides={mockSlides} />)
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
  })

  it('navigates to next slide when next button is clicked', async () => {
    render(<SlideDeck slides={mockSlides} />)
    const nextButton = screen.getAllByRole('button')[1]

    await userEvent.click(nextButton)

    expect(screen.getByText('Content Slide')).toBeInTheDocument()
    expect(screen.getByText('2 / 3')).toBeInTheDocument()
  })

  it('navigates to previous slide when prev button is clicked', async () => {
    render(<SlideDeck slides={mockSlides} />)
    const nextButton = screen.getAllByRole('button')[1]
    const prevButton = screen.getAllByRole('button')[0]

    await userEvent.click(nextButton)
    await userEvent.click(prevButton)

    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
  })

  it('navigates with arrow keys', async () => {
    render(<SlideDeck slides={mockSlides} />)

    fireEvent.keyDown(window, { key: 'ArrowRight' })

    await waitFor(() => {
      expect(screen.getByText('Content Slide')).toBeInTheDocument()
    })
  })

  it('navigates with space key', async () => {
    render(<SlideDeck slides={mockSlides} />)

    fireEvent.keyDown(window, { key: ' ' })

    await waitFor(() => {
      expect(screen.getByText('Content Slide')).toBeInTheDocument()
    })
  })

  it('goes to first slide with Home key', async () => {
    render(<SlideDeck slides={mockSlides} />)

    // Navigate to second slide first
    fireEvent.keyDown(window, { key: 'ArrowRight' })

    await waitFor(() => {
      expect(screen.getByText('Content Slide')).toBeInTheDocument()
    })

    // Press Home
    fireEvent.keyDown(window, { key: 'Home' })

    await waitFor(() => {
      expect(screen.getByText('Test Title')).toBeInTheDocument()
    })
  })

  it('goes to last slide with End key', async () => {
    render(<SlideDeck slides={mockSlides} />)

    fireEvent.keyDown(window, { key: 'End' })

    await waitFor(() => {
      expect(screen.getByText('Another Slide')).toBeInTheDocument()
      expect(screen.getByText('3 / 3')).toBeInTheDocument()
    })
  })

  it('renders array content as list items', () => {
    render(<SlideDeck slides={mockSlides} />)

    fireEvent.keyDown(window, { key: 'ArrowRight' })

    waitFor(() => {
      expect(screen.getByText('Point 1')).toBeInTheDocument()
      expect(screen.getByText('Point 2')).toBeInTheDocument()
      expect(screen.getByText('Point 3')).toBeInTheDocument()
    })
  })

  it('renders string content as paragraph', async () => {
    render(<SlideDeck slides={mockSlides} />)

    fireEvent.keyDown(window, { key: 'End' })

    await waitFor(() => {
      expect(screen.getByText('This is text content')).toBeInTheDocument()
    })
  })

  it('wraps around from last to first slide', async () => {
    render(<SlideDeck slides={mockSlides} />)
    const nextButton = screen.getAllByRole('button')[1]

    // Navigate to last slide
    fireEvent.keyDown(window, { key: 'End' })

    await waitFor(() => {
      expect(screen.getByText('3 / 3')).toBeInTheDocument()
    })

    // Click next to wrap around
    await userEvent.click(nextButton)

    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
  })

  it('wraps around from first to last slide', async () => {
    render(<SlideDeck slides={mockSlides} />)
    const prevButton = screen.getAllByRole('button')[0]

    await userEvent.click(prevButton)

    expect(screen.getByText('Another Slide')).toBeInTheDocument()
    expect(screen.getByText('3 / 3')).toBeInTheDocument()
  })

  it('attempts to toggle fullscreen when F key is pressed', async () => {
    render(<SlideDeck slides={mockSlides} />)

    fireEvent.keyDown(window, { key: 'f' })

    await waitFor(() => {
      expect(document.documentElement.requestFullscreen).toHaveBeenCalled()
    })
  })

  it('displays progress bar with correct width', () => {
    const { container } = render(<SlideDeck slides={mockSlides} />)
    const progressFill = container.querySelector('.progress-fill')

    // First slide should show approximately 33.33%
    const width = progressFill.style.width
    expect(width).toContain('33.33')
  })
})

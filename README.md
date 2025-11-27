# Conference Slide Deck

A modern, dynamic slide deck application built with React for conference presentations.

## Features

- 🎨 **Beautiful UI** - Clean, professional design with auto-hiding controls
- ⌨️ **Keyboard Navigation** - Full keyboard support for seamless presentations
- 📊 **Progress Tracking** - Visual progress bar and slide counter
- 🖥️ **Fullscreen Mode** - Distraction-free presentation experience
- 📱 **Responsive Design** - Works on various screen sizes
- 🧪 **Well Tested** - Comprehensive unit and E2E test coverage

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view the slide deck.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Keyboard Controls

During presentations, use these keyboard shortcuts:

- **Arrow Right** or **Space** - Next slide
- **Arrow Left** - Previous slide
- **Home** - First slide
- **End** - Last slide
- **F** - Toggle fullscreen

## Testing

### Unit Tests

```bash
# Run tests
npm test

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

### E2E Tests

```bash
# Run Playwright tests
npm run test:e2e

# Run with UI
npm run test:e2e:ui

# Run in headed mode (see browser)
npm run test:e2e:headed
```

## Code Quality

### Linting

```bash
# Check for issues
npm run lint

# Auto-fix issues
npm run lint:fix
```

### Formatting

```bash
# Check formatting
npm run format:check

# Auto-format code
npm run format
```

## Project Structure

```
├── src/
│   ├── components/     # React components
│   │   └── SlideDeck.jsx
│   ├── data/          # Slide content
│   │   └── slides.js
│   ├── test/          # Unit tests
│   ├── App.jsx        # Main application
│   └── main.jsx       # Entry point
├── e2e/               # End-to-end tests
├── .demo/             # Demo Time configurations
└── public/            # Static assets
```

## Customizing Slides

Edit `src/data/slides.js` to customize your presentation content:

```javascript
const slides = [
  {
    type: 'title',
    title: 'Your Presentation Title',
    subtitle: 'Your Subtitle',
    footer: 'Your Name | Event 2025',
  },
  {
    type: 'content',
    title: 'Slide Title',
    content: [
      'Bullet point 1',
      'Bullet point 2',
      'Bullet point 3',
    ],
  },
  // Add more slides...
]
```

## Demo Time Integration

This project includes [Demo Time](https://marketplace.visualstudio.com/items?itemName=eliostruyf.vscode-demo-time) configurations for interactive code demonstrations.

### Available Demos

- **Introduction Demo** - Overview of the application structure
- **Component Deep Dive** - Explore the SlideDeck component
- **Data Structure** - Understand slide configuration
- **Testing Suite** - Review test implementations
- **Complete Presentation** - Full walkthrough with slides

### Running Demos

1. Install the [Demo Time extension](https://marketplace.visualstudio.com/items?itemName=eliostruyf.vscode-demo-time)
2. Open the Demo Time panel in VS Code
3. Click on any demo to execute it

See [`.demo/README.md`](.demo/README.md) for detailed demo documentation.

## Technology Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Vitest** - Unit testing framework
- **Playwright** - E2E testing framework
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Browser Support

Modern browsers with ES2015+ support:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

MIT License - feel free to use this for your presentations!

## Acknowledgments

Built with modern web technologies and best practices for delivering engaging conference presentations.

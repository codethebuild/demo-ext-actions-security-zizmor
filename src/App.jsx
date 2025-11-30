import SlideDeck from './components/SlideDeck'
import slides from './data/slides'
import './App.css'

function App() {
  return (
    <div className="App">
      <SlideDeck slides={slides} />
    </div>
  )
}

export default App

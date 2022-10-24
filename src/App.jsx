import { useState } from 'react'

import QuoteBox from './Quotes'

import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <QuoteBox />
    </div>
  )
}

export default App

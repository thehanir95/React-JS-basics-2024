import { useState } from 'react'
import Hello from './components/Hello'
import Fruits from './components/Fruits'

function App() {
  const [count, setCount] = useState(0)
  const person = {
    name: 'thehani',
    msg: 'hi',
    emoji: '👋',
    seatNumbers: [1,2,3]
  }
  return (
    <div className="App">
      <Hello persons={person}/>
      <Fruits/>
    </div>
  )
}

export default App

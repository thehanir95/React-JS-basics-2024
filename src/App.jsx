import { useState } from 'react'
import Hello from './components/Hello'

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
    </div>
  )
}

export default App

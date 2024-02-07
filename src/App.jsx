import { useState } from 'react'
import Hello from './components/Hello'
import Fruits from './components/Fruits'
import ConditionalComponent from './components/ConditionalComponent'
import Message from './components/Message'
import Counter from './components/Counter'
import Form from './components/Form'

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
      {/* <Hello persons={person}/>
      <Fruits/>
      <ConditionalComponent/>
      <Message/>
      <Counter/> */}
      <Form/>
    </div>
  )
}

export default App

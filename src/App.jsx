import { useState } from 'react'
import Hello from './components/Hello'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Hello name="thehani" msg="hi" emoji="👋"/>
    </div>
  )
}

export default App

import { useState } from 'react'
import Test from '@components/Test'
import '@styles/App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Test />
    </div>
  )
}

export default App

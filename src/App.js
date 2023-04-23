import React from "react"
import './style.css'


function App() {
  let [count, setCount] = React.useState(0)
  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    setCount(count - 1)
  }

  return (
    <div className='App'>
      <div>
        <h1>Счетчик:</h1>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>

      </div>

    </div>
  )
}

export default App
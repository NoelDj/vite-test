import React, { useState } from 'react'
import { Fireworks } from 'fireworks-js'
import logo from './logo.svg'
import './App.scss'
import isitfriday from "isitfriday"
function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Hello World</h1>
      <section>
        <h2>Another world</h2>
        <button onClick={() => test()}>Click</button>
      </section>
      <h2>Another h2</h2>
    </main>
  )
}

function test() {
  console.log(isitfriday())
}


export default App

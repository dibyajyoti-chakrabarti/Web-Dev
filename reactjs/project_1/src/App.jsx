import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  function increment() {
    setCounter(counter + 1)
  }
  function decrement() {
    setCounter(counter - 1)
  }

  return (
    <>
      <div className='bg-gray-600 h-72 w-60 flex flex-col items-center border-6 border-white rounded-2xl text-white'>
        <h1 className= 'font-bold p-7 text-3xl'>
          Value: {counter}
        </h1>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-10' onClick={increment}>
          Increment {counter}
        </button>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' onClick={decrement}>
          Decrement {counter}
        </button>
      </div>
    </>
  )
}

export default App

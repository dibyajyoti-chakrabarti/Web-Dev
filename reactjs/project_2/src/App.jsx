import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor] = useState('bg-gray-400')
  function change(color){
    setColor(color)
  }
  return (
    <>
    <div className={`h-screen flex justify-center items-end ${color}`}>
      <div className='bg-white rounded-2xl h-12  m-10 flex gap-2'>
        <button className='bg-red-600' onClick={()=> change('bg-red-600')}>
          Red
        </button>
        <button className='bg-green-600' onClick={()=> change('bg-green-600')}>
          Green
        </button>
        <button className='bg-blue-600' onClick={()=> change('bg-blue-600')}>
          Blue
        </button>
        <button className='bg-yellow-600' onClick={()=> change('bg-yellow-600')}>
          Olive
        </button>
        <button className='bg-gray-500' onClick={()=> change('bg-gray-500')}>
          Gray
        </button>
        <button className='bg-yellow-400' onClick={()=> change('bg-yellow-400')}>
          Yellow
        </button>
        <button className='bg-pink-400' onClick={()=> change('bg-pink-400')}>
          Pink
        </button>
        <button  className='bg-purple-600' onClick={()=> change('bg-purple-600')}>
          Purple
        </button>
      </div>
    </div>
    </>
  )
}

export default App

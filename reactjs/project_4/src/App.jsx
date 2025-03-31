import { useState } from 'react'
import './App.css'
import useExchangeRate from './hooks/Exchange'

function App() {
  const [currency, setCurrency] = useState("USD")
  const [target, setTarget] = useState("USD")
  const exchangeData = useExchangeRate(currency)
  const currencies = Object.keys(exchangeData)
  
  const [amt,setAmt] = useState(0)
  return (
    <>
    <div className='bg-gray-600 flex justify-center items-center h-[100vh]'>
        <div className='bg-gray-400 w-80 h-85 border-4 border-black rounded-3xl flex flex-col items-center'>
          <div className='flex items-center p-5'>
            <input type="number" onChange={(e)=>{
              setAmt(e.target.value)
            }}
            placeholder='Amount'
            className='bg-white  rounded-l-md p-2 w-35 h-12 border-r-0  border-3 border-black text-3xl'/>
            <select name="" id="" value={currency}
              onChange={(e)=>{
                setCurrency(e.target.value)
              }}>
                
                {currencies.map((cur,index)=>(
                  <option key={index} value={cur}>{cur}</option>
                ))}
            </select>
          </div>
          <hr className= 'border-2 mb-7 border-black w-80'/>
          <button className='bg-green-500 text-white font-bold pl-5 pr-5 pt-2 pb-2 mb-7 border-3 border-black rounded-3xl hover:bg-green-400 cursor-pointer text-5xl'
          onClick={()=>{
            let temp = currency
            setCurrency(target)
            setTarget(temp)
          }}
          >
          
            SWITCH
          </button>
          <hr className= 'border-2 mb-7 border-black w-80'/>
          <div className='flex justify-center items-center'>
            <div className='bg-white p-2 w-35 h-12 border-r-0  border-3 border-black text-3xl rounded-l-md'>
              {(exchangeData[target]*amt).toFixed(2)}
            </div>
            <select name="" id="" value={target}
            onChange={(e)=>{
              setTarget(e.target.value)
            }}>
              
              {currencies.map((cur,index)=>(
                <option key={index} value={cur}>{cur}</option>
              ))}
            </select>
          </div>
            
        </div>
      </div>
    </>
  )
}

export default App

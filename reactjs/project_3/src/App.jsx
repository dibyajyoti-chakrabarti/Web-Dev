import { useState, useEffect, useRef} from 'react'

function App() {
  const [pass,setPass] = useState("")
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [length, setLength] = useState(6)
  const passRef = useRef(false)

  useEffect(()=>{
    generate()
  },[length,character,number])
  function generate(){
    let password = ""
    let bank= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (number) bank+="0123456789"
    if (character) bank+="!@#$%^&*()_{}[]"
    for (let index = 1; index <=length; index++) {
      let charIndex = Math.floor(Math.random()*bank.length)
      password+=bank[charIndex]
    }
    setPass(password)
  }
  return (
    <>
      <div className='h-[100vh] bg-gray-600 flex justify-center items-center'>
        <div className='h-85 w-65 bg-white border-7 border-black rounded-3xl flex flex-col items-center'>
          <input type="text"
          value={pass} 
          ref={passRef}
          className='border-3 border-black w-fit m-5 p-2 font-mono readonly pointer-events-none'/>
          <button className='border-2 border-black rounded-3xl pl-4 pr-4 bg-blue-600 text-white font-bold hover:bg-blue-500 cursor-pointer h-12 '
          onClick={()=>{
            passRef.current.select()
            passRef.current.setSelectionRange(0,10)
            window.navigator.clipboard.writeText(pass.slice(0,10))
          }}>
            COPY
          </button>
          <div className='flex gap-2 m-5 items-center font-bold font-mono text-[15px] flex-col'>
            <input 
            type="checkbox"
            className='w-4 h-4' onChange={()=>{setNumber((val)=>!val)}}
            />NUMBERS
            <input 
            type="checkbox"
            className='w-4 h-4' 
            onChange={()=>{setCharacter((val)=>!val)}}
            /> SPECIAL CHARACTERS
          </div>
          <input type="range" name="" id="" min={6} max={20} onChange={(e)=>setLength(Number(e.target.value))}/>
          <div className='text-black'>
          {length}
        </div>
        </div>
      </div>
    </>
  )
}

export default App

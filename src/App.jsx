import React, { useState, useCallback, useEffect } from 'react'
// import Hero from './Components/Hero/Hero'

function App() {
  const [legth, setlegth] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordGenerator= useCallback(()=>{
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass;
    if(numberAllowed) str+="123456789";
    if (charallowed) str+="!@#$%^&*[]{}()"; 
    for( let i=1; i<=length; i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setpassword(pass)

  },[legth, numberAllowed, charallowed, setpassword])

  useEffect(()=>{
passwordGenerator()
  },[length, numberAllowed, passwordGenerator, charallowed])
  return (
  //  <div className="container">
  //   <Hero />
  //  </div>

  <div className="container">
    <p className='para'><input type="text" value={password}  readOnly/><button>copy</button></p>
    <div className="div">
      <input type="range" value={length}/> <span>lenght </span>
  <input type="checkbox" defaultChecked={charallowed}name="" id="inputNumber" 
  onChange={()=>{
    setnumberAllowed((prev)=> !prev);
  }}/> <span>numberAllowed</span>

  <input type="checkbox" defaultChecked={charallowed}name="" id="inputNumber" 
  onChange={()=>{
    setnumberAllowed((prev)=> !prev);
  }}/> <span>charallowed</span>

    </div>
  </div>
  )
}

export default App
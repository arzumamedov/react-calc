import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [add, setAdd] = useState('')
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')

  const getNum1 = (e) => {
    setNum1(e.target.value)
  }

  const getNum2 = (e) => {
    setNum2(e.target.value)
  }


  const cem = () => {
    setAdd(parseInt(num1) + parseInt(num2))
    console.log("salam");
  }
  const ferq = () => {
    setAdd(parseInt(num1) - parseInt(num2))
    console.log("salam");
  }
  const nisbet = () => {
    if (num2 === "0") {
      setAdd("0-a bolmek olmaz")
    } else {
      setAdd(parseInt(num1) / parseInt(num2))
    }
    console.log("salam");
  }
  const hasil = () => {
    setAdd(parseInt(num1) * parseInt(num2))
    console.log("salam");
  }




  return (
    <>
      <input onChange={getNum1} type="text" placeholder='Enter num 1' />
      <input onChange={getNum2} type="text" placeholder='Enter num 2' />
      <button onClick={cem}>Add</button>
      <button onClick={ferq}>Subsctract</button>
      <button onClick={nisbet}>Divide</button>
      <button onClick={hasil}>Multiply</button>
      <div>{add}</div>
    </>
  )
}

export default App

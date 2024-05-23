import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date())


  useEffect(()=>{
    const timerId = setInterval(()=>setTime(new Date()),1000);
    console.log(`date inside useEffect`)
    return ()=> clearInterval(timerId);
  },[]);


  return (
    <center>
      <h1>India clock</h1>
      <div>Current time is : {time.toLocaleString()}</div>
    </center>
  )
}

export default App

import { useCallback, useState, useMemo } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Navabar from './compnents/Navabar'

export function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);


  const getAdjective = useCallback(() =>{
    return 'good'+ count;
  },[count])

  // const getAdjective = () =>{
  //   return 'good'+ count;
  // }

  const isEven = useMemo(() => {
    let i=0;
    while(i<1000000000) i++;
    return count % 2 === 0
  },[count]);
 
  return (
    <>
      <div>
        <Navabar adjectice ={'good'} getAdjective={getAdjective}/>
        <span>Count1 is even or odd : {isEven ? 'Even' : 'Odd'}</span>
        <a href="https://vitejs.dev" target="_blank"> 
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count1 is {count}
        </button>
        <button onClick={() => setCount2((count2) => count2 + 1)}>
          count2 is {count2}
        </button>
        <p>
          Edit <code>src/app.jsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}

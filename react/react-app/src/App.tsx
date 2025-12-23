import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import './components/Counter.tsx'
import Counter from './components/Counter.tsx'

function App() {

interface GreetingProps {
  name: string;
  age: BigInteger;
}

  const Greeting = ({name}: GreetingProps) => <h2>Hello,{name}</h2>
  const Numtic = ({age}: GreetingProps) => <h3>today your age is {age}</h3>

  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)
  const [multi, setMulti] = useState(1)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Greeting name="Alice"></Greeting>
      <Numtic age="22"></Numtic>
      <Counter></Counter>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count +1 is {count}
        </button>
        <button onClick={ () => setNum( (num) => num - 1 ) }>
          num -1 is {num}
        </button>
        <button onClick={() => setMulti( multi => multi*2 )}>
          multi *2 is {multi}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

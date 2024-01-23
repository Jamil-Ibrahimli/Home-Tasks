import { useState } from 'react'
import './App.css'
import Func_Buttons from './components/Func_Buttons';
import Class_Buttons from './components/Class_Buttons';
import HomePage from './pages/HomePage';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Todo} from './components/Todo'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <>
      {isLoggedIn && <Todo/>}
    </>
  )
}

export default App

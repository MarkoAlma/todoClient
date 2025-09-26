import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Todo} from './components/Todo'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './components/Login'

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', minHeight:'100vh'}}>
      {isLoggedIn ? <Todo setIsLoggedIn={setIsLoggedIn}/> : <Login setIsLoggedIn={setIsLoggedIn}/>}
    </div>
  )
}

export default App

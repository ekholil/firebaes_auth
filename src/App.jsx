import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Login from './Components/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Components/Login/Signup'
import Home from './Components/Home/Home'
import Goal from './Components/Goal/Goal'
import Goals from './Components/Goal/Goals'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/signin' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/goal' element={<Goal />} />
            
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

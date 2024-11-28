import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Register from './pages/Register'
import Login from './pages/Register'
import Pricing from './pages/Pricing'

function App() {
  return (

    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact-Us' element={<ContactUs/>}/>
        <Route path='/plans' element={<Pricing/>}/>
      </Routes>
    </div>
  )
}

export default App
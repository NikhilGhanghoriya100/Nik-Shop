import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Shop from './pages/Shop/Shop'
import Contact from './pages/Contact/Contact'
import Cart from './pages/Cart/Cart'


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
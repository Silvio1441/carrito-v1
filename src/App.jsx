import React from 'react'
import useCostumContext from "./ContextManager/ContextProvider"
import {ProductCard} from "./components"
import  {CartPage, DetailPage, HomePage}  from './screens'
import { NavLink, Route, Routes } from 'react-router-dom'


/* import DetailPage from './screens/DetailPage/DetailPage' */

function App() {
 
  return (
    <div>
      <nav className='navbar'>
        <NavLink to="/cart" className="car">carrito</NavLink>
        <NavLink to="/" className="car">Home</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
      
    </div>
  )
}

export default App

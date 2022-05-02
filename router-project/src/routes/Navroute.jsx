import React from 'react'
import {Accessories} from '../components/Accessories'
import {Login} from '../components/Login'
import {Cart} from '../components/Cart'
import { Furniture } from '../components/Furniture'
import {Lightening} from '../components/Lightening'
import {NewArrivals} from '../components/NewArrivals'
import {Navbar} from '../components/Navbar'
import {Routes,Route} from 'react-router-dom'
import {Home} from  '../components/Home'

export const Navroute = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="furniture" element={<Furniture/>}/>
            <Route path="newarrivals" element={<NewArrivals/>}/>
            <Route path="lightening" element={ <Lightening/>}/>
            <Route path="accessories" element={<Accessories/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="cart" element={<Cart/>}/>
        </Routes>
    </div>
  )
}

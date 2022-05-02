import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { AboutUs } from '../components/AboutUs'
import{Contactus} from '../components/Contactus'
import {Faq} from '../components/Faq'
import {Delivery} from '../components/Delivery'
import { Footer } from '../components/Footer'
export const Footroute = () => {
  return (
    <div>
        <Footer/>
        <Routes>
            <Route path="aboutus" element={<AboutUs/>}/>
            <Route path="contactus" element={<Contactus/>}/>
            <Route path="faq" element={<Faq/>}/>
            <Route path="delivery" element={<Delivery/>}/>
        </Routes>
    </div>
  )
}

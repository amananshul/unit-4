import React from 'react'
import {NavLink} from 'react-router-dom'
import {Footstyle} from "../styles/Footer.styles"
export const Footer = () => {
  return (
    <div>
        <Footstyle>

        <NavLink to='/aboutus'>About Us</NavLink>
        <NavLink to='/contactus'>Contact Us</NavLink>
        <NavLink to='/faq'>FAQ</NavLink>
        <NavLink to='delivery'>Delivery</NavLink>
        </Footstyle>
        
    </div>
  )
}

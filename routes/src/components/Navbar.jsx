import React from 'react'
import {Link} from 'react-router-dom'
export const Navbar = () => {
  return (
    <div
    style={{
      marginBottom:"10px",
      padding:"10px",
      backgroundColor:"aqua",
      color:"white",
      fontSize:"30px",
      display:"flex",
      gap:"20px"
    }}>
      <div>
        <Link to="/home">Home</Link>
        <div>
        <Link to="/login">login</Link>
        </div>
        <div>
        <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  )
}

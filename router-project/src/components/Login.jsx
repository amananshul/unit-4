import React,{useContext,useState} from 'react'
import{AuthContext} from './Provider/AuthProvider'
export const Login = () => {
  const {login}=useContext( AuthContext )
  const handleSubmit=()=>{
    login()
  }
  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholder="Enter Your details" />
        <input type="password" placeholder="Enter Your password" />
        <input type="submit"  placeholder="submit" onSubmit={handleSubmit} />
    </div>
  )
}

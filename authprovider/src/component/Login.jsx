import React from 'react'
import {AuthContext} from '../context/AuthProvider'

function Login() {
    
    const {isAuth,token} = React.useContext( AuthContext )
  return (
    <div>
         {isAuth?`LOGGED IN token:${token}`:"LOGGED OUT"}
    </div>
  )
}

export default Login
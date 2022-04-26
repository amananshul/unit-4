import React,{useContext} from 'react'
import {AuthContext} from '../context/AuthProvider';

const Nav=() =>{
    
    const {toggleAuth,login}=useContext(AuthContext);
    

  return (
    <div>
        <button onClick={()=>{toggleAuth();login();}}>Login</button>
        <button>Logout</button>
    </div>
  )
}

export default Nav
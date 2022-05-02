import React,{ createContext,useState} from 'react'

export const AuthContext=createContext()
export const AuthProvider = ({ children}) => {

    const [token,setToken]=useState("")
   
     const login = async()=>{
       let res = await fetch("https://reqres.in/api/login",{
         method: 'POST',
         headers: {
           content: 'application/json'
         },
         body: JSON.stringify({
           email: 'eve.holt@reqres.in',
           password: 'cityslicka'
         })
       })
       let data = await res.json()
         setToken(data.token)
     }
    const logout = ()=>{
        setToken("")
    }

  return (
    <div>
        <AuthContext.Provider value={{token,login,logout}}>{children}</AuthContext.Provider>
    </div>
  )
}

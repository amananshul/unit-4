
import React, { createContext, useState } from 'react'

export const AuthContext = createContext()


export const AuthProvider=({ children })=> {

    const [isAuth, setIsAuth] = useState(false)
    const[token,setToken] = useState("")
    const toggleAuth = () => {
       setIsAuth(!isAuth)
    }
    const login= async()=>{
        let res = await fetch("https://reqres.in/api/login",{
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            })
        })
        let data=await res.json()
    //    return data.token
    setToken(data.token)
    }

    return (
        <AuthContext.Provider value={{isAuth,setIsAuth,toggleAuth,token,setToken,login }}>{children}</AuthContext.Provider>

    )
}


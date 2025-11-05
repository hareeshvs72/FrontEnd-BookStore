import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'

export const userAuthContext = createContext("")

function AuthenticationContext({children}) {
    const [role,setRole] = useState("")
    const [authorisedUser,setAuthorisedUser] = useState(false)
    useEffect(()=>{
           if(sessionStorage.getItem("users") && sessionStorage.getItem("token") ){
            const users = JSON.parse(sessionStorage.getItem("users"))
            setRole(users.role)
            setAuthorisedUser(true)
           }
    },[role,authorisedUser])
  return (
    <userAuthContext.Provider value={{role,authorisedUser,setAuthorisedUser}}>
     {children}
    </userAuthContext.Provider>
  )
}

export default AuthenticationContext
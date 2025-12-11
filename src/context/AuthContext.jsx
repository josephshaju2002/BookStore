import React, { createContext, useEffect, useState } from 'react'

export const userAuthContext = createContext("")

function AuthContext({children}) {

    const [role,setRole] = useState("")
    const [authorizedUser,setAuthorizedUser] = useState(false)

    useEffect(()=>{
        if(sessionStorage.getItem("existingUser") && sessionStorage.getItem("token")){
            const user = JSON.parse(sessionStorage.getItem("existingUser"))
            setRole(user.role)
            setAuthorizedUser(true)
        }
    },[role,authorizedUser])
  return (
    <>
      <userAuthContext.Provider value={{role,authorizedUser,setAuthorizedUser}}>
        {children}
      </userAuthContext.Provider>
    </>
  )
}

export default AuthContext

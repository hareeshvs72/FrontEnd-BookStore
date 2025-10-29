import React, { createContext, useState } from 'react'

export const searchBookContext = createContext("")
export const userUpdateContext = createContext("")
export const adminUpdateResponse = createContext("")


function ContextShare({ children }) {
    const [searchKey, setSearchKey] = useState("")
    const [userEditResponse, setUserEditResponse] = useState({})
     const [adminEdirResponse,setAdminEditRespones] = useState({})
    return (
        <div>
            <searchBookContext.Provider value={{ searchKey, setSearchKey }}>
                <userUpdateContext.Provider value={{ userEditResponse, setUserEditResponse }}>
                  <adminUpdateResponse.Provider value={{adminEdirResponse,setAdminEditRespones}}>  {children}</adminUpdateResponse.Provider>
                </userUpdateContext.Provider>
            </searchBookContext.Provider>
        </div>
    )
}

export default ContextShare
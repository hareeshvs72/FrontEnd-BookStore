import React, { createContext, useState } from 'react'

export const searchBookContext = createContext("")
export const userUpdateContext = createContext("")
export const adminUpdateResponse = createContext("")
export const jobContext = createContext("")

function ContextShare({ children }) {
    const [searchKey, setSearchKey] = useState("")
    const [userEditResponse, setUserEditResponse] = useState({})
     const [adminEdirResponse,setAdminEditRespones] = useState({})
     const [addJobResponse,setAddJobResponse] = useState({})
    return (
        <div>
            <searchBookContext.Provider value={{ searchKey, setSearchKey }}>
                <userUpdateContext.Provider value={{ userEditResponse, setUserEditResponse }}>
                  <adminUpdateResponse.Provider value={{adminEdirResponse,setAdminEditRespones}}> 
                    <jobContext.Provider value={{addJobResponse,setAddJobResponse}}>
                         {children}
                         </jobContext.Provider>
                     </adminUpdateResponse.Provider>
                </userUpdateContext.Provider>
            </searchBookContext.Provider>
        </div>
    )
}

export default ContextShare
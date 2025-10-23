import React, { createContext,useState } from 'react'

export const searchBookContext = createContext("")



function ContextShare({ children }) {
    const [searchKey, setSearchKey] = useState("")

    return (
        <div>
            <searchBookContext.Provider value={{ searchKey, setSearchKey }}>
                {children}
            </searchBookContext.Provider>
        </div>
    )
}

export default ContextShare
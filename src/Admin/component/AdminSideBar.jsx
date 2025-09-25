
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { faBagShopping, faBars, faBook, faScrewdriverWrench, faUser } from '@fortawesome/free-solid-svg-icons'

function AdminSideBar() {
    const [listStatus , setListStatus] = useState(false)
  return (
    <>
        
         <div className='  w-full h-full '>
           <nav className='w-full md:p-20 flex items-center p-4 justify-between md:block flex-col h-full  text-black bg-[#EFF6FF] ' >
        {/* menu bar and login */}
    
          <div className='flex md:items-center  flex-col '>
           <FontAwesomeIcon className='border p-3' icon={faUser}  style={{width:'50px', height:'50px', borderRadius:'50%'}} />
           <p className='my-2'>User Name</p>
          </div>
                    <div className="flex justify-between items-center md:hidden">
                      <button onClick={()=>setListStatus(!listStatus)} ><FontAwesomeIcon icon={faBars} /></button>
                    </div>
  
      

        <ul className={listStatus? "flex flex-col":'md:flex flex-col justify-center  hidden'} >
          <div className='my-3'>
            <input type="radio" id='home' />
            <label htmlFor="home"><FontAwesomeIcon icon={faBook} className='mx-2' /><Link to={'/admin-dashbord'} >HOME</Link></label> 
          </div>
          <div className='my-3'>  
            <input type="radio" id='Book' />
            <label htmlFor="Book"><FontAwesomeIcon icon={faBook} className='mx-2' /><Link to={'/admin-resource'}>All Book</Link></label> 
          </div>
            <div className='my-3'>
            <input type="radio" id='CAREERS' />
            <label htmlFor="CAREERS"><FontAwesomeIcon icon={faBagShopping} className='mx-2' /><Link to={'/admin-career'}  >CAREERS</Link></label> 
          </div>
          <div className='my-3'>
            <input type="radio" id='Settings' />
            <label htmlFor="Settings"><FontAwesomeIcon icon={faScrewdriverWrench} className='mx-2' /><Link to={'/admin-settings'}  >Settings</Link></label> 
          </div>
        
        </ul>
      </nav>
         </div>

    </>
  )
}

export default AdminSideBar
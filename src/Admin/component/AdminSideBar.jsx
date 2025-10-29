
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { faBagShopping, faBars, faBook, faHome, faScrewdriverWrench, faUser } from '@fortawesome/free-solid-svg-icons'
import SERVERURL from '../../services/serverURL'
import { adminUpdateResponse } from '../../contextApi/ContextShare'

function AdminSideBar() {
  const [listStatus, setListStatus] = useState(false)
  const [adminDp,setAdminDp] = useState("")
  const [adminName,setAdminName] = useState("")
  const {adminEdirResponse,setAdminEditRespones} = useContext(adminUpdateResponse)
  useEffect(()=>{
    if(sessionStorage.getItem('users')){
      const user = JSON.parse((sessionStorage.getItem('users')))
      setAdminDp(user.profile)
      setAdminName(user.username)

    }
  
  },[adminEdirResponse])
  return (
    <>

      <div className='  w-full h-full '>
        <nav className='w-full md:p-20 flex items-center p-4 justify-between md:block flex-col h-full  text-black bg-[#EFF6FF] ' >
          {/* menu bar and login */}

          <div className='flex md:items-center  flex-col '>
            <img className='border ' src={adminDp=="" ?'https://tse1.mm.bing.net/th/id/OIP.w-f-qDRUjGt9e_SuPTcfcgHaHw?pid=Api&P=0&h=180' : `${SERVERURL}/uploads/${adminDp}` }alt='user admin logo' style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
            <p className='my-2'>{adminName}</p>
          </div>
          <div className="flex justify-between items-center md:hidden">
            <button onClick={() => setListStatus(!listStatus)} ><FontAwesomeIcon icon={faBars} /></button>
          </div>



          <ul className={listStatus ? "flex flex-col" : 'md:flex flex-col justify-center  hidden'} >
            <li className='my-3'>

              <Link to={'/admin-dashbord'} > <FontAwesomeIcon icon={faHome} className='mx-2' /> HOME </Link>
            </li>
            <li className='my-3'>

              <Link to={'/admin-resource'}> <FontAwesomeIcon icon={faBook} className='mx-2' />   Resources</Link>
            </li>
              <li className='my-3'>
              <Link to={'/admin-career'}  > <FontAwesomeIcon icon={faScrewdriverWrench} className='mx-2' /> CAREERS</Link>
            </li>
           
            <li className='my-3'>
              <Link to={'/admin-settings'}  > <FontAwesomeIcon icon={faScrewdriverWrench} className='mx-2' /> Settings</Link>
            </li>

          </ul>
        </nav>
      </div>

    </>
  )
}

export default AdminSideBar
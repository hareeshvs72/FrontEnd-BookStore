import { faInstagram, faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
              <div className='bg-gray-500 flex items-center justify-between px-3' >
                 <div >
                  <img src="/logo1.png " width={'51px'} height={'47px'} alt="" />
                 </div>
                 <h1 className='font-bold text-2xl'>Book Store</h1>
                 <div>
                  <FontAwesomeIcon className='ms-2' icon={faInstagram} />
                  <FontAwesomeIcon   className='ms-2' icon={faXTwitter} />
                  <FontAwesomeIcon  className='ms-2' icon={faFacebook} />
                  <Link to={'/login'} className='bg-red-400 py-2 ms-2 px-4 rounded' >Login</Link>
                 </div>
              </div>

    </>
  )
}

export default Header
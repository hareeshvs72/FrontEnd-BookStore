import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Component/Footer'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Home() {
  return (
    <>
      <Header />
      {/* landing */}
      <div className="flex justify-center flex-col items-center h-screen bg-[url(/bghome.jpg)] bg-center bg-cover text-white  ">
        <h1 className='md:text-5xl font-bold text-3xl '>WonderFull Gifts</h1>
        <p>   Give your family and friends a book   </p>

        <div className='mt-9 w-75  md:w-100 py-2 rounded-3xl ps-3 flex flex-cols px-3 justify-center items-center   bg-white'>
          <input type="text" placeholder='search Books' className='w-100 border-none outline-0  text-black me-2' />
        <button>  <FontAwesomeIcon className='text-black' icon={faMagnifyingGlass} /></button>
        </div>  
      </div>

      {/* arival */}
      {/* testimonial */}
      <Footer />
    </>
  )
}

export default Home
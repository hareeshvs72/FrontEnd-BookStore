import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Component/Footer'
function AllBooks() {
  return (
    <>
   <Header/>
      <>
         <div className="flex justify-center items-center flex-col my-5">
          <h1 className="text-3xl font-bold">Collections</h1>
          <div className="flex my-5">
            <input type="text" className='p-2 rounded border border-gray-400 text-black w-100 placeholder-gray-400' placeholder='Search by Title'/>
            <button className='px-5 bg-blue-400'>Search</button>
          </div>
         </div>

         {/* grid */}

         <div className="grid grid-cols-3 p-5">
          <div className="col-span-1">
            <h1 className="text-2xl font-semibold">Filter</h1>
            <div className="mt-3">
              <input type="radio" id='literaray ' name='filter' />
              <label  className='ms-3' htmlFor='literaray '  /> dfghjk
            </div>
          </div>
         </div>
      
      
      </>




      <Footer/>
    
    </>
  )
}

export default AllBooks
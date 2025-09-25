import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Component/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'


function ViewBook() {
  return (
    <>
      <Header />

      <div className="md:m-10 m-5">
        <div className="border p-5 shadow border-gray-200">
          <div className="md:grid grid-cols-4">
            <div className="col-span-1">
              <img src="/book.jpg" alt="book" />
            </div>
            <div className="col-span-3 p-5">

              <div className="flex justify-between ">
                <h1 className="text-xl font-bold">Title</h1>
                <button>👁️</button>

              </div>
              <p>Author</p>
              <div className='md:grid grid-cols-3 gap-5 my-10  '>
                
                  <p className='font-bold'>Publisher : Penguin Life  </p>
                  <p className='font-bold'>Language : English</p>
                  <p className='font-bold'>No. of pages : 208</p>
                  <p className='font-bold'> Seller Mail : maxwell@gmail.com     </p>
                  <p className='font-bold'> Real : $ 15</p>
                  <p className='font-bold'>ISBN : 978-0143130727</p>
                 
              </div>
              <div className="md:my-10 my-4">
                <p className='font-bols text-lg'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque vero voluptas aliquid labore id libero quos dolores recusandae ex quaerat, quidem in quo saepe iste placeat inventore modi! Sequi, repudiandae!
                </p>
              </div>
               <div className='flex justify-end'>
              <button className='bg-blue-900 text-white p-2 rounded'><FontAwesomeIcon icon={faBackward} className='me-3'/>Back</button>
              <button className='bg-green-900 text-white p-2 ms-5 rounded'>Buy $123</button>
            </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}

export default ViewBook
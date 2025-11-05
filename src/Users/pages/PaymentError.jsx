import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Component/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
function PaymentError() {
  return (
    <>
    <Header/>
    <div className='container my-10'>
            <div className="md:grid grid-cols-2 px-20 justify-center items-center">
                <div>
                    <h1 className="md:text-4xl text-blue-600">Sorry Your Payment Is UnSuccessFull... </h1>
                    <p className='text-2xl my-4'>We Apologize For The Inconvinience Cause And Appreciate Your Visit To BookStore ......</p>
                    <Link to={'/all-books'} className='bg-blue-800 px-4 my-3 inline-block  py-3'> <FontAwesomeIcon icon={faBackward } />  Explore More Books</Link>
                </div>
                 <div className='flex justify-center items-center'>
                <img src="https://i.pinimg.com/originals/9d/16/7e/9d167e72839894c971c90f60ab00d916.gif" alt="error" />
            </div>
            </div>
           
    </div>
    <Footer/>
    </>
   
  )
}

export default PaymentError
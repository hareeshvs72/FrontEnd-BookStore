import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Component/Footer'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { getAllBookApi } from '../../services/allAPI'

function AllBooks() {
    const [listStatus , setListStatus] = useState(false)
    const [token , setToken ] = useState("")
    const [books,setBooks] = useState([])
    console.log(books);
    
    useEffect(()=>{
            if(sessionStorage.getItem("token")){
              const userToken = sessionStorage.getItem("token")
              setToken(userToken)
              getAllBooks(userToken)
            }
    },[])
   
   const getAllBooks = async(userToken)=>{
    const reqHeader = {
       " Authorization" :`Bearer ${userToken}`
    }
   try{
       const result = await getAllBookApi(reqHeader)
       if(result.status == 200){
             setBooks(result.data)
       }
       else{
        console.log(result);
        
        toast.warning(result.response.data)

       }
   }catch(err){
    console.log(err);
    
   }
   }
  return (
    <>
   <Header/>
      {token ?
      <>
         <div className="flex justify-center items-center flex-col my-5">
          <h1 className="text-3xl font-bold">Collections</h1>
          <div className="flex my-5 justify-center  w-full p-3 ">
            <input type="text" className='p-2 rounded border border-gray-400 text-black w-100 placeholder-gray-400' placeholder='Search by Title'/>
            <button className='px-5 bg-blue-400'>Search</button>
          </div>
         </div>

         {/* grid */}

         <div className="md:grid grid-cols-4 p-5 md:px-20">
          <div className="col-span-1">
            <div className='flex justify-between mb-8 md:mb-0'>
              <h1 className="text-2xl font-semibold">Filter</h1>
               <button onClick={()=>setListStatus(!listStatus)} className='text-2xl md:hidden' ><FontAwesomeIcon icon={faBars} /></button>
              </div>
           
           <div className={listStatus ? 'block my-3 md:my-0':'md:block hidden '}>
             <div className="mt-3">
                <input type="radio" id='Literary' name='filter' className='me-2' />
                <label htmlFor="Literary">Literary Fiction</label>
              </div>  
              <div className="mt-3">
                <input type="radio" id='Philosophy' name='filter' className='me-2' />
                <label htmlFor="Philosophy">Philosophy</label>
              </div>
              <div className="mt-3">
                <input type="radio" id='Romance' name='filter' className='me-2' />
                <label htmlFor="Romance">Romance</label>
              </div>
              <div className="mt-3">
                <input type="radio" id='Mystery/Thriller' name='filter' className='me-2' />
                <label htmlFor="Mystery/Thriller">Mystery/Thriller</label>
              </div>
              <div className="mt-3">
                <input type="radio" id='Horror' name='filter' className='me-2' />
                <label htmlFor="Horror">Horror</label>
              </div>
              <div className="mt-3">
                <input type="radio" id='Auto/Biography' name='filter' className='me-2' />
                <label htmlFor="Auto/Biography">Auto/Biography</label>
              </div>
              <div className="mt-3">
                <input type="radio" id='Self-Help' name='filter' className='me-2' />
                <label htmlFor="Self-Help">Self-Help</label>
              </div>
              <div className="mt-3">
                <input type="radio" id='Politics' name='filter' className='me-2' />
                <label htmlFor="Politics">Politics</label>
              </div>
           </div>
          </div>
          <div className="col-span-3">
            <div className="md:grid grid-cols-4">
              {/* dupliacte card */}
              {
                books?.length>0 ?
                books.map((items)=>( 
                <div key={items._id} className="shadow p-3 rounded my-3 mx-2">
              <img width={'100%'} style={{ height: '300px' }} src={items?.imageUrl} alt="book" />
              <div className="flex justify-center flex-col items-center ">
                <p className="text-blue-700 font-bold my-3 text-lg">{items?.author.slice(0,18)}</p>
                <p className='text-center' >{items?.title.slice(0,20)}</p>
                <p>$ {items?.price}</p>
                <Link to={`/books/${items?._id}/view`} className='px-5 py-3 bg-blue-400 my-3' >View...</Link>
              </div>
            </div>))
               
            :
            <p className='text-center'>Loading !!!!</p>
            }
              
            </div>
          </div>
         </div>
      
      
      </>
      :
       <div className='my-10 flex items-center justify-center flex-col'>
               <img src="https://cdn-icons-gif.flaticon.com/11255/11255957.gif" alt="lock" width={'500px'} />
               <p className='font-bold text-xl'>Please <Link to={'/login'} className='text-blue-400'>Login</Link> To Explore More !!!</p>
       </div>
      }




      <Footer/>
       <ToastContainer
             position="top-right"
             autoClose={3000}
             pauseOnHover
             theme="colored"
     
           />
    </>
  )
}

export default AllBooks
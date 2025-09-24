import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Auth({register}) {
  return (
    <>
      <div className="flex items-center justify-center p-5   w-full min-h-screen  flex-col  bg-[url(https://tse2.mm.bing.net/th/id/OIP.KeRduNXcbnI6lIpUsQzq3gHaFj?pid=Api&P=0&h=180)] bg-no-repeat bg-cover">
        <h1 className='font-bold text-3xl my-5 text-white' >BOOK STORE</h1>
        <div className='bg-black  p-5 rounded-2xl  shadow-2xl  flex-col '>
            <div className='flex items-center justify-center flex-col ' >
              <FontAwesomeIcon icon={faUser} className='border border-white p-5 text-white text-2xl rounded-full  ' style={{width:'50px',height:'50px', borderRadius:'50%'}} />
              <p className='font-bold text-white text-2xl my-2'>{register ? "Register" :"Login"}</p>
            </div>
             <form>
              {register &&
                <input type="text" placeholder='User Name' className='px-3 py-2 my-2 w-full bg-white rounded' />
              }
               <input type="email" placeholder='Email Id' className='px-3 py-2 my-2 w-full bg-white rounded' />
                 <input type="password" placeholder='Password' className='px-3 py-2 my-2 w-full bg-white rounded' />
                 <div className='flex justify-between mb-5 '>
                  <p className='text-sm text-yellow-400 tracking-tighter'>*never share  the password  with others</p>
                  <p className='underline text-sm text-white'>forget password</p>
                 </div>
  
                {
                  register? 
                   <button className='w-full  py-2 rounded bg-green-800 text-white'>Register</button>
                   :
                    <button className='w-full  py-2 rounded bg-green-800 text-white'>Login</button>
                }
                <div className='text-center my-3 text-white'>
                 ---------or------------
               </div>
               {/* google auth  */}
               {
                  register ? 
                  <p  className='text-white text-center text-sm' >Are You Already A user? <Link to={'/login'} className='underline text-yellow-400' >Login</Link></p>
                  :
                   <p className='text-white text-center text-sm'>Are You  A New  USer? <Link to={'/register'} className='underline text-yellow-400' >Register</Link></p>
               }
               
             </form>

               
        </div>
      </div>
           
    </>
  )
}

export default Auth
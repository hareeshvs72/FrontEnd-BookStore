import React, { useEffect, useState } from 'react'
import AdminHead from '../component/AdminHead'
import Footer from '../../Component/Footer'
import AdminSideBar from '../component/AdminSideBar'
import { getAllUserApi } from '../../services/allAPI'
import SERVERURL from '../../services/serverURL'

function ResourceAdmin() {
  const [bookListStatus, setBookListStatus] = useState(true)
  const [userListStatus, setUserListStatus] = useState(false)
  const [allusers,setAllusers] = useState([])
  console.log(allusers);
  
    // const [token,setToken] =useState("")
useEffect(()=>{
  if(sessionStorage.getItem('token')){
    const token = sessionStorage.getItem('token')
    if(bookListStatus == true){

    }else if(userListStatus == true){
      getAllUsers(token)
    }
  }
},[userListStatus])
const getAllUsers = async(userToken)=>{
  const reqHeader = {
        "Authorization": `Bearer ${userToken}`
      }

      try {
        const result = await getAllUserApi(reqHeader)
        setAllusers(result.data)
      } catch (error) {
        console.log(error);
        
      }
}
  return (
    <>

      <AdminHead />

      <>
        <div className="md:grid grid-cols-4 ">
          <div className='col-span-1'>
            <AdminSideBar />
          </div>
          <div className='col-span-3'>
            <div className='p-10'>
              <h1 className="text-3xl text-center font-bold">All Resources</h1>
              <div className="flex justify-center items-center my-5 font-bold">
                <p onClick={() => { setBookListStatus(true); setUserListStatus(false) }} className={bookListStatus ? 'border border-b-0 rounded text-blue-500 p-4 cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'} >Sell Book </p>
                <p onClick={() => { setUserListStatus(true); setBookListStatus(false) }} className={userListStatus ? 'border border-b-0 rounded text-blue-500 p-4 cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'} >Book Status</p>


              </div>
              {/* book cards or book list */}
              {bookListStatus && 
              <div className="md:grid grid-cols-4 w-full mt-5">
                <div className="p-3">
                  <div className="shadow p-3 rounded mx-2">
                    <img width={'100%'} style={{ height: '300px' }} src="https://wallpaperaccess.com/full/1209397.jpg" alt="book" />
                    <div className="flex justify-center flex-col items-center ">
                      <p className="text-blue-700 font-bold text-lg">Author</p>
                      <p >Book Title</p>
                      <p>$ 400</p>

                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="shadow p-3 rounded mx-2">
                    <img width={'100%'} style={{ height: '300px' }} src="https://wallpaperaccess.com/full/1209397.jpg" alt="book" />
                    <div className="flex justify-center flex-col items-center ">
                      <p className="text-blue-700 font-bold text-lg">Author</p>
                      <p >Book Title</p>
                      <p>$ 400</p>

                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="shadow p-3 rounded mx-2">
                    <img width={'100%'} style={{ height: '300px' }} src="https://wallpaperaccess.com/full/1209397.jpg" alt="book" />
                    <div className="flex justify-center flex-col items-center ">
                      <p className="text-blue-700 font-bold text-lg">Author</p>
                      <p >Book Title</p>
                      <p>$ 400</p>

                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="shadow p-3 rounded mx-2">
                    <img width={'100%'} style={{ height: '300px' }} src="https://wallpaperaccess.com/full/1209397.jpg" alt="book" />
                    <div className="flex justify-center flex-col items-center ">
                      <p className="text-blue-700 font-bold text-lg">Author</p>
                      <p >Book Title</p>
                      <p>$ 400</p>

                    </div>
                  </div>
                </div>
              </div>}

              {/* user list  */}
              {userListStatus &&
               <div className="md:grid grid-cols-3 w-full mt-5">
              {allusers?.length>0 ?  
               allusers?.map((item,index)=>(
                 <div key={index} className="p-3">

                  <div className="shadow p-3   bg-gray-100 rounded mx-2">
                    <p className="text-red-700 font-bold text-sm">ID:{item?._id}</p>
                    <div className='flex justify-around mt-3'>
                      <img width={'50px'} style={{ height: '50px', borderRadius: '50%' }} src={item?.profile?`${SERVERURL}/uploads/${item?.profile}`: "https://tse1.mm.bing.net/th/id/OIP.w-f-qDRUjGt9e_SuPTcfcgHaHw?pid=Api&P=0&h=180" } alt="book" />
                      <div className="flex justify-center flex-col items-center ">

                        <p >{item?.username}</p>
                        <p>{item?.email}</p>

                      </div>
                    </div>
                  </div>
                </div>
               ))
             
                :
                <div>
                  <p>No users</p>
                </div>
                }
               

              </div>}


            </div>
          </div>
        </div>


      </>

      <Footer />

    </>
  )
}

export default ResourceAdmin
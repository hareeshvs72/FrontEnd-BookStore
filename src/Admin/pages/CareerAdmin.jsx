import React, { useContext, useEffect, useState } from 'react'
import AdminHead from '../component/AdminHead'
import Footer from '../../Component/Footer'
import AdminSideBar from '../component/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareUpRight, faLocationDot, faXmark, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import AddJob from '../component/AddJob'
import {  deleteJobApi, getAllJobApi } from '../../services/allAPI'
import { jobContext } from '../../contextApi/ContextShare'

function CareerAdmin() {
    const  {addJobResponse,setAddJobResponse} =useContext(jobContext)

  const [jobPostList, setJobPostlist] = useState(true)
  const [listApplicationStatus, setListAplicationStatus] = useState(false)
  const [allJobs,setAllJobs] = useState([])
 const [SearchKey,setSearchKey] = useState("")
const [deleteJobResponse ,setDeleteJobResponse] = useState({})

 useEffect(()=>{
   
  if(jobPostList){
  getAllJobs()

  }
 },[SearchKey,deleteJobResponse,addJobResponse])

 console.log(deleteJobResponse);
 
 console.log(allJobs);
 console.log(SearchKey);



//  get all jobs
  const getAllJobs = async()=>{
         try {
          const result = await getAllJobApi(SearchKey)
          if(result.status == 200){
            setAllJobs(result.data)
            
          }
         } catch (error) {
          console.log(error);
          
         }
  }
  // delete jobs 

  const deleteJob = async(id)=>{
    console.log("inside delete job");
    
    const token = sessionStorage.getItem("token") 
    if(token){
         const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
    try {
      const result = await deleteJobApi(id,reqHeader)
      if(result.status == 200){
        // console.log(result.data);
        
        setDeleteJobResponse(result.data)
        console.log(deleteJobResponse);
        
      }
    } catch (error) {
      console.log(error);
      
    }
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
                <p onClick={() => { setJobPostlist(true); setListAplicationStatus(false) }} className={jobPostList ? 'border border-b-0 rounded text-blue-500 p-4 cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'} >Job Post </p>
                <p onClick={() => { setListAplicationStatus(true); setJobPostlist(false) }} className={listApplicationStatus ? 'border border-b-0 rounded text-blue-500 p-4 cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'} >View Aplicant</p>


              </div>
              {/* job box  duplicate*/}
              {jobPostList &&
                <>
                  <div className="flex my-5  md:justify-between flex-col md:flex-row  items-center">
                    <div className='flex w-full'>
                      <input value={SearchKey} onChange={(e)=>setSearchKey(e.target.value)} type="text" className='p-2 me-2 rounded border border-gray-400 text-black w-100 placeholder-gray-400' placeholder='Job Title' />
                      <button className='md:px-5 px-2 md:py-2 bg-[#327E32] text-white'>Search</button>
                    </div>
                    <div className='mt-3 md:flex flex-start'>
                       <AddJob/> 
                    </div>
                  </div>

                 {allJobs?.length>0 ?
                 allJobs?.map((item,index)=>(
                   <div key={index} className='border w-full my-3 rounded shadow-2xl p-4'>
                    <div>
                      <div className='flex justify-between'>
                        <h1 className='m-3 font-bold'>{item?.title} </h1>
                        <button type='button' onClick={()=>deleteJob(item?._id)} className='md:px-5 px-3 bg-red-700 hover:bg-black border border-red-500 hover:text-blue-500 font-bold text-white'>Delete <FontAwesomeIcon icon={faTrash} className='text-xl' /></button>
                      </div>
                      <div className='px-5 pe-29'> <hr className='my-3 ' /></div>

                      <div>
                        <p className='my-3'> <FontAwesomeIcon icon={faLocationDot} className='text-blue-400 ' /> {item?.location}</p>
                        <p className='my-3'>  Job Type: {item?.jobType}</p>

                        <p className='my-3'> Salary: {item?.salary}</p>

                        <p className='my-3'> Qualification: {item?.qualification}</p>

                        <p className='my-3'>Experience: {item?.experience}</p>

                        <p className='my-3 text-justify'> Description : {item?.description} </p>


                      </div>
                    </div>



                  </div>
                 ))
                 
                  :
                  <div>
                    <p>Job Opnening ...</p>
                  </div>
                  }
                </>

              }
              {listApplicationStatus &&
                <div className="p-10 overflow-x-hidden">

                  <table className='w-full my-3 shadow '>
                    <thead>
                      <tr>
                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Sl No</th>
                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Job Title</th>
                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Name</th>
                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Qualification</th>
                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Email</th>
                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Phone</th>
                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Cover </th>
                        <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Resume</th>
                      </tr>
                    </thead>
                    {/* duplicate */}
                   <tbody>
                    <tr>
                      <td className='border border-gray-200 p-3 text-center'>1</td>
                      <td className='border border-gray-200 p-3 text-center'>Front-End Developer</td>
                      <td className='border border-gray-200 p-3 text-center'>John Wick</td>
                      <td className='border border-gray-200 p-3 text-center'>BMCFA</td>
                      <td className='border border-gray-200 p-3 text-center'>babayaga@gmail.com</td>
                      <td className='border border-gray-200 p-3 text-center'>99442290194</td>
                      <td className='border border-gray-200 p-3 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi deleniti earum atque voluptas fugit, delectus perferendis rerum dolorem vel a nisi reprehenderit! Incidunt, at quod nihil quae distinctio cumque. Aut.</td>
                      <td className='border border-gray-200 p-3 text-center'><Link className='text-blue-600 underline'>Resume</Link></td>
                    </tr>
                     </tbody>
                  </table>
                </div>

              }



            </div>
          </div>
        </div>


      </>

      <Footer />

    </>
  )
}

export default CareerAdmin
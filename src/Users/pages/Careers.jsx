import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Component/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareUpRight, faLocationDot, faXmark, faL } from '@fortawesome/free-solid-svg-icons'
import { addAplicationAPI, getAllJobApi } from '../../services/allAPI'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Careers() {
  const [modalStatus, setModalStatus] = useState(false)
   const [allJobs,setAllJobs] = useState([])
   const [searchkey,setSearchKey] = useState("")
   const [aplicationDetails,setAplicationDetails] = useState({
     fullname:"",email:"",qualification:"",phone:"",coverLetter:"",resume:""
   })
   const navigate  = useNavigate()
   const [jobTitle,setJobTitle] = useState("")
   const [jobId,setJobId] = useState("")
   
   const [fileKey,setFileKey] = useState(Date.now())
   console.log(aplicationDetails);
   
   useEffect(()=>{
    getAllJobs()
   },[searchkey])

 const handileApplyJob  = (job)=>{
  setJobId(job?._id)
  setJobTitle(job?.title)
  setModalStatus(true)
 }

  //   add job aplication

  const handilSubmitApplication = async () =>{
 
       const token = sessionStorage.getItem("token")
        const {fullname,email,qualification,phone,coverLetter} = aplicationDetails
         if(!token){
          toast.info("Please Login To Apply Job !!!")
          setTimeout(()=>{
             navigate('/login')
          },2000)
         }else if(!fullname || !email || !qualification || !phone || !coverLetter || !jobId || !jobTitle){
               toast.info("please Fill The Form Completely")
         }else{
             const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const reqBody =new FormData()
      for(let key in aplicationDetails){
        reqBody.append(key,aplicationDetails[key])
      }
      reqBody.append("jobTitle",jobTitle)
       reqBody.append("jobId",jobId)
          
       const result  = await addAplicationAPI(reqBody,reqHeader)
       console.log(result);
       if(result.status == 200){
        toast.success("Application Submitted SuccessFully !!!")
        handileRest()
        setModalStatus(false)
       }
       else if(result.status == 409){
        toast.warning(result.response.data)
        handileRest()
       }
       else{
        toast.error("Something Went Wrong !!!")
        handileRest()
        setModalStatus(false)
       }
       

         }
       
  }

   const getAllJobs = async()=>{
           try {
            const result = await getAllJobApi(searchkey)
            if(result.status == 200){
              setAllJobs(result.data)
            }
           } catch (error) {
            console.log(error);
            
           }
    }
    // console.log(allJobs);

    // resut job aplication form

    const handileRest = ()=>{
      setAplicationDetails( {fullname:"",email:"",qualification:"",phone:"",coverLetter:"",resume:""})
      setFileKey(Date.now())
    }

  return (
    <>
      <Header />

      <>
        <div className="md:mx-30 p-5">
          <div className='p-5 '>
            <h1 className="text-center my-3 font-bold text-2xl">Careers</h1>
            <p className="md:text-center text-justify text-sm font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione, officia delectus consequuntur, dicta libero magni omnis architecto voluptas culpa praesentium ipsum assumenda quae dolor, nihil rerum fugit expedita corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maiores fuga, modi vel accusantium magnam ex,ratione  aliquam eius odit consequuntur earum, itaque nulla labore veritatis quis aut atque!


            </p>
          </div>
          <p className='text-start font-bold'>current Oppening</p>
          <div className="flex my-5  justify-center">
            <input onChange={(e)=>setSearchKey(e.target.value)} value={searchkey} type="text" className='p-2 me-2 rounded border border-gray-400 text-black w-100 placeholder-gray-400' placeholder='Job Title' />
            <button className='px-5  bg-[#327E32] text-white'>Search</button>
          </div>
          {/* job box  duplicate*/}
        { allJobs?.length>0 ? 
        allJobs?.map((item,index)=>(
           <div key={index} className='border w-full rounded shadow-2xl my-3 p-4'>
            <div>
              <div className='flex justify-between'>
                <h1 className='m-3 font-bold'>{item?.title} </h1>
                <button onClick={() =>handileApplyJob(item)} className='md:px-5 px-3 bg-blue-700 hover:bg-white border border-blue-500 hover:text-blue-500 font-bold text-white'>Apply <FontAwesomeIcon icon={faSquareUpRight} className='text-xl' /></button>
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
          <div>no job openning</div>
          }
        </div>

        {/* modal  */}
        {modalStatus &&
          <div className="relative z-10  "  >
            <div className='bg-gray-500/75 p-3 fixed inset-0 transition-opacity' >
              <div className="flex h-full justify-center items-center md:min-h-screen">
                <div className='bg-white rounded-2xl' style={{ width: '900px' }}>
                  <div className='bg-black text-white p-3 flex justify-between w-full'>
                    <h3 className='font-bold'>Applicatin Form</h3>
                    <FontAwesomeIcon className='bg-white text-black p-1 rounded' icon={faXmark} onClick={() => setModalStatus(false)} />
                  </div>
                  <div className='ml-5 my-5'>
                    <form action="">
                      <div className='flex'>
                        <input
                        value={aplicationDetails.fullname}
                        onChange={(e)=>setAplicationDetails({...aplicationDetails,fullname:e.target.value})}
                          type="text"
                          placeholder="Full Name"
                          className="px-3 py-2 my-2 w-full border mx-2 border-gray-400 bg-white rounded"
                        />
                        <input
                         value={aplicationDetails.qualification}
                        onChange={(e)=>setAplicationDetails({...aplicationDetails,qualification:e.target.value})}
                          type="text"
                          placeholder="Qualification"
                          className="px-3 py-2 my-2 w-full border  border-gray-400 mx-2 bg-white rounded"
                        />
                      </div>
                      <div className='flex'>
                        <input
                         value={aplicationDetails.email}
                        onChange={(e)=>setAplicationDetails({...aplicationDetails,email:e.target.value})}
                          type="email "
                          placeholder="Email"
                          className="px-3 py-2 my-2 w-full border mx-2 border-gray-400 bg-white rounded"
                        />
                        <input
                         value={aplicationDetails.phone}
                        onChange={(e)=>setAplicationDetails({...aplicationDetails,phone:e.target.value})}
                          type="text"
                          placeholder="Phone Number"
                          className="px-3 py-2 my-2 w-full border  border-gray-400 mx-2 bg-white rounded"
                        />
                      </div>
                      <div className='mx-2 my-3'>
                        <textarea
                         value={aplicationDetails.coverLetter}
                        onChange={(e)=>setAplicationDetails({...aplicationDetails,coverLetter:e.target.value})}
                          placeholder="Cover Letter"
                          className="my-2 w-full h-25 px-3 py-2  border  border-gray-400  bg-white rounded"
                        ></textarea>
                        </div>

                    
                        <div className="mx-3">
                        <label htmlFor="Resume">Resume</label>
                        <input key={fileKey} onChange={(e)=>setAplicationDetails({...aplicationDetails,resume:e.target.files[0]})} type="file" name='' id='Resume' className='w-full  border rounded file:p-2 file:text-white file:bg-gray-400' />
                        </div>

                    </form>

                  </div>
                  <div className='bg-gray-400 p-2 w-full flex justify-end'>
                    <button type='button' onClick={handileRest} className="py-2 px-3 rounded bg-black text-white">Reset</button>
                       <button type='button' onClick={handilSubmitApplication} className="py-2 px-3 rounded mx-2 bg-blue-600 text-white">Submit</button>

                  </div>

                </div>
              </div>
            </div>
          </div>}

      </>
      <Footer />
        <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover
        theme="colored"

      />
    </>
  )
}

export default Careers
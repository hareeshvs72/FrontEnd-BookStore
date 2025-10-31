import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareUpRight, faLocationDot, faXmark, faL } from '@fortawesome/free-solid-svg-icons'
import { addJobApi } from '../../services/allAPI'
import { toast, ToastContainer } from 'react-toastify'
import { jobContext } from '../../contextApi/ContextShare'

function AddJob() {
  const [modale,setModale] = useState(false)
 const [jobDetails,setJobDetails] = useState({
    title:"",location:"",jobType:"",salary :"",qualification:"",experience:"",description:""
 })
 const {addJobResponse,setAddJobResponse} = useContext(jobContext)

// handile reset
const handileReset = ()=>{
  setJobDetails({
     title:"",location:"",jobType:"",salary :"",qualification:"",experience:"",description:""
  })
}

  // add new job 
  
  const addJob = async()=>{
    console.log("inside add job");
    
    const {title,location,jobType,salary,qualification,experience,description} = jobDetails
     const token = sessionStorage.getItem("token") 
       if(!title || !location || !jobType || !salary || !qualification || !experience || !description){
        toast.warning("Please Fill The Form")
       }
      else if(token){
           const reqHeader = {
          "Authorization": `Bearer ${token}`
        } 
        const reqBody = {
          title,location,jobType,salary,qualification,experience,description
        }
        try {
          const result = await addJobApi(reqBody,reqHeader)
          if(result.status == 200){
            // alert job add
            toast.success("Job Added SuccessFully !!!")
              // reset data
              handileReset()

            // closemodal
            setModale(false)
            
            // context share 
            setAddJobResponse(result.data)
          }
          else if(result.status == 409){
          toast.info(result.response.data)
          handileReset()
          }
        } catch (error) {
          console.log(error);
          
        }
  }else{
    toast.warning("something went wrong !!!")
  }
  }
  return (
    <div>
       <button className='md:px-5  px-3 py-2 flex  bg-blue-700 hover:bg-white border border-blue-500 hover:text-blue-500 font-bold text-white' onClick={()=>setModale(true)} >AddJOb</button>
          {
            modale &&
            <div className="relative z-10  "  >
            <div className='bg-gray-500/75 p-3 fixed inset-0 transition-opacity' >
              <div className="flex h-full justify-center items-center md:min-h-screen">
                <div className='bg-white rounded-2xl ' style={{ width: '400px' }}>
                  <div className='bg-black text-white p-3 flex justify-between w-full'>
                    <h3 className='font-bold'>Applicatin Form</h3>
                    <FontAwesomeIcon className='bg-white text-black p-1 rounded' icon={faXmark} onClick={() => setModale(false)} />
                  </div>
                  <div className='ml-5 my-5'>
                    <form action="" className='p-3'>
                      
                        <input
                        onChange={(e)=>setJobDetails({...jobDetails,title:e.target.value})}
                        value={jobDetails.title}
                          type="text"
                          placeholder="Job Title"
                          className="px-3 py-2 my-2 w-full border  border-gray-400 bg-white rounded"
                        />
                        <input
                        onChange={(e)=>setJobDetails({...jobDetails,location:e.target.value})}
                        value={jobDetails.location}
                          type="text"
                          placeholder="Location"
                          className="px-3 py-2 my-2 w-full border  border-gray-400  bg-white rounded"
                        />
                   
                     
                        <input
                        onChange={(e)=>setJobDetails({...jobDetails,jobType:e.target.value})}
                        value={jobDetails.jobType}
                          type="text"
                          placeholder="Job Type"
                          className="px-3 py-2 my-2 w-full border border-gray-400 bg-white rounded"
                        />
                        <input
                        onChange={(e)=>setJobDetails({...jobDetails,salary:e.target.value})}
                        value={jobDetails.salary}
                          type="text"
                          placeholder="Salary"
                          className="px-3 py-2 my-2 w-full border  border-gray-400  bg-white rounded"
                        />
                      
                       <input
                       onChange={(e)=>setJobDetails({...jobDetails,qualification:e.target.value})}
                        value={jobDetails.qualification}
                          type="text"
                          placeholder="Qualification"
                          className="px-3 py-2 my-2 w-full border  border-gray-400  bg-white rounded"
                        />
                         <input
                         onChange={(e)=>setJobDetails({...jobDetails,experience:e.target.value})}
                        value={jobDetails.experience}
                          type="text"
                          placeholder="Experience"
                          className="px-3  py-2 my-2 w-full border  border-gray-400  bg-white rounded"
                        />
                      <div className=' my-3'>
                        <textarea
                        onChange={(e)=>setJobDetails({...jobDetails,description:e.target.value})}
                        value={jobDetails.description}
                          placeholder="Description"
                          className="my-2 w-full h-25 px-3 py-2  border  border-gray-400  bg-white rounded"
                        ></textarea>
                        </div>

                    


                    </form>

                  </div>
                  <div className='bg-gray-400 p-2 w-full flex justify-end'>
                    <button onClick={handileReset} className="py-2 px-3 rounded bg-black text-white">Reset</button>
                       <button onClick={addJob} className="py-2 px-3 rounded mx-2 bg-blue-600 text-white">Add</button>

                  </div>

                </div>
              </div>
            </div>
          </div>
          }
            <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover
        theme="colored"

      />
    </div>
  )
}

export default AddJob
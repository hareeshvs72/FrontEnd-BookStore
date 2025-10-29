import React, { useContext } from 'react'
import AdminHead from '../component/AdminHead'
import Footer from '../../Component/Footer'
import AdminSideBar from '../component/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { adminUpdateResponse } from '../../contextApi/ContextShare'
import { updateAdminProfile } from '../../services/allAPI'

function SettingAdmin() {
  const { adminEdirResponse, setAdminEditRespones } = useContext(adminUpdateResponse)
  const [adminDetails, setAdminDetails] = useState({
    username: '',
    password: '',
    cPassword: "",
    profile: "",
  })
  const [token, setToken] = useState("")
  const [existingProfile, setExistingProfile] = useState("")
  const [preview, setPreview] = useState("")
  console.log(token);
  console.log(existingProfile);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      setToken(token)
      const user = JSON.parse(sessionStorage.getItem("users"))
      console.log(user);
      setAdminDetails({ ...adminDetails, username: user.username, password: user.password, cPassword: user.password })
      setExistingProfile(user.profile)
    }
  }, [token])

  const handileUploadImage = (e) => {
    setAdminDetails({ ...adminDetails, profile: e.target.files[0] })
    const url = URL.createObjectURL(e.target.files[0])
    setPreview(url)
    console.log(url);

  }
  const handileReset = () => {
    const user = JSON.parse(sessionStorage.getItem("users"))
    setAdminDetails({
      username: '',
      password: '',
      cPassword: "",
      profile: "",
    })
    setExistingProfile(user.profile)
    setPreview("")
  }
  const handileUpdate = async () => {
    const { username, password, cPassword, profile } = adminDetails
    if (!username || !password || !cPassword) {
      toast.info("Please Fill The Form Completely")
    }
    else if (password != cPassword) {
      toast.warning("password and Confirm passsword must be same")
      handileReset()
    }
    else {

      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const reqBody = new FormData()
      reqBody.append("username", username)
      reqBody.append("password", password)
      reqBody.append("bio", "")
      preview ? reqBody.append("profile", profile) : reqBody.append("profile", existingProfile)
      try {
        const result = await updateAdminProfile(reqBody, reqHeader)
        if (result.status == 200) {
          toast.success("profile Updation Sucessfully !!!")
          sessionStorage.setItem("users", JSON.stringify(result.data))
          setAdminEditRespones(result.data)
          handileReset()
        }
        else {
          toast.error("smoething Went Wrong")
          console.log(result);
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
            <h1 className='text-center my-10 text-2xl font-bold'>Settings</h1>
            <div className='md:grid grid-cols-2 md:px-15 md:p-10 gap-10 mx-4'>
              {/* content lorem  */}
              <div className=''>
                <p className='text-justify my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id maxime quia asperiores in cupiditate voluptatum quisquam nemo vitae odio, facilis aperiam. Ipsum incidunt labore asperiores! Blanditiis soluta fuga aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque, facilis?</p>
                <p className='text-justify my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id maxime quia asperiores in cupiditate voluptatum quisquam nemo vitae odio, facilis aperiam. Ipsum incidunt labore asperiores! Blanditiis soluta fuga aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque, facilis?</p>
              </div>
              {/* form link */}


              <div className='bg-[#DBEAFE] md:px-10 md:py-5 p-3 rounded '>

                <div className='flex items-center relative  flex-col '>
                  <label htmlFor="adminpic" className=''>
                    {existingProfile ?
                      <img className='border ' src={preview ? preview : 'https://tse1.mm.bing.net/th/id/OIP.w-f-qDRUjGt9e_SuPTcfcgHaHw?pid=Api&P=0&h=180'} alt='user admin logo' style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                      :
                      <img className='border ' src='https://tse1.mm.bing.net/th/id/OIP.w-f-qDRUjGt9e_SuPTcfcgHaHw?pid=Api&P=0&h=180' alt='user admin logo' style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                    }
                    <FontAwesomeIcon icon={faPen} className='bg-yellow-400 p-1 text-white rounded absolute bottom-0 ml-17' />
                  </label>
                  <input type="file" onChange={(e) => handileUploadImage(e)} id='adminpic' name='' className='hidden ' />

                </div>
                <p className='my-2 text-center'>User Name</p>
                <form>
                  <input value={adminDetails.username} onChange={(e) => setAdminDetails({ ...adminDetails, username: e.target.value })} type="text" placeholder='User Name' className='px-3 py-2 my-2 w-full bg-white rounded' />

                  <input value={adminDetails.password} onChange={(e) => setAdminDetails({ ...adminDetails, password: e.target.value })} type="text" placeholder='Password' className='px-3 py-2 my-2 w-full bg-white rounded' />
                  <input value={adminDetails.cPassword} onChange={(e) => setAdminDetails({ ...adminDetails, cPassword: e.target.value })} type="text" placeholder='Confirm Password' className='px-3 py-2 my-2 w-full bg-white rounded' />

                </form>

                <div className='flex justify-between my-5'>
                  <button onClick={handileReset} className='md:px-18 md:py-4 px-9 py-2 mr-2 rounded bg-[#FFB834] text-white'>Reset</button>
                  <button onClick={handileUpdate} className='md:px-18 px-9 py-2 rounded bg-[#327E32] text-white'>Update</button>
                </div>

              </div>
            </div>
          </div>
        </div>


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

export default SettingAdmin
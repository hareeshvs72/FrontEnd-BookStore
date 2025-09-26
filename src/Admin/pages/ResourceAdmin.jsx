import React from 'react'
import AdminHead from '../component/AdminHead'
import Footer from '../../Component/Footer'
import AdminSideBar from '../component/AdminSideBar'
function ResourceAdmin() {
  return (
       <>

      <AdminHead />

      <>
        <div className="md:grid grid-cols-4 ">
          <div className='col-span-1'>
            <AdminSideBar />
          </div>
            <div>resources</div>
        </div>


      </>

      <Footer />

    </>
  )
}

export default ResourceAdmin
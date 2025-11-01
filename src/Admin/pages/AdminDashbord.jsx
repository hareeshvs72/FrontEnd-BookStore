import React from 'react'
import AdminHead from '../component/AdminHead'
import Footer from '../../Component/Footer'
import AdminSideBar from '../component/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import { BarChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Bar, ResponsiveContainer, PieChart, Pie } from 'recharts'

function AdminDashbord() {
  // bar chart
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
    },
  ];
  // pie chart
  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ];

  const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 },
  ];
  return (
    <>

      <AdminHead />

      <>
        <div className="md:grid grid-cols-5 ">
          <div className='col-span-1'>
            <AdminSideBar />
          </div>
          <div className='col-span-4 p-10'>

            <div className="md:grid grid-cols-3">
              <div className="md:px-5 md:mt-0 mt-2">
                <div className="bg-blue-900 flex text-5xl items-center p-4 rounded text-white">
                  <FontAwesomeIcon icon={faBook} />
                  <div className=" ms-10 md:ms-0 text-center">
                    <h3 className="text-xl">Total Number Of Books</h3>
                    <h3 className="text-4xl">100+</h3>


                  </div>
                </div>
              </div>
              <div className="md:px-5 md:mt-0 mt-2">
                <div className="bg-green-900 flex text-5xl items-center p-4 rounded text-white">
                  <FontAwesomeIcon icon={faUsers} />
                  <div className=" ms-10 md:ms-0 text-center">
                    <h3 className="text-xl">Total Number Of Users</h3>
                    <h3 className="text-4xl">100+</h3>


                  </div>
                </div>
              </div>
              <div className="md:px-5 md:mt-0 mt-2">
                <div className="bg-yellow-900 flex text-5xl items-center p-4 rounded text-white">
                  <FontAwesomeIcon icon={faUser} />
                  <div className=" ms-10 md:ms-0 text-center">
                    <h3 className="text-xl">Total Number Of Books</h3>
                    <h3 className="text-4xl">100+</h3>


                  </div>
                </div>
              </div>
            </div>
            <div className="md:grid grid-cols-2 p-5 my-5">
              {/* bar chart */}
              <div className='my-5 md:my-3 w-100 h-80'>
                <div> 
                  <h1 className='text-center my-3 font-bold'>yaerly profit</h1>
                </div>
                <ResponsiveContainer width={'100%'} height={'100%'}>

                  <BarChart responsive data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis width="auto" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>

              </div>
              {/* pie chart */}
              <div className='my-5 md:my-3 w-100 h-80'>
                     <div> 
                  <h1 className='text-center my-3 font-bold'>yaerly loss</h1>
                </div>
                  <ResponsiveContainer width={'100%'} height={'100%'}>
                    <PieChart
                     
                    >
                      <Pie
                        data={data01}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius="50%"
                        fill="#8884d8"
                         
                      />
                      <Pie
                        data={data02}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius="60%"
                        outerRadius="80%"
                        fill="#82ca9d"
                        label
  
                      />
                    </PieChart>
                  </ResponsiveContainer>
          
              </div>
            </div>
          </div>
        </div>


      </>

      <Footer />

    </>
  )
}

export default AdminDashbord
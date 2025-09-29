import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Component/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

function Profile() {
     const [sellBookStatus , setSellBookStatus] = useState(true)
  const [bookStatus , setBookStatus] = useState(false)
    const [purchaseStatus , setPurchaseStatus] = useState(false)
  return (
    <>
       <Header/>
       <>
       <div className="bg-black" style={{height:'200px'}} >
       
       </div>
        <div className="bg-white p-3" style={{width:'230px', height:'230px', borderRadius:'50%',marginLeft:'70px',marginTop:'-130px'}}>
          <img style={{width:'200px', height:'200px', borderRadius:'50%'}} src="https://static.vecteezy.com/system/resources/previews/018/742/015/original/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png" alt="profic picture" />
        </div>
        <div className="md:flex px-20 justify-between mt-5">
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-xl ">User Name</h1>
            <FontAwesomeIcon className='text-blue-400 ml-3' icon={faCircleCheck} />
          </div>
          <div>Edit</div>
        </div>

        <div className="md:px-20 px-5 my-5 text-justify">
          
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia fuga officiis cum. Eaque, molestias corporis doloribus quae recusandae harum quos officia dolores quisquam maxime explicabo sunt ratione sit amet! Consequatur saepe, recusandae ullam expedita vero nesciunt nisi qui eveniet odio animi, consequuntur laborum delectus officia perferendis, doloribus neque cumque!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia fuga officiis cum. Eaque, molestias corporis doloribus quae recusandae harum quos officia dolores quisquam maxime explicabo sunt ratione sit amet! Consequatur saepe, recusandae ullam expedita vero nesciunt nisi qui eveniet odio animi, consequuntur laborum delectus officia perferendis, doloribus neque cumque! lorem100
          
        </div>
        <div className="md:px-40">
          <div className="flex justify-center items-center my-5 font-bold">
            <p onClick={()=>{setSellBookStatus(true);setBookStatus(false);setPurchaseStatus(false)} } className={sellBookStatus ? 'border border-b-0 rounded text-blue-500 p-4 cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'} >Sell Book </p>
            <p onClick={()=>{setBookStatus(true);setSellBookStatus(false);setPurchaseStatus(false)} } className={bookStatus ? 'border border-b-0 rounded text-blue-500 p-4 cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'} >Book Status</p>
            <p onClick={()=>{setPurchaseStatus(true);setSellBookStatus(false);setBookStatus(false)} } className={purchaseStatus ? 'border border-b-0 rounded text-blue-500 p-4 cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'} >Purchase History</p>

          </div>
          {/* sell Books */}
          {
           sellBookStatus && 
           <div className='bg-gray-200 p-10 my-20  mx-5'>
                     <div className="text-center text-3xl font-medium">Book Details </div>
                     <div className="md:grid grid-cols-2 mt-10 w-full">
                      <div className='px-3'>
                        <div className="mb-3 px-3">
                           <input
                            type="text"
                            placeholder="Title"
                            className="px-3 py-2 my-2 w-full border mx-2 border-gray-400 placeholder-gray-400 bg-white rounded"
                          />
                        </div>
                       
                        <div className="mb-3 px-3">
                           <input
                            type="text"
                            placeholder="Author"
                            className="px-3 py-2 my-2 w-full border mx-2 border-gray-400 placeholder-gray-400 bg-white rounded"
                          />
                        </div>
                        
                        <div className="mb-3 px-3">
                           <input
                            type="text"
                            placeholder="No of Pages"
                            className="px-3 py-2 my-2 w-full border mx-2 border-gray-400 placeholder-gray-400 bg-white rounded"
                          />
                        </div>
                        
                        <div className="mb-3 px-3">
                           <input
                            type="text"
                            placeholder="Image Url"
                            className="px-3 py-2 my-2 w-full border mx-2 border-gray-400 placeholder-gray-400 bg-white rounded"
                          />
                        </div>
                         <div className="mb-3 px-3">
                           <input
                            type="text"
                            placeholder="Price"
                            className="px-3 py-2 my-2 w-full border mx-2 border-gray-400 placeholder-gray-400 bg-white rounded"
                          />
                        </div>
                         <div className="mb-3 px-3">
                           <input
                            type="text"
                            placeholder="Discount Price"
                            className="px-3 py-2 my-2 w-full border mx-2 border-gray-400 placeholder-gray-400 bg-white rounded"
                          />
                        </div>
                          <div className='mb-3 px-3'>
                        <textarea
                          placeholder="Abstarct"
                          className="px-3 py-2 my-2 w-full border mx-2 h-25 border-gray-400 placeholder-gray-400 bg-white rounded"
                        ></textarea>
                        </div>
                         
                      </div>
                       <div className="px-3">
                    
                       <div className="mb-3 px-3">
                           <input
                            type="text"
                            placeholder="Publisher"
                            className="px-3 py-2 my-2 w-full border mx-2 border-gray-400 placeholder-gray-400 bg-white rounded"
                          />
                        </div>
                        <div className="mb-3 px-3">
                           <input
                            type="text"
                            placeholder="Language"
                            className="px-3 py-2 my-2 w-full border mx-2 border-gray-400 placeholder-gray-400 bg-white rounded"
                          />
                        </div>
                        <div className="mb-3 px-3">
                           <input
                            type="text"
                            placeholder="ISBN"
                            className="px-3 py-2 my-2 w-full border mx-2 border-gray-400 placeholder-gray-400 bg-white rounded"
                          />
                        </div>
                        <div className="mb-3 px-3">
                           <input
                            type="text"
                            placeholder="Category"
                            className="px-3 py-2 my-2 w-full border mx-2 border-gray-400 placeholder-gray-400 bg-white rounded"
                          />
                        </div>
                         <div className="mb-3 px-3 flex justify-center items-center">
                          <label htmlFor="upload">
                            <img style={{width:'200px' ,height:'200px', borderRadius:'50%'}} src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" alt="" />
                          </label>
                           <input id='upload'
                            type="file"
                            className="hidden"
                          />
                        </div>
                     </div>
                     </div>

                     <div className=' p-2 w-full flex justify-end'>
                    <button className="py-2 px-3 rounded bg-black  text-white">Reset</button>
                       <button className="py-2 px-3 rounded mx-2 bg-blue-600 text-white">Submit</button>

                  </div>
                    
           </div> 
          }
          {/*Book Status */}
         {  bookStatus && 
          <div className="p-10 my-20 shadow rounded">
            {/* duplicate div according to book */}
            <div className="p-5 rounded mt-4 bg-gray-100">
              <div className="md:grid grid-cols-[3fr_1fr]">
                  <div className="px-4">
                    <div className="text-2xl">Book Title</div>
                    <h2 className="text-xl">Author</h2>
                    <h3 className="text-lg text-blue-500">$300</h3>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo accusamus eius molestiae, vitae accusantium consequatur quas nisi natus. Earum ullam praesentium necessitatibus, corporis incidunt deleniti assumenda mollitia ipsum quas.
                    </p>
                    <div className="flex mt-3 items-center">
                      <img style={{width:'100px',height:'100px',borderRadius:'50%'}} src="https://tse4.mm.bing.net/th/id/OIP.dxFEodSiLPxvk6UQAkhf0wHaGa?pid=Api&P=0&h=180" alt="pending icon" />
                       <img style={{width:'100px',height:'100px',borderRadius:'50%'}} src="https://www.mercedescano.com/wp-content/uploads/2019/03/Approved.jpg" alt="pending icon" className='mx-2' />
                    
                    </div>
                  </div>
                  <div className='px-4 w-full mt-4 md:mt-0'>
                    <img src="/book.jpg" alt="book" />
                    <div className="mt-4 flex justify-end">
                       <button className="py-2 px-3 rounded  border border-red-400 text-red-500 hover:bg-red-500 hover:text-black">Delete</button>
                    </div>

                  </div>
              </div>


            </div>
          </div>
         
         }
         {  purchaseStatus && 
          <div className="p-10 my-20 shadow rounded">
            {/* duplicate div according to book */}
            <div className="p-5 rounded mt-4 bg-gray-100">
              <div className="md:grid grid-cols-[3fr_1fr]">
                  <div className="px-4">
                    <div className="text-2xl">Book Title</div>
                    <h2 className="text-xl">Author</h2>
                    <h3 className="text-lg text-blue-500">$300</h3>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo accusamus eius molestiae, vitae accusantium consequatur quas nisi natus. Earum ullam praesentium necessitatibus, corporis incidunt deleniti assumenda mollitia ipsum quas.
                    </p>
                    <div className="flex mt-3 items-center">
                      <img style={{width:'100px',height:'100px',borderRadius:'50%'}} src="https://www.pngmart.com/files/7/Sold-PNG-Photo.png" alt="pending icon" />
                       
                    
                    </div>
                  </div>
                  <div className='px-4 w-full mt-4 md:mt-0'>
                    <img src="/book.jpg" alt="book" />
                   
                  </div>
              </div>


            </div>
          </div>
         
         }
        </div>
       
       </>
       <Footer/>
    
    
    
    
    </>
  )
}

export default Profile
import React, { useState } from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'

function AdminBooks() {

  const [bookListStatus,setBooklistStatus] = useState(true)
  const [userListStatus,setuserListStatus] = useState(false)
  return (
    <>
      <AdminHeader/>
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar/>
        </div>
        <div className="col-span-4 p-10">
          <h1 className='text-center text-3xl font-bold'>All Books</h1>
          {/* tabs */}
          <div className='flex justify-center items-center my-8 font-medium'>
            <p onClick={()=>{setuserListStatus(false),setBooklistStatus(true)}} className={bookListStatus?'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border border-gray-200 cursor-pointer'}>Book List</p>
            <p onClick={()=>{setuserListStatus(true),setBooklistStatus(false)}} className={userListStatus?'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border border-gray-200 cursor-pointer'}>Users</p>
          </div>

         {bookListStatus && 
          <div className='md:grid grid-cols-4 w-full my-5'>
            <div className="shadow rounded p-3 m-4">
              <img width={"100%"} height={"300px"} src="https://images.squarespace-cdn.com/content/v1/624da83e75ca872f189ffa42/aa45e942-f55d-432d-8217-17c7d98105ce/image001.jpg" alt="" />
              <div className="flex flex-col justify-center items-center mt-4">
                <p>Book Name</p>
                <p>Author Name</p>
                <p>₹ 300</p>
                <button className='w-full mt-3  p-3 rounded border bg-green-700 text-white hover:bg-green-600 hover:bg-white hover:text-green-700'>Approve</button>
              </div>
            </div>

            <div className="shadow rounded p-3 m-4">
              <img width={"100%"} height={"300px"} src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" alt="" />
              <div className="flex flex-col justify-center items-center mt-4">
                <p>Book Name</p>
                <p>Author Name</p>
                <p>₹ 300</p>
                <button className='w-full mt-3  p-3 rounded border bg-green-700 text-white hover:bg-green-600 hover:bg-white hover:text-green-700'>Approve</button>
              </div>
            </div>
          </div>
          }

          

          {userListStatus && 
          <div className='md:grid grid-cols-3 w-full my-5'>
            <div className="shadow rounded p-2 m-2 bg-gray-200">
              <p className='text-red-700 font-bold'>ID : 1563278942</p>
              <div className="flex items-center mt-3">
                <img width={"80px"} height={"80px"} src="https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png" alt="" style={{borderRadius:"50%"}}/>
                <div className='flex flex-col ml-3 w-full'>
                  <p className='text-blue-800 text-lg font-bold'>UserName</p>
                  <p>Email</p>
                </div>
              </div>
            </div>
            
            <div className="shadow rounded p-2 m-2 bg-gray-200">
              <p className='text-red-700 font-bold'>ID : 1563278942</p>
              <div className="flex items-center mt-3">
                <img width={"80px"} height={"80px"} src="https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png" alt="" style={{borderRadius:"50%"}}/>
                <div className='flex flex-col ml-3 w-full'>
                  <p className='text-blue-800 text-lg font-bold'>UserName</p>
                  <p>Email</p>
                </div>
              </div>
            </div>

            <div className="shadow rounded p-2 m-2 bg-gray-200">
              <p className='text-red-700 font-bold'>ID : 1563278942</p>
              <div className="flex items-center mt-3">
                <img width={"80px"} height={"80px"} src="https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png" alt="" style={{borderRadius:"50%"}}/>
                <div className='flex flex-col ml-3 w-full'>
                  <p className='text-blue-800 text-lg font-bold'>UserName</p>
                  <p>Email</p>
                </div>
              </div>
            </div>
            
          </div>}
        </div>
      </div>
    </>
  )
}

export default AdminBooks

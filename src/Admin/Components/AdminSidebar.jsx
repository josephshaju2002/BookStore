import React from 'react'
import { FaHome } from "react-icons/fa";
import { PiBooks } from "react-icons/pi";
import { RiGraduationCapFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";


function AdminSidebar() {
  return (
    <>
      <div className="bg-gray-200 w-full md:min-h-screen flex items-center flex-col">
        <div className='my-10'>
            <img src="https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png" alt="profile image" style={{width:"170px", height:"170px", borderRadius:"50%"}}/>
        </div>
        <h1 className='text-2xl mb-10'>Joseph Shaju</h1>
        <div className="mb-10">
            <div className="mb-4 flex">
                <input type="radio" id='home' readOnly/>
                <label htmlFor="home" className='flex ms-3'><FaHome className='mt-1 me-1'/>Home</label>
            </div>
            <div className="mb-4 flex">
                <input type="radio" id='books' readOnly/>
                <label htmlFor="books" className='flex ms-3'><PiBooks className='mt-1 me-1'/>Books</label>
            </div>
            <div className="mb-4 flex">
                <input type="radio" id='careers' readOnly/>
                <label htmlFor="careers" className='flex ms-3'><RiGraduationCapFill className='mt-1 me-1'/>Careers</label>
            </div>
            <div className="mb-4 flex">
                <input type="radio" id='settings' readOnly/>
                <label htmlFor="settings" className='flex ms-3'><IoSettings  className='mt-1 me-1'/>Settings</label>
            </div>
        </div>

       
      </div>
    </>
  )
}

export default AdminSidebar

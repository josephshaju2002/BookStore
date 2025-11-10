import React from 'react'
import AdminHeader from '../Components/AdminHeader'
import Footer from '../../Common/Components/Footer'
import AdminSidebar from '../Components/AdminSidebar'
import { FaEdit } from "react-icons/fa";

function AdminSettings() {
  return (
    <>
      <AdminHeader/>
      <div className="md:grid grid-cols-[1fr_4fr]">
        <div>
          <AdminSidebar/>
        </div>
        <div className="p-4">
          <h1 className='text-3xl text-center font-semibold my-10'>Settings</h1>
          <div className="md:grid grid-cols-2 mt-10">
            <div className='md:px-20 px-5'>
             <p className='text-justify'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quasi reiciendis mollitia voluptatem fuga cumque culpa, nulla error laudantium, eum est et deleniti optio distinctio, dignissimos hic nemo. Modi, inventore. Sapiente, itaque magni error architecto consectetur mollitia quae fugiat eaque possimus amet assumenda corrupti neque veniam placeat voluptate cumque nemo earum distinctio. Magni quisquam aut aliquid accusantium consequuntur beatae? <br /> <br /> A quasi blanditiis quisquam repellendus vitae nisi assumenda dolorem adipisci, ullam sit delectus dolorum sunt magni saepe voluptas amet! Est vitae recusandae iusto sapiente voluptas itaque, laboriosam impedit nobis corrupti expedita molestiae dignissimos nesciunt reprehenderit, eos et! Illo placeat deserunt ex eaque sed quia quasi. Tempore sint quo accusantium quasi incidunt tenetur quam, nemo amet! Soluta perspiciatis atque unde possimus asperiores omnis ipsum animi dolorem fuga aspernatur pariatur voluptatibus eos sequi architecto, quo ipsa sed laborum quidem consectetur quas quis mollitia! Quae, porro est in vel hic impedit fugiat placeat labore.</p>
            </div>
            <div className='md:px-20 px-5'>
              <form className='bg-blue-200 md:p-10 p-5 rounded my-10 md:my-0' action="">
                <div className="flex justify-center items-center my-10">
                  <label htmlFor="edituserprofile">
                    <input type="file" id='edituserprofile' style={{display:"none"}} />
                    <img src="https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png" alt="profile image" style={{width:"170px", height:"170px", borderRadius:"50%"}}/>
                  </label>
                  

                </div>
                <div>
                    <div className="mb-3">
                      <label htmlFor="">UserName</label>
                      <input type="text" placeholder='Username' className='bg-white rounded w-full p-2'/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="">Password</label>
                      <input type="text" placeholder='Password' className='bg-white rounded w-full p-2'/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="">Confirm Password</label>
                      <input type="text" placeholder='Confirm Password' className='bg-white rounded w-full p-2'/>
                    </div>
                    <div className="flex justify-between mt-10">
                      <button className='bg-amber-600 text-white rounded p-4 w-1/2 hover:border hover:border-amber-600 hover:text-amber-600 hover:bg-white'>Reset</button>
                       <button className='bg-green-600 text-white rounded p-4 w-1/2 hover:border hover:border-green-600 hover:text-green-600 hover:bg-white ms-3'>Update</button>
                    </div>
                  </div>
              </form>
            </div>

          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default AdminSettings

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaPowerOff } from "react-icons/fa";
import { toast } from 'react-toastify';
import { userAuthContext } from '../../context/AuthContext';


function AdminHeader() {

    const {setAuthorizedUser} = useContext(userAuthContext)
  
  
    const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("existingUser"); 
    toast.success("Logged out successfully");
    setAuthorizedUser(false)
    navigate ("/");  
  };
  return (
    <>
       <div className="grid grid-cols-3 p-3">
        {/* logo */}
        <div className='flex items-center'>
            <img width={"50px"} height={"50px"} src="https://openclipart.org/image/800px/svg_to_png/275692/1489798288.png" alt="" />
            <h1 className='font-bold text-2xl ms-2 md:hidden'>BOOKSTORE</h1>
        </div>
        {/* title */}
        <div className='md:flex justify-center items-center hidden'>
            <h1 className='text-3xl font-bold'>BOOKSTORE</h1>

        </div>
        {/* login */}
        <div className='md:flex justify-end items-center hidden'>
            <Link to={"/login"}><button onClick={handleLogout} className='flex justify-between gap-2 items-center border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white'><FaPowerOff /> Logout</button></Link>

        </div>
      </div>
    </>
  )
}

export default AdminHeader

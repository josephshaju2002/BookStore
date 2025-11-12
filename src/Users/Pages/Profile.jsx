import React from 'react'
import Header from '../../Common/Components/Header'
import Footer from '../../Common/Components/Footer'
import { MdVerified } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function Profile() {
  return (
    <>
     <Header/>
      <div style={{height:"200px"}} className='bg-black'></div>
        <div className='bg-white p-3'style={{width:"230px", height:"230px",borderRadius:"50%",marginLeft:"70px",marginTop:"-130px"}}>
          <img style={{width:"200px",height:"200px",borderRadius:"50%"}} src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="" />
        </div>

        <div className="md:flex justify-between px-20 mt-5">
          <div className="flex items-center">
            <h1 className='font-bold md:text-3xl text-2xl'>Sijo Johnson</h1>
            <MdVerified className='text-blue-500 ms-3 text-xl'/>

          </div>
          <div>
            <button className='flex px-4 py-3 font-bold border border-blue-200 text-blue-600'><FaRegEdit className='mt-1 me-2'/>Edit</button>
          </div>
         

        </div>


        <p className='flex text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum harum similique debitis quis minima inventore itaque eum amet laboriosam, dolores autem sed sapiente hic sunt, culpa, a mollitia necessitatibus dolorem!</p>

      
     <Footer/> 
    </>
  )
}

export default Profile

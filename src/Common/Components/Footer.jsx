import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



function Footer() {
  return (
    <>
      <div className="md:grid grid-cols-3 md:gap-9 bg-gray-900 text-white p-10">
        <div className="text-bold">
        <h3 className='text-xl'>About Us</h3>
        <p className='text-justify mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quidem autem maxime quas dicta, quis nam fuga alias eligendi incidunt nobis voluptatem quod nemo provident tempora accusamus harum! Soluta, non?</p>
        </div>
        <div>
            <h3 className='font-bold'>NEWSLETTER</h3>
            <p className='my-5'>Stay Updated With Our Latest Trends</p>
            <div className='flex'>
                <input type="text" placeholder='Email Id' className='p-2 bg-white text-black placeholder-gray-500'/>
                <button className='bg-yellow-400 p-3'><FaArrowRight /></button>
            </div>
            
        </div>
        <div>
                <h3 className='font-bold'>Follow Us</h3>
                <p className='my-5'>Let Us Be Social</p>
                <div className="flex mt-4">
                    <FaInstagram className='me-3 text-2xl'/>
                    <FaXTwitter className='me-3 text-2xl'/>
                    <FaFacebookSquare className='me-3 text-2xl'/>
                    <FaLinkedin className='text-2xl'/>




                </div>
            </div>
      </div>
      <div className='bg-black p-3 text-center text-white'>
        <p>Copyright &#xA9; 2025 All rights reserved | This website is made with &#10084; by Joseph Shaju | LUMINAR TECHNOLAB</p>
      </div>
    </>
  )
}

export default Footer

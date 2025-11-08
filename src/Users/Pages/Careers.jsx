import React from 'react'
import Header from '../../Common/Components/Header'
import Footer from '../../Common/Components/Footer'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";



function Careers() {
  return (
    <>
    <Header/>
      <div className="md:px-40 p-5">
        <div className="text-center my-5">
          <h1 className='text-3xl font-bold mb-5'>Careers</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ratione, quos maxime dolore tenetur quas voluptate excepturi facilis unde pariatur iure? Illo voluptatem quod inventore repellat delectus. Quisquam, quis corrupti, exercitationem modi sint iure similique doloremque ab quos debitis corporis. Facilis repellat ea deleniti? Quod labore eaque assumenda cum nihil rerum incidunt facere, quo doloremque nostrum tempore culpa! Architecto quisquam itaque amet neque, blanditiis veritatis iure tempore odio, corporis accusantium quam nisi sed laborum aliquam corrupti dolorum provident dolores error minima ratione soluta vel totam! Quod unde veniam iste incidunt praesentium! Placeat autem dolorem, magnam neque ad at provident sit?</p>
        </div>
        <div className="my-10">
          <h1 className='text-2xl font-bold text-center'>Current Openings</h1>
          <div className="flex my-10 justify-center items-center">
            <input className='p-2 border-3 border-gray-200 text-black w-100 placeholder-gray-500' type="text" placeholder='Search By Title'/>
            <button className='bg-blue-900 text-white p-2 hover:bg-white hover:text-blue-900 hover:border hover:border-blue-800'>Search</button>
      
          </div>
        </div>
        {/* job-listing */}
        <div className="border border-gray-200 p-5 shadow my-5">
          <div className="flex mb-5">
            <div className='w-full'>
              <h1 className='text-xl pb-3 font-bold'>Frontend Developer</h1>
              <hr />
            </div>
            <button className='text-white p-3 ms-5 flex items-center bg-blue-900'>Apply <FaArrowUpRightFromSquare className='ms-2'/></button>
          </div>
          <p className='flex'><FaLocationDot className='me-2 mt-1' /> Kochi</p>
          <p className='text-lg my-2'>Job Type : FULL TIME</p>
          <p className='text-lg my-2'>Salary : 20000-30000/month</p>
          <p className='text-lg my-2'>Qualification : BSC-CS</p>
          <p className='text-lg my-2'>Experience : 1-2 years</p>
          <p className='text-lg my-2 text-justify'>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum error minus nobis ratione provident, vitae minima ipsum consequuntur quos adipisci explicabo iure qui distinctio voluptates debitis, commodi cumque nisi.</p>
        </div>
      </div>
    <Footer/>      
    </>
  )
}

export default Careers

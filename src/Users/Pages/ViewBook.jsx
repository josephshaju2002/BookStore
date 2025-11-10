import React from 'react'
import Header from '../../Common/Components/Header'
import Footer from '../../Common/Components/Footer'
import { FaRegEye } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";

function ViewBook() {
  return (
    <>
      <Header/>
      <div className="md:p-20 p-5">
        <div className="shadow w-full md:p-10 p-5">
          <div className="flex justify-end">
            <FaRegEye />
          </div>
          <div className="md:grid grid-cols-[1fr_3fr] w-full">
            <div>
              <img className='w-full h-100' src="https://penji.co/wp-content/uploads/2023/01/4-silhouette-667x1024.jpg.webp" alt="" />
            </div>
            <div className='px-4'>
              <h1 className='text-center font-medium text-2xl'>Crooked Pillow</h1>
              <p className='text-center text-blue-500'>Itamar Vieira (Author)</p>
              <div className='md:flex justify-between mt-10'>
                <p>Publisher : </p>
                <p>Language : </p>
                <p>No:of Pages : </p>
              </div>
              <div className="md:flex justify-between mt-10">
                <p>Seller Mail : </p>
                <p>Real Price : </p>
                <p>ISBN : </p>
              </div>
              <p className="text-justify mt-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reprehenderit, exercitationem placeat consequuntur delectus veritatis libero velit illo odio quasi eos id fugiat fugit assumenda dicta voluptates dolor sunt recusandae ea fuga, quia nisi ab nam? Eligendi, consequatur odit ab, repellendus quasi cumque nihil illo quod beatae nostrum, totam vero. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, quas?
              </p>
              <div className='mt-10 flex justify-end'>
                <button className='flex px-4 py-3 bg-blue-800 rounded text-white hover:bg-white hover:text-blue-800 hover:border hover:border-blue-800'><FaBackward className='mt-1 me-2'/>Back</button>
                <button className='px-4 ms-5 py-3 bg-green-800 rounded text-white hover:bg-white hover:text-green-800 hover:border hover:border-green-800'>Buy ₹</button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default ViewBook

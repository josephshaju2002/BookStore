import React from 'react'
import Header from '../../Common/Components/Header'
import Footer from '../../Common/Components/Footer'

function AllBooks() {
  return (
    <>
     <Header/>
     <div className='flex justify-center items-center flex-col my-5'>
      <h1 className='text-3xl font-bold my-5'>COLLECTIONS</h1>
      <div className='flex my-5'>
        <input className='p-2 border-3 border-gray-200 text-black w-100 placeholder-gray-500' type="text" placeholder='Search By Title'/>
        <button className='bg-blue-900 text-white p-2 hover:bg-white hover:text-blue-900 hover:border hover:border-blue-800'>Search</button>
      </div>
     </div>
     <Footer/> 
    </>
  )
}

export default AllBooks

import React, { useEffect, useState } from 'react'
import Header from '../../Common/Components/Header'
import Footer from '../../Common/Components/Footer'
import { Link } from 'react-router-dom'
import { getAllBooksAPI } from '../../Services/allAPI'

function AllBooks() {

    const [token,setToken] = useState("")
    const [allBooks,setAllBooks] = useState([])
    const [allCategory,setAllCategory] = useState([])
    const [tempBooks,setTempBooks] = useState([])
  
    const getAllBooks = async (userToken)=>{
      // request header
      const reqHeader = {
        "Authorization" : `Bearer ${userToken}`
      }
      try {
        const result = await getAllBooksAPI(reqHeader)
        console.log(result);
        setAllBooks(result.data)
        setTempBooks(result.data)
        // setCategory(result.data.map(item=>item.category))
        const tempCategory = result.data.map(item => item.category)
        setAllCategory([...new Set(tempCategory)])
      } catch (error) {
        console.log(error);
        
      }
      
      
    }

    console.log(allBooks);
    console.log(allCategory);

    const categoryFilter = (category) => {
      if(category == "No Filter"){
        setAllBooks(tempBooks)
      }else{
        setAllBooks(tempBooks.filter(item =>item.category.toLowerCase()==
      category.toLowerCase()))
      }
    }
    
    

    useEffect(()=>{
        if(sessionStorage.getItem("token")){
          const userToken = (sessionStorage.getItem("token"))
          setToken(userToken)
        getAllBooks(userToken)
        }
      },[])

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
     {token &&
     <div className="md:grid grid-cols-4 md:px-20 p-5 mb-10">
      {/* filter */}
      
        <div className="col-span-1">
          <h1>Filters</h1>
          
           {allCategory.map((item,index)=>(
              <div onClick={()=>categoryFilter(item)} key={index} className='mt-5'>
            <input name="filter" id={item} type="radio" />
            <label className='ms-2' htmlFor={item}> {item} </label>
          </div>
           ))
            }
          <div onClick={()=>categoryFilter("No Filter")} className='mt-5'>
            <input name='filter' id='nofilter' type="radio" />
            <label className='ms-2' htmlFor="nofilter">No Filter</label>
          </div>
        </div>
      
      <div className='col-span-3'>

        {allBooks.length>0 ?
        <div className="md:grid grid-cols-4 mt-5  md:mt-0">
          {allBooks.map((item,index)=>(
            <div key={index} className='shadow rounded p-3 mx-4 my-3'>
            <img width={"100%"} height={"300px"} src={item.imgUrl} />
            <div className='flex flex-col justify-center items-center mt-4'>
              <p>{item.title}</p>
              <p className='my-2'>{item.author}</p>
              <Link to={`/view-books/${item._id}`} className='bg-blue-900 text-white p-2 hover:bg-white hover:text-blue-900 hover:border-blue-800 w-full text-center'>View Books</Link>
            </div>
          </div>
          ))
          
          }
        </div>
        :
        <p>Loading</p>}
  :
      </div>
     </div>
     }
           {!token &&

     <div className='my-10 flex justify-center items-center flex-col'>
      <img src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif" alt="" />
      <p className='font-semibold text-xl mt-5'>Please <Link to={"/login"} className='text-blue-700 font-bold'>Login</Link> to explore more...</p>
     </div>
     }
     <Footer/> 
    </>
  )
}

export default AllBooks

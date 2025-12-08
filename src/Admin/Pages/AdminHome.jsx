import React, { useEffect, useState } from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import { FaBook } from "react-icons/fa";
import { getAllAdminUsersAPI, getAllUserBooksAdminAPI } from '../../Services/allAPI';

function AdminHome() {
  const [bookNumber,setBookNumber] = useState("")
  const [userNumber,setUserNumber] = useState("")
  const [token, setToken] = useState("");

   const getBooksNumber = async () => {
      try {
        const result = await getAllUserBooksAdminAPI();
        console.log(result);
        if (result.status == 200) {
          // bookNumber = result.data.length
          setBookNumber(result.data.length)
        }
      } catch (error) {
        console.log(error);
      }
    };

    const getUserNumber = async () => {
        try {
          const reqHeader = {
            Authorization: `Bearer ${token}`,
          };
    
          const result = await getAllAdminUsersAPI(reqHeader);
          console.log(result);
          if (result.status == 200) {
            setUserNumber(result.data.length);
          }
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
          if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"));
          }
        }, []);


    useEffect(()=>{
      if(token){
      getBooksNumber()
      getUserNumber()
      }
    },[token])

  return (
    <>
      <AdminHeader/>
      <div className="md:grid grid-cols-[1fr_4fr]">
        <div>
          <AdminSidebar/>
        </div>
        <div className='p-4'>
          <div className="md:grid grid-cols-3 text-white ">
            <div className="px-5">
              <div className="grid grid-cols-[1fr_3fr] bg-blue-700 p-4 rounded">
                <div className="flex justify-center items-center">
                <FaBook className='text-3xl'/>
                </div>
                <div>
                  <h1>Total No:of Books : </h1><span className='text-xl'>{bookNumber}</span>
                  
                </div>
              </div>
              
            </div>
            <div className="px-5">
              <div className="grid grid-cols-[1fr_3fr] bg-green-700 p-4 rounded">
                <div className="flex justify-center items-center">
                <FaBook className='text-3xl'/>
                </div>
                <div >
                  <h1>Total No:of Users : </h1><span className='text-xl'>{userNumber}</span>
                  
                </div>
              </div>
              
            </div>
            <div className="px-5">
              <div className="grid grid-cols-[1fr_3fr] bg-yellow-700 p-4 rounded">
                <div className="flex justify-center items-center">
                <FaBook className='text-3xl'/>
                </div>
                <div>
                  <h1>Total No:of Applicants : </h1><span className='text-xl'>85</span>
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminHome

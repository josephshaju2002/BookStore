import React, { useEffect, useState } from "react";
import AdminHeader from "../Components/AdminHeader";
import AdminSidebar from "../Components/AdminSidebar";
import {
  getAllAdminUsersAPI,
  getAllUserBooksAdminAPI,
  updateBookStatusAPI,
} from "../../Services/allAPI";
import SERVERURL from "../../Services/serverURL";

function AdminBooks() {
  const [bookListStatus, setBooklistStatus] = useState(true);
  const [userListStatus, setuserListStatus] = useState(false);
  const [allBooks, setAllBooks] = useState([]);
  const [token, setToken] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const handleAllBooksAdmin = async () => {
    try {
      const result = await getAllUserBooksAdminAPI();
      console.log(result);
      if (result.status == 200) {
        setAllBooks(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateBookStatus = async (id) => {
    console.log(id);
    try {
      const result = await updateBookStatusAPI(id);
      console.log(result);
      handleAllBooksAdmin();
    } catch (error) {
      console.log(error);
    }
  };

  const getAllUsers = async () => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const result = await getAllAdminUsersAPI(reqHeader);
      console.log(result);
      if (result.status == 200) {
        setAllUsers(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleAllBooksAdmin();
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    }
  }, []);
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">
          <h1 className="text-center text-3xl font-bold">All Books</h1>
          {/* tabs */}
          <div className="flex justify-center items-center my-8 font-medium">
            <p
              onClick={() => {
                setuserListStatus(false), setBooklistStatus(true);
              }}
              className={
                bookListStatus
                  ? "text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer"
                  : "p-4 border border-gray-200 cursor-pointer"
              }
            >
              Book List
            </p>
            <p
              onClick={() => {
                setuserListStatus(true);
                setBooklistStatus(false);
                getAllUsers();
              }}
              className={
                userListStatus
                  ? "text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer"
                  : "p-4 border border-gray-200 cursor-pointer"
              }
            >
              Users
            </p>
          </div>

          {bookListStatus &&
            (allBooks?.length > 0 ? (
              <div className="md:grid grid-cols-3 gap-5">
                {allBooks.map((item, index) => (
                  <div className="p-3" key={index}>
                    <div className="p-3 shadow-lg">
                      <img
                        style={{ width: "100%", height: "300px" }}
                        src={item?.imgUrl}
                        alt="book-img"
                      />

                      <div className="flex justify-center items-center flex-col my-3">
                        <h3>{item?.title}</h3>
                        <p>{item?.author}</p>

                        {item?.status == "pending" && (
                          <button
                            onClick={() => updateBookStatus(item?._id)}
                            type="button"
                            className="bg-green-900 w-full p-2 text-white mt-3 hover:bg-green-950"
                          >
                            Approve
                          </button>
                        )}

                        {item?.status == "approved" && (
                          <div className="w-full flex justify-end">
                            <img
                              style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                              }}
                              src="https://e7.pngegg.com/pngimages/192/283/png-clipart-approved-approved-thumbnail.png"
                              alt=""
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>Loading…</p>
            ))}

          {userListStatus && (
            <>
              {allUsers?.length > 0 ? (
                <div className="md:grid grid-cols-3 w-full my-5">
                  {allUsers.map((book, index) => (
                    <div
                      key={index}
                      className="shadow rounded p-2 m-2 bg-gray-200"
                    >
                      <p className="text-red-700 font-bold">ID : {book?._id}</p>
                      <div className="flex items-center mt-3">
                        <img
                          width="80px"
                          height="80px"
                          src={
                            book?.profile === ""
                              ? "https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png"
                              : `${SERVERURL}/imgUploads/${book?.profile}`
                          }
                          alt="profile"
                          style={{ borderRadius: "50%" }}
                        />
                        <div className="flex flex-col ml-3 w-full">
                          <p className="text-blue-800 text-lg font-bold">
                            {book?.username}
                          </p>
                          <p>{book?.email}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <p>No users here</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminBooks;

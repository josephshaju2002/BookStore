import React, { useContext, useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoPersonOutline } from "react-icons/io5";
import { userProfileUpdate } from "../../context/ContextShare";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function Header() {
  const [listStatus, setlistStatus] = useState(false);
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");
  // console.log(token);
  // console.log(userName);

  const {updateProfileStatus} = useContext(userProfileUpdate)

    const navigate = useNavigate();

  const handleLogout = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("existingUser"); 
  toast.success("Logged out successfully");
  navigate ("/");  
};


  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    }
    if (sessionStorage.getItem("existingUser")) {
      const name = JSON.parse(sessionStorage.getItem("existingUser"));
      setUserName(name.username);
    }
  }, [updateProfileStatus]);

  return (
    <>
      <div className="grid grid-cols-3 p-3">
        {/* logo */}
        <div className="flex items-center">
          <img
            width={"50px"}
            height={"50px"}
            src="https://openclipart.org/image/800px/svg_to_png/275692/1489798288.png"
            alt=""
          />
          <h1 className="font-bold text-2xl ms-2 md:hidden">BOOKSTORE</h1>
        </div>
        {/* title */}
        <div className="md:flex justify-center items-center hidden">
          <h1 className="text-3xl font-bold">BOOKSTORE</h1>
        </div>
        {/* login */}
        <div className="md:flex justify-end items-center hidden">
          <FaInstagram className="me-3 text-2xl" />
          <FaXTwitter className="me-3 text-2xl" />
          <FaFacebookSquare className="me-3 text-2xl" />

          {!token ? (
            <Link to={"/login"}>
              <button className="flex justify-between gap-2 items-center border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white">
                <IoPersonOutline /> Login
              </button>
            </Link>
          ) : (
            <div className="relative inline-block text-left">
              <button
                onClick={() => setDropdownStatus(!dropdownStatus)}
                className="w-full flex items-center bg-white px-3 py-2 shadow-xs hover:bg-gray-100"
              >
                <img
                  style={{ borderRadius: "50%" }}
                  width={"50px"}
                  height={"50px"}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5-3YjBcXTqKUlOAeUUtuOLKgQSma2wGG1g&s"
                  alt=""
                />
                <p>{userName}</p>
              </button>
              {dropdownStatus && (
                <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg">
                  <Link to={"/profile"}>
                    <button className="block px-4 py-2 text-sm text-gray-70">
                      Profile
                    </button>
                  </Link>

                  <button onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-70">
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {/* Desktop Navigation Menu */}
      <div className="hidden md:flex justify-center bg-gray-900 text-white py-4">
        <ul className="flex gap-10 text-lg font-medium">
          <li className="hover:text-purple-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-purple-300">
            <Link to="/all-books">Books</Link>
          </li>
          <li className="hover:text-purple-300">
            <Link to="/careers">Careers</Link>
          </li>
          <li className="hover:text-purple-300">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <nav className="w-full bg-gray-900 p-5 text-white md:hidden">
        <div className="flex justify-between items-center">
          <button onClick={() => setlistStatus(!listStatus)}>
            <TiThMenu className="2xl" />
          </button>

          {!token ? (
            <Link to={"/login"}>
              <button className="flex justify-between items-center gap-2 border border-white rounded px-3 py-2 ms-3 hover:bg-white hover:text-black">
                <IoPersonOutline /> Login
              </button>
            </Link>
          ) : (
            <button
              onClick={() => setDropdownStatus(!dropdownStatus)}
              className="flex items-center bg-white px-3 py-2 shadow-xs hover:bg-gray-100"
            >
              <img
                style={{ borderRadius: "50%" }}
                width={"40px"}
                height={"40px"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5-3YjBcXTqKUlOAeUUtuOLKgQSma2wGG1g&s"
                alt=""
              />
              <p className="ms-2 text-black">{userName}</p>
            </button>
          )}
        </div>

        {/* Dropdown when logged in */}
        {dropdownStatus && token && (
          <div className="absolute right-5 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg text-black">
            <Link to={"/profile"}>
              <button className="block px-4 py-2 text-sm">Profile</button>
            </Link>
            <button className="block px-4 py-2 text-sm">Logout</button>
          </div>
        )}

        {/* Menu Common for both */}
        <ul className={listStatus ? "flex flex-col mt-3" : "hidden"}>
          <li className="py-2">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="py-2">
            <Link to={"/all-books"}>Books</Link>
          </li>
          <li className="py-2">
            <Link to={"/careers"}>Careers</Link>
          </li>
          <li className="py-2">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;

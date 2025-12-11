import { Route, Routes } from "react-router-dom";
import AdminBooks from "./Admin/Pages/AdminBooks";
import AdminCareers from "./Admin/Pages/AdminCareers";
import AdminHome from "./Admin/Pages/AdminHome";
import AdminSettings from "./Admin/Pages/AdminSettings";
import Auth from "./Common/Pages/Auth";
import Contact from "./Common/Pages/Contact";
import LandingPage from "./Common/Pages/LandingPage";
import Pnf from "./Common/Pages/Pnf";
import AllBooks from "./Users/Pages/AllBooks";
import Careers from "./Users/Pages/Careers";
import Profile from "./Users/Pages/Profile";
import ViewBook from "./Users/Pages/ViewBook";
import { useContext, useEffect, useState } from "react";
import Loader from "./Common/Pages/Loader";
import { ToastContainer } from "react-toastify";
import PaymentSuccess from "./Users/Pages/PaymentSuccess";
import PaymentError from "./Users/Pages/PaymentError";
import { userAuthContext } from "./context/AuthContext";

function App() {
  const [loader, setLoader] = useState(true);

  const { role } = useContext(userAuthContext);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <>
      <Routes>
        {/* Common */}
        <Route path={"/"} element={loader ? <Loader /> : <LandingPage />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/login"} element={<Auth />} />
        <Route path={"/register"} element={<Auth register />} />
        <Route path={"/careers"} element={<Careers />} />

        {/* User */}
       {role == "user" &&
       <>
          <Route path={"/all-books"} element={<AllBooks />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/view-books/:id"} element={<ViewBook />} />
          <Route path={"/paymentsuccess"} element={<PaymentSuccess />} />
          <Route path={"/paymenterror"} element={<PaymentError />} />
       </>
}
        {/* Admin */}
        {role == "admin" &&
        <>
          <Route path={"/admin-home"} element={<AdminHome />} />
          <Route path={"/admin-careers"} element={<AdminCareers />} />
          <Route path={"/admin-books"} element={<AdminBooks />} />
          <Route path={"/admin-settings"} element={<AdminSettings />} />
        </>
        }

        <Route path={"/*"} element={<Pnf />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </>
  );
}

export default App;

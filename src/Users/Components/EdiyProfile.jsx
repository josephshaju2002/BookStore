import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import SERVERURL from "../../Services/serverURL";
import { toast } from "react-toastify";
import { updateUserProfileAPI } from "../../Services/allAPI";

function EditProfile() {

    const [offCanvas,setOffCanvas] = useState(false)
    const [token,setToken] = useState("")
    const [preview,setPreview]=useState("")
    const [userDetails,setuserDetails] = useState({
        username:"",
        password:"",
        confirmPassword:"",
        bio:"",
        role:"",
        profile:""
    })
    const [existingProfile,setExistingProfile]=useState("")
    console.log(userDetails);
    console.log(existingProfile);

    const handleUploadImage = (e)=>{
        setuserDetails({...userDetails,profile:e.target.files[0]})
        const url = URL.createObjectURL(e.target.files[0])
        setPreview(url)
    }

    const submitUpdatedProfile = async () =>{
        const { username, password, confirmPassword, bio, role, profile } = userDetails;
        if(!username || !password || !confirmPassword || !bio){
            toast.warning("Please fill the fields")
            return;
        }

        if (password !== confirmPassword) {
            toast.warning("Passwords do not match");
            return;
        }

         // request header
        const reqHeader = {
            Authorization: `Bearer ${token}`,
        };

        let reqBody;

        if(profile && typeof profile !== "string"){
            reqBody = new FormData();
            reqBody.append("username", username);
            reqBody.append("password", password);
            reqBody.append("bio", bio);
            reqBody.append("role", role);
            reqBody.append("profile", profile); 
        }else{
            reqBody ={ username,password,bio,role,profile: existingProfile,}
        }

        try {
            const result = await updateUserProfileAPI(reqBody, reqHeader);
                if (result.status === 200) {
                    toast.success("Profile Updated Successfully");
                    // setOffCanvas(false);
                } else {
                    toast.error("Update Failed");
                }

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");   
        }

    }

     const reset = () =>{
        setuserDetails({
            username: "",
            password: "",
            confirmPassword: "",
            bio: "",
        });
    }
    
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setToken(sessionStorage.getItem("token"))
            const user = JSON.parse(sessionStorage.getItem("existingUser"))
            setuserDetails({username:user.username,password:user.password,confirmPassword:user.password,bio:user.bio,role:user.role})
            setExistingProfile(user.profile)
        }
    },[])
    
  return (
    <>
      <button onClick={()=>setOffCanvas(true)} className="flex px-4 py-3 font-bold border border-blue-200 text-blue-600">
        <FaRegEdit className="mt-1 me-2" />
        Edit
      </button>

      {offCanvas &&<div>
        <div className="fixed inset-0 bg-gray-500/75 w-full h-full"></div>
        <div className="bg-white h-full w-90 z-50 fixed top-0 left-0">
            <div className="bg-gray-900 px-3 py-4 flex justify-between text-white text-2xl">
                <h1>Edit User Profile</h1>
                <button onClick={()=>setOffCanvas(false)}>X</button>
            </div>
            <div className="flex justify-center items-center flex-col my-5">
                <label htmlFor="profilePic">
                    <input onChange={(e)=>handleUploadImage(e)} type="file" style={{display:"none"}} id="profilePic" />
                    {existingProfile == "" ?
                    <img style={{height:"150px",width:"150px",borderRadius:"50%"}} src={preview ? preview :"https://cdn-icons-png.flaticon.com/512/219/219983.png" }alt="" />
                    :
                    <img style={{height:"150px",width:"150px",borderRadius:"50%"}} src={preview ? preview :`${SERVERURL}/imgUploads/${existingProfile}`} alt="" />}
                </label>
            </div>
            <div className="mt-10 mb-3 w-full px-5">
                <input value={userDetails.username} onChange={(e)=>setuserDetails({...userDetails,username:e.target.value})} type="text" placeholder="Username" className="w-full border border-gray-300 placeholder-gray-500 p-2 rounded"/>
            </div>
            <div className="mt-10 mb-3 w-full px-5">
                <input value={userDetails.password} onChange={(e)=>setuserDetails({...userDetails,password:e.target.value})} type="text" placeholder="Password" className="w-full border border-gray-300 placeholder-gray-500 p-2 rounded"/>
            </div>
            <div className="mt-10 mb-3 w-full px-5">
                <input value={userDetails.confirmPassword} onChange={(e)=>setuserDetails({...userDetails,confirmPassword:e.target.value})} type="text" placeholder="Confirm Password" className="w-full border border-gray-300 placeholder-gray-500 p-2 rounded"/>
            </div>
            <div className="mt-10 mb-3 w-full px-5">
                <textarea value={userDetails.bio} onChange={(e)=>setuserDetails({...userDetails,bio:e.target.value})} type="text" placeholder="Bio" className="w-full border border-gray-300 placeholder-gray-500 p-2 rounded"/>
            </div>
            <div className="flex justify-end w-full px-5">
                <button onClick={reset} className="bg-amber-600 text-white rounded border py-3 px-4 hover:text-amber-600 hover:border-amber-600 hover:bg-white">Reset</button>
                <button onClick={submitUpdatedProfile} className="bg-green-600 text-white rounded border py-3 px-4 hover:text-green-600 hover:border-green-600 hover:bg-white ms-3">Update</button>
            </div>
        </div>
      </div>}
    </>
  );
}

export default EditProfile;

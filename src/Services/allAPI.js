import SERVERURL from "./serverURL"
import commonAPI from "./commonAPI"

// register
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

// login
export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}

// get home book
export const getHomeBookAPI = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/home-books`)
}

// Google login
export const googleLoginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/google-login`,reqBody)
}

// ................................user..................


// add book
export const addBookAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVERURL}/add-book`,reqBody,reqHeader)
}

// get all books
export const getAllBooksAPI = async (searchKey,reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/all-books?search=${searchKey}`,{},reqHeader)
}

// get a books
export const getABookAPI = async (bookid,reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/view-book/${bookid}`,{},reqHeader)
}

// get user books
export const getUserBooksAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/userbooks`,{},reqHeader)
}



// delete user added 
export const deleteAUserAddedBookAPI = async (id) => {
  return await commonAPI("DELETE", `${SERVERURL}/delete-book/${id}`);
};


// get user brought books
export const getUserBroughtAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/user-brought-book`,{},reqHeader)
}

// update user profile 
export const updateUserProfileAPI = async (reqBody,reqHeader) => {
    return await commonAPI("PUT",`${SERVERURL}/update-user-profile`,reqBody,reqHeader)
}

// .............................admin........................
// get all books in admin
export const getAllUserBooksAdminAPI = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/get-allbooks`)
}

// update book status
export const updateBookStatusAPI = async (id)=>{
    return await commonAPI("PUT",`${SERVERURL}/update-book/${id}`)
}

// get all users
export const getAllAdminUsersAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/get-allusers`,{},reqHeader)
}

// update admin profile
export const UpdateAdminProfileAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/update-admin-profile`,reqBody,reqHeader)
}

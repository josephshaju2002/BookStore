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

// ................................user..................


// add book
export const addBookAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVERURL}/add-book`,reqBody,reqHeader)
}

// get all books
export const getAllBooksAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/all-books`,"",reqHeader)
}

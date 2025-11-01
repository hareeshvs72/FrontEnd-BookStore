// guest user 

import commonApi from "./commonAPI"
import SERVERURL from "./serverURL"
// register APi - called by Auth component When registe button clicked, content-type:"applicatin/json"

export const registerApi = async(reqBody)=>{
  return await  commonApi("POST",`${SERVERURL}/register`,reqBody)
}
  
// login APi
export const loginApi = async(reqBody)=>{
  return await  commonApi("POST",`${SERVERURL}/login`,reqBody)
}
// google login 
export const googleLoginApi = async(reqBody)=>{
  return await  commonApi("POST",`${SERVERURL}/google-login`,reqBody)
}
  
// home page book api - call by home in useeffect
export const getHomeBookApi = async()=>{
  return await  commonApi("GET",`${SERVERURL}/home-books`)
}
// all carear api

// ------------------ autheriesd user api ------------------------------
// upload book api - called by profile component
 export const addBookApi = async(reqBody,reqHeader)=>{
  return await  commonApi("POST",`${SERVERURL}/add-book`,reqBody,reqHeader)
}

// view all books -  called by book componet

export const getAllBookApi = async(search,reqHeader)=>{
  return await  commonApi("GET",`${SERVERURL}/all-books?search=${search}`,{},reqHeader)
}

// view single book - called by viewbook componet wehne load the component

export const getSingleBookView = async(reqHeader,bookId)=>{
  return await  commonApi("GET",`${SERVERURL}/books/${bookId}/view`,{},reqHeader)
}

// all user upload books -called by profile
export const getAllUserUploadBooksApi = async(reqHeader)=>{
  return await  commonApi("GET",`${SERVERURL}/user-book`,{},reqHeader)
}

// all user purchased books

export const getAllUSerPurchasedBooks = async(reqHeader)=>{
  return await  commonApi("GET",`${SERVERURL}/user-bought-book`,{},reqHeader)
}

// remove user upload books

export const removeUserUploadedBooks = async(bookId,reqHeader)=>{
  return await  commonApi("DELETE",`${SERVERURL}/user-book/${bookId}/remove`,{},reqHeader)
}


//user profile Update

export const updateUserProfileApi = async(reqBody,reqHeader)=>{
  return await  commonApi("PUT",`${SERVERURL}/user-profile/edit`,reqBody,reqHeader)
}

// update admin profile - called by admin profile compone 
export const updateAdminProfile = async(reqBody,reqHeader)=>{
  return await  commonApi("PUT",`${SERVERURL}/user-profile/edit`,reqBody,reqHeader)
}


// admin api 

// resource admin

export const getAllUserApi = async(reqHeader)=>{
  return await  commonApi("GET",`${SERVERURL}/all-user`,{},reqHeader)
}

//  list all books in api

export const listAllBookAdminsAPI = async(reqHeader)=>{
  return await  commonApi("GET",`${SERVERURL}/admin-all-books`,{},reqHeader)
}

// update book status By admin 


export const updateBookStatusByAdmin = async(reqBody,reqHeader)=>{
  return await  commonApi("PUT",`${SERVERURL}/admin/book/approve`,reqBody,reqHeader)
}

// --------------------- jobs api ------------------------------------

// add job api 

export const addJobApi = async(reqBody,reqHeader)=>{
  return await  commonApi("POST",`${SERVERURL}/add-job`,reqBody,reqHeader)
}

// deleet job api 

export const deleteJobApi = async(jobId,reqHeader)=>{
  return await  commonApi("DELETE",`${SERVERURL}/delete/${jobId}/job`,{},reqHeader)
}

// get all job

export const getAllJobApi = async(searchKey)=>{
  return await  commonApi("GET",`${SERVERURL}/get-Jobs?search=${searchKey}`)
}


// ---------------- aplication ----------------------

// get all aplication called by admin carera component

export const getAllAplicationAPI = async(reqHeader)=>{
  return await  commonApi("GET",`${SERVERURL}/all-aplication`,{},reqHeader)
}

// add job aplication  called by carear by user

export const addAplicationAPI = async(reqBody,reqHeader)=>{
  return await  commonApi("POST",`${SERVERURL}/apllication/add`,reqBody,reqHeader)
}
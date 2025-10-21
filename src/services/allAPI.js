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

export const getAllBookApi = async(reqHeader)=>{
  return await  commonApi("GET",`${SERVERURL}/all-books`,{},reqHeader)
}

// view single book - called by viewbook componet wehne load the component

export const getSingleBookView = async(reqHeader,bookId)=>{
  return await  commonApi("GET",`${SERVERURL}/books/${bookId}/view`,{},reqHeader)
}

// profile Update


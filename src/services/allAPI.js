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
  
// home page book api
// all carear api
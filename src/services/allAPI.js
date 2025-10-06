// guest user 

import commonApi from "./commonAPI"
import SERVERURL from "./serverURL"
// register APi - called by Auth component When registe button clicked, content-type:"applicatin/json"

export const registerApi = async(reqBody)=>{
  return await  commonApi("POST",`${SERVERURL}/register`,reqBody)
}
  
// login APi
// home page book api
// all carear api
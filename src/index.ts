import axios from "axios";

const BaseUrl = "https://a90b05cb-e593-4a77-a500-82b909c678f2.mock.pstmn.io/";

try{
  const respone = await axios.get(`${BaseUrl}/citiekljs`);
  
  const status = respone.status;
  const data = respone.data;


  console.log("Status", status);
  console.log("Data", data);

}catch(e){
  console.error("Error",e);
}
import axios from "axios";

const url = "http://localhost:8080/student";

// Authenticate Student Login
const getByPrnAndPassword =(prn,password)=> {
  return axios.put(url,{prn,password});
}

// Fetch Student Data
const getByPrn = (prn) =>{
  return axios.get(url+`/${prn}`);
}

//Create Ticket 
const createTicket = (data) =>{
  return axios.post(url+`/newticket`,data);
}

//Fetch Ticket Details
const getTicketByTicketId = (ticketId) =>{
  return axios.get(url+`/ticket/${ticketId}`);
}
// Change Student Password
const changePassword =(data)=> {
  return axios.put(url+`/changepassword`,data);
}
//Delete Ticket From Database
const deleteByTicketId = (ticketId) => {
  return axios.delete(url + `/ticket/${ticketId}`);
};
export default { getByPrnAndPassword,getByPrn,createTicket,getTicketByTicketId,changePassword,deleteByTicketId};

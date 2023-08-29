import axios from "axios";

const url = "http://localhost:8080/admin";

const registerUser = (data) => {
  return axios.post(url+`/newstudent`,data);
}

const registerAdmin = (data) => {
  return axios.post(url+`/newadmin`,data);
}

const getAdminByUnameAndPassword = (uname,password) => {
  return axios.put(url,{uname,password});
};

const getAllTickets = () => {
  return axios.get(url+`/ticketlist`);
};

const getTicketById = (id) => {
  return axios.get(url + `/ticket/${id}`);
};


const deleteByTicketId = (ticketId) => {
  return axios.delete(url + `/ticket/${ticketId}`);
};

// Change Admin Password
const changePassword =(data)=> {
  return axios.put(url+`/changepassword`,data);
}

//Fetch Ticket Details
const getTicketByTicketId = (ticketId) =>{
  return axios.get(url+`/ticket/${ticketId}`);
}

//Update Ticket Status
const updateStatus = (ticketId,status) =>{
  return axios.put(url+`/ticket`,{ticketId,status});
}

// Fetch Student Data
const getByUname = (uname) =>{
  return axios.get(url+`/${uname}`);
}

export default {
  getAllTickets,
  getTicketById,
  deleteByTicketId,
  changePassword,
  updateStatus,
  registerUser,
  registerAdmin,
  getAdminByUnameAndPassword,
  getTicketByTicketId,
  getByUname
};

import axios from "axios";

const url = "http://localhost:3000/ticketlist";
const url2 = "http://localhost:3000/admins";
const url3 = "http://localhost:3000/adminsnew";

const getAll = () => {
  return axios.get(url);
};

const getById = (id) => {
  return axios.get(url + `/${id}`);
};

const getAdminById = (id) => {
  return axios.get(url2 + `/${id}`);
};

const getAdmin = () => {
  return axios.get(url2);
};

const deleteById = (id) => {
  return axios.delete(url + `/${id}`);
};

const changePassword = (id, data) => {
  return axios.put(url2 + `/${id}`, data);
};

const updateStatus = (id, data) => {
  return axios.put(url + `/${id}`, data);
};

export default {
  getAll,
  getById,
  deleteById,
  getAdmin,
  getAdminById,
  changePassword,
  updateStatus,
};

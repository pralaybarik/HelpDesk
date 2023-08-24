import axios from "axios";

const url = "http://localhost:3000/ticketlist";

const getAll = () => {
  return axios.get(url);
};

const getById = (id) => {
  return axios.get(url + `/${id}`);
};

const deleteById = (id) => {
  return axios.delete(url + `/${id}`);
};

export default { getAll, getById, deleteById };

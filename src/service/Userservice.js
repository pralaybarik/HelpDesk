import axios from "axios";

const url = "http://localhost:3000/users";

const get = () => {
  return axios.get(url);
};

const post = (data) => {
  return axios.post(url, data);
};

const getByPrn = (prn) => {
  return axios.get(url + `/${prn}`);
};

const changePassword = (prn, data) => {
  return axios.put(url + `/${prn}`, data);
};

export default { get, post, getByPrn, changePassword };

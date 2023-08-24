import axios from "axios";

const url = "http://localhost:3000/users";

const get = () => {
  return axios.get(url);
};

const post = (data) => {
  return axios.post(url, data);
};

export default { get, post };

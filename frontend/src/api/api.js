import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.http://hrms-1qt8.onrender.com/api
});

export default api;

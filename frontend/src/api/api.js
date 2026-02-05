import axios from "axios";

const api = axios.create({
  baseURL: "https://hrms-backend-i7tw.onrender.com/api"
});

export default api;

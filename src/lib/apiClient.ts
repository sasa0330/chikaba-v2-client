import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://chikaba-v2-api.onrender.com/api/",
  //baseURL: "http://localhost:3001/api/",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;

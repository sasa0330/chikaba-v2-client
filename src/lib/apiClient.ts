import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://express-search-shop.onrender.com/api/",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;

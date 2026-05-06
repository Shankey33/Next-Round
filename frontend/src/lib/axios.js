import axios from "axios";

const apiBaseURL = import.meta.env.VITE_API_URL;

if (import.meta.env.DEV) {
  console.info("Frontend API base URL:", apiBaseURL);
}

const axiosInstance = axios.create({
  baseURL: apiBaseURL,
  withCredentials: true,
});

export default axiosInstance;

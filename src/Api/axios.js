import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/e-clone-part-2/us-central1/api",
  baseURL: "https://api-6hjt5arawa-uc.a.run.app",
});


export {axiosInstance}
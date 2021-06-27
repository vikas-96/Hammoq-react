import axios from "axios";

const initAxios = (t) => {
  const userobj = JSON.parse(localStorage.getItem("userDetails"));
  const token = userobj ? userobj.access_token : "";

  axios.defaults.baseURL = process.env.APP_API_URL;
  axios.defaults.headers.Authorization = `Bearer ${token}`;

  const errorHandler = (error) => {
    if (error.response && 401 === error.response.status) {
      localStorage.removeItem("userDetails");
      return error.response.data.message === "Login failed"
        ? Promise.reject(error)
        : (window.location = "/");
    } else {
      return Promise.reject(error);
    }
  };

  axios.interceptors.response.use((response) => response, errorHandler);
  return token;
};

export default initAxios;

import axios from "axios";

// login
export function login(data = {}) {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/api/auth/login`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: null,
      },
    })
    .then((response) => response.data);
}

//register
export function register(data = {}) {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/api/user`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: null,
      },
    })
    .then((response) => response.data);
}

//changePassword
export function changePassword(data = {}) {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/api/change_password`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data);
}

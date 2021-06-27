import axios from "axios";

// get user
export function getUser(userid) {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/api/user/${userid}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data);
}

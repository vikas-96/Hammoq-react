import React, { useState, useEffect } from "react";
import * as User from "../../Request/user";
import { getTokenDecodeValue } from "../../Utils/Helper";
import { Link } from "react-router-dom";

const userData = getTokenDecodeValue();

const Component = (props) => {
  const [userDetail, setUserDetail] = useState();

  useEffect(() => {
    async function fetchData() {
      const user = await User.getUser(userData.id);
      setUserDetail(user);
    }
    fetchData();
  }, []);

  if (!userDetail) {
    return "<b>isloading...<b>";
  }

  return (
    <>
      <img
        src={`${process.env.REACT_APP_API_URL}/profiles/${userDetail.profile}`}
        alt={"profile"}
        height="10%"
        width="10%"
      />
      <div className="inline">
        <div>
          <label>Firstname: </label>
          <b>{userDetail.firstname}</b>
        </div>
        <div>
          <label>Lastname: </label>
          <b>{userDetail.lastname}</b>
        </div>
        <div>
          <label>Email Id: </label>
          <b>{userDetail.email}</b>
        </div>
        <div>
          <label>Phone: </label>
          <b>{userDetail.phone}</b>
        </div>
        <div>
          <label>DOB: </label>
          <b>{userDetail.dob}</b>
        </div>
      </div>
      <Link to="/user/change_password">Change Password</Link>
    </>
  );
};

export default Component;

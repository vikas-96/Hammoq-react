import React from "react";
import Anchor from "../Form/Anchor";

const Login = () => {
  return (
    <>
      <section className="grey-bg">
        <div className="container-fluid">
          <div className="">
            <Anchor path="/" label="Login" /> |{" "}
            <Anchor path="/signup" label="Register" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

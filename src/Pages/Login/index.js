import React from "react";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <section className="grey-bg">
        <div className="container-fluid">
          <div className="">
            <h3>Login</h3>
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

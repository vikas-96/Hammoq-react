import React from "react";
import SignupForm from "./SignupForm";

const Signup = () => {
  return (
    <>
      <section className="grey-bg">
        <div className="container-fluid">
          <div className="">
            <h3>Register</h3>
            <SignupForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;

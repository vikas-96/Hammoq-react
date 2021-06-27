import React, { useState, useRef } from "react";
import { FormInput } from "../../Components/Form/Input";
import { FormInputPassword } from "../../Components/Form/Password";
import SimpleReactValidator from "simple-react-validator";
import { Button } from "reactstrap";
import * as Auth from "../../Request/auth";
import getValidationErrors from "../../Utils/getValidationErrors";
import { browserHistory as history } from "../../App";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  dob: "",
  profile: "",
  password: "",
};

const Component = (props) => {
  const [signupData, setSignupData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, forceUpdate] = useState();
  var validator = useRef(new SimpleReactValidator());

  const handleChange = (e) => {
    e.persist();
    setSignupData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validator.current.allValid()) {
      validator.current.showMessages();
      forceUpdate(1);
      return false;
    }
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    Auth.register(formData)
      .then((res) => {
        setIsSubmitting(false);
        alert(res.message);
        setSignupData(initialState);
        validator.current.hideMessages();
        setTimeout(() => {
          history.push("/");
        }, 1000);
      })
      .catch((err) => {
        setIsSubmitting(false);
        getValidationErrors(err);
      });
  };

  const { firstname, lastname, email, phone, dob, profile, password } =
    signupData;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="col-md-6">
          <div className="form-group">
            <FormInput
              name="firstname"
              onChange={handleChange}
              value={firstname}
              placeholder="Firstname*"
              error={validator.current.message(
                "firstname",
                firstname,
                "required"
              )}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <FormInput
              name="lastname"
              onChange={handleChange}
              value={lastname}
              placeholder="Lastname"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <FormInput
              type="email"
              name="email"
              onChange={handleChange}
              value={email}
              placeholder="Email Address*"
              error={validator.current.message(
                "Email",
                email,
                "required|email"
              )}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <FormInput
              type="number"
              name="phone"
              onChange={handleChange}
              value={phone}
              placeholder="Phone"
              error={validator.current.message("phone", phone, "numeric")}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Profile* </label>
            <FormInput
              type="file"
              name="profile"
              accept="image/*"
              className="form-control-file border"
              value={profile}
              onChange={handleChange}
              error={validator.current.message("Profile", profile, "required")}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <FormInput
              type="text"
              name="dob"
              onChange={handleChange}
              value={dob}
              placeholder="DOB*"
              error={validator.current.message("DOB", dob, "required")}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <FormInputPassword
              name="password"
              onChange={handleChange}
              value={password}
              placeholder="Password*"
              error={validator.current.message(
                "Password",
                password,
                "required"
              )}
            />
          </div>
        </div>
        <div className="col-md-6">
          <Button className="btn btn-success" disabled={isSubmitting}>
            {isSubmitting ? "Please Wait..." : "Register"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default Component;

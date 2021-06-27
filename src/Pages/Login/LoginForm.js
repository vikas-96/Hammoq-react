import React, { useState, useRef } from "react";
import { Button } from "reactstrap";
import { FormInput } from "../../Components/Form/Input";
import { FormInputPassword } from "../../Components/Form/Password";
import SimpleReactValidator from "simple-react-validator";
import * as Auth from "../../Request/auth";
import initAxios from "../../Utils/initAxios";
import getValidationErrors from "../../Utils/getValidationErrors";
import { browserHistory as history } from "../../App";

const initialState = {
  email: "",
  password: "",
};

const Component = () => {
  const [loginData, setLoginData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, forceUpdate] = useState();
  var validator = useRef(new SimpleReactValidator());

  const handleChange = (e) => {
    e.persist();
    setLoginData((prevState) => ({
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
    await Auth.login(loginData)
      .then((response) => {
        localStorage.setItem(
          "userDetails",
          JSON.stringify({ access_token: response.access_token })
        );
        setIsSubmitting(false);
        initAxios();
        alert("login successfull");
        history.push("/user/listing");
      })
      .catch((err) => {
        setIsSubmitting(false);
        getValidationErrors(err);
      });
  };

  const { email, password } = loginData;
  return (
    <>
      <div className="col-md-6">
        <div className="form-group">
          <FormInput
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
            placeholder="Email Address*"
            error={validator.current.message("Email", email, "required|email")}
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
            error={validator.current.message("Password", password, "required")}
          />
        </div>
      </div>

      <div className="col-md-6">
        <Button
          type="submit"
          className="btn btn-success"
          disabled={isSubmitting}
          onClick={handleSubmit}
        >
          {isSubmitting ? "Please Wait..." : "Login"}
        </Button>
      </div>
    </>
  );
};

export default Component;

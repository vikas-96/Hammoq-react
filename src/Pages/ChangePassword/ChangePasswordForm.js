import React, { useState, useRef } from "react";
import { Button } from "reactstrap";
import { FormInputPassword } from "../../Components/Form/Password";
import SimpleReactValidator from "simple-react-validator";
import * as Auth from "../../Request/auth";
import { browserHistory as history } from "../../App";
import getValidationErrors from "../../Utils/getValidationErrors";

const initialState = {
  old_password: "",
  password: "",
};

const EditForm = () => {
  const [authData, setAuthData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, forceUpdate] = useState();
  var validator = useRef(new SimpleReactValidator());

  const handleChange = (e) => {
    e.persist();
    setAuthData((prevState) => ({
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
    Auth.changePassword(authData)
      .then((res) => {
        setIsSubmitting(false);
        alert(res.message);
        setAuthData(initialState);
        validator.current.hideMessages();
        // setTimeout(() => {
        //   history.push("/user/listing");
        // }, 1000);
      })
      .catch((err) => {
        setIsSubmitting(false);
        getValidationErrors(err);
      });
  };

  const { old_password, password } = authData;

  return (
    <>
      <div className="col-md-6">
        <div className="form-group">
          <FormInputPassword
            name="old_password"
            onChange={handleChange}
            value={old_password}
            placeholder="Old Password*"
            error={validator.current.message(
              "Old Password",
              old_password,
              "required"
            )}
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <FormInputPassword
            name="password"
            onChange={handleChange}
            value={password}
            placeholder="New Password*"
            error={validator.current.message("Password", password, "required")}
          />
        </div>
      </div>
      <div className="col-md-6">
        <Button
          className="btn btn-success"
          disabled={isSubmitting}
          onClick={handleSubmit}
        >
          {isSubmitting ? "Please Wait..." : "Submit"}
        </Button>
      </div>
    </>
  );
};

export default EditForm;

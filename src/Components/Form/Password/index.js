import React, { useState } from "react";
import { Input as BaseInput } from "reactstrap";
import Errorboundries from "../../ErrorBoundries";

export const FormInputPassword = ({
  name,
  className = "",
  onChange,
  value,
  error,
  ...rest
}) => {
  const [type, setType] = useState("password");

  const handleChange = () => {
    setType(type === "text" ? "password" : "text");
  };

  let Inputclass = `${className}`; // for common global class
  let eyetype = type === "text" ? "fa fa-eye" : "fa fa-eye-slash";
  return (
    <Errorboundries>
      <>
        <BaseInput
          name={name}
          type={type}
          autoComplete="off"
          className={Inputclass.trim()}
          onChange={onChange}
          value={value || ""}
          {...rest}
        />
        <i className={eyetype + " p-viewer"} onClick={handleChange}></i>
        {error && error}
      </>
    </Errorboundries>
  );
};

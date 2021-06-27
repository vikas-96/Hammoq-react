import React from "react";
import { Input as BaseInput } from "reactstrap";
import Errorboundries from "../../ErrorBoundries";

export const FormInput = ({
  name,
  type = "text",
  className = "",
  onChange,
  value,
  error,
  ...rest
}) => {
  let Inputclass = `${className}`; // want class globally then add ex., `test ${className}`
  return (
    <Errorboundries>
      <BaseInput
        name={name}
        type={type}
        autoComplete="off"
        className={Inputclass.trim()}
        onChange={onChange}
        value={value || ""}
        {...rest}
      />
      {error && error}
    </Errorboundries>
  );
};

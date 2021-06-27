import React from "react";
import { Link } from "react-router-dom";
import Errorboundries from "../../ErrorBoundries";

const Anchor = ({ path, label, className = "", ...rest }) => {
  let Linkclass = `${className}`; // want class globally then add ex., `test ${className}`
  return (
    <Errorboundries>
      <Link to={path} {...rest} className={Linkclass.trim()}>
        {label}
      </Link>
    </Errorboundries>
  );
};

export default Anchor;

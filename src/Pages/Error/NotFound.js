import React from "react";
import { browserHistory as history } from "../../App";

const NotFound = () => {
  return (
    <>
      <section className="not-found">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="main-title-pg">
                Page Not Found For {history.location.pathname}
              </h2>
              <button className="btn btn-danger" onClick={history.goBack}>
                Go Back
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
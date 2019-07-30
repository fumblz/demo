import React from "react";

const Banner = ({ title, message }) => {
  return (
    <div className="container my-3">
      <div className="jumbotron text-center">
        <h1 className="display-3">{title}</h1>
        <hr />
        <p className="lead">{message}</p>
      </div>
    </div>
  );
};

export default Banner;

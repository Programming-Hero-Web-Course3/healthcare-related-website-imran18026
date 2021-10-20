import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="style">
      <h1>404</h1>
      <h1> Sorry! This page not found.</h1>
      <br />
      <Link to="/">
        <button className="btn btn-success">Go back</button>
      </Link>
    </div>
  );
};

export default NotFound;

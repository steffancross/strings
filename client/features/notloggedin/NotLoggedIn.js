import React from "react";
import { Link } from "react-router-dom";

const NotLoggedIn = () => {
  return (
    <>
      <div>
        <p>Hi, welcome to archive</p>
        <p>blah blah blah</p>
        <p>blah blah blah</p>
      </div>
      <div>
        <p>Please login</p>
        <Link to="/login">Here</Link>
      </div>
      <div>
        <p>Please sign up</p>
        <Link to="/signup">Here</Link>
      </div>
    </>
  );
};

export default NotLoggedIn;

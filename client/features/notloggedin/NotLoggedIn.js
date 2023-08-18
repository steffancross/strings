import React from "react";
import { Link } from "react-router-dom";

const NotLoggedIn = () => {
  return (
    <>
      <div className="centering-div">
        <div>
          <p>Hi, welcome to archive</p>
          <p>blah blah blah</p>
          <p>blah blah blah</p>
          <div className="notloggedin">
            <p>Please login&nbsp;</p>
            <Link to="/login">here</Link>
          </div>
          <div className="notloggedin">
            <p>Please sign up&nbsp;</p>
            <Link to="/signup">here</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotLoggedIn;

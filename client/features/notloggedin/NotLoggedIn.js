import React from "react";
import { Link } from "react-router-dom";

const NotLoggedIn = () => {
  return (
    <>
      <div className="centering-div">
        <div>
          <p>Welcome to Ad Hoc</p>
          <p>Ad Hoc is a place to archive and catalogue words and phrases.</p>
          <p>
            In this world so much flits by so fast, it can be hard to keep track
            of those things that are important to you
          </p>
          <p>
            This place is just a tool to make that a bit easier. Whether it is a
            quote that stirs some emotion within you or prospective names for a
            brand you might be thinking of building, or anything else. Keep them
            here to refer back to anytime.
          </p>
          <div className="notloggedin">
            <p>If you have an account already, login&nbsp;</p>
            <Link to="/login">here</Link>
          </div>
          <div className="notloggedin">
            <p>Or if you are new, you can make a free account&nbsp;</p>
            <Link to="/signup">here</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotLoggedIn;

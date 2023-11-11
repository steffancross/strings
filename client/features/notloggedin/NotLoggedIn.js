import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotLoggedIn = () => {
  return (
    <>
      <div className="centering-div">
        <p id="title">AD.HOC</p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, delay: 0.5 }}
        >
          <p>Welcome to Ad.hoc</p>
          <p>This is a place to archive and catalogue words and phrases.</p>
          <p>
            In this world, so much flits by so fast, it can be hard to keep
            track of those things that you want to remember.
          </p>
          <p>
            This is a tool to make that a bit easier. Whether it is a quote that
            stirs some emotion within you or prospective names for a brand you
            might be thinking of building, or anything else. Keep them here to
            refer back to anytime.
          </p>
          <div className="notloggedin">
            <p>If you have an account already, login&nbsp;</p>
            <Link to="/login">here</Link>
          </div>
          <div className="notloggedin">
            <p>Or if you are new, you can make a free account&nbsp;</p>
            <Link to="/signup">here</Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default NotLoggedIn;

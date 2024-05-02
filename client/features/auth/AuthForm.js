import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = ({ name, displayName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, result } = useSelector((state) => state.auth);
  const [errorVisible, setErrorVisible] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const email = evt.target.email.value;
    const password = evt.target.password.value;
    dispatch(authenticate({ email, password, method: formName }));
  };

  useEffect(() => {
    if (result) {
      navigate("/");
    } else {
      parseErrorMessage(error);
    }
  }, [result, error]);

  // error message handling
  const parseErrorMessage = (str) => {
    if (str) {
      const errorsArr = str.split(", ");
      console.log("++++", errorsArr);
    }
    if (error) {
      setErrorVisible(true);
      setTimeout(() => {
        setErrorVisible(false);
      }, 2000);
    }
  };

  return (
    <div className="centering-div">
      <p id="title">AD.HOC</p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.0, delay: 0.5 }}
      >
        <form onSubmit={handleSubmit} name={name}>
          <div className="auth-inputs">
            <input name="email" type="text" placeholder="Email*" />
            <input name="password" type="password" placeholder="Password*" />
          </div>
          <div className="auth-btn">
            <button type="submit">{displayName}</button>
          </div>
          {errorVisible && <div className="error-popup"> {error} </div>}
        </form>
      </motion.div>
    </div>
  );
};

export default AuthForm;

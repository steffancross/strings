import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../../app/store";
import { useNavigate } from "react-router-dom";

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = ({ name, displayName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const email = evt.target.email.value;
    const password = evt.target.password.value;
    dispatch(authenticate({ email, password, method: formName }));
    navigate("/");
  };

  return (
    <div className="centering-div">
      <p id="title">AD.HOC</p>
      <form onSubmit={handleSubmit} name={name}>
        <div className="auth-inputs">
          <input name="email" type="text" placeholder="Email*" />
          <input name="password" type="password" placeholder="Password*" />
        </div>
        <div className="auth-btn">
          <button type="submit">{displayName}</button>
        </div>
        {error && <div> {error} </div>}
      </form>
    </div>
  );
};

export default AuthForm;

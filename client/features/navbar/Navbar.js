import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import Popup from "reactjs-popup";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Popup
      trigger={<div className="menu-item"> Menu </div>}
      position="left top"
      on="hover"
      closeOnDocumentClick
      mouseLeaveDelay={300}
      mouseEnterDelay={0}
      contentStyle={{ padding: "0px", border: "none" }}
      arrow={false}
    >
      <div>
        <nav>
          {isLoggedIn ? (
            <div id="menu">
              <Link to="/">Home</Link>
              <Link to="/guide">Guide</Link>
              <button type="button" onClick={logoutAndRedirectHome}>
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          )}
        </nav>
      </div>
    </Popup>
  );
};

export default Navbar;

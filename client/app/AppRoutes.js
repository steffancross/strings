import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import NotLoggedIn from "../features/notloggedin/NotLoggedIn";
import Main from "../features/main/Main";
import SingleMat from "../features/singlemat/Singlemat";
import Guide from "../features/guide/Guide";
import { me } from "./store";

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route to="/" element={<Main />} />
          <Route path="/mat/:id" element={<SingleMat />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/*" element={<Main />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<NotLoggedIn />} />
          {/* <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          /> */}
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;

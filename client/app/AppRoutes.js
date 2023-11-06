import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import NotLoggedIn from "../features/notloggedin/NotLoggedIn";
import Main from "../features/main/Main";
import Guide from "../features/guide/Guide";
import Tags from "../features/tags/Tags";
import { me } from "./store";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(me()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <div></div>
      ) : isLoggedIn ? (
        <Routes>
          <Route to="/" element={<Main />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/*" element={<Main />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<NotLoggedIn />} />
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
    </>
  );
};

export default AppRoutes;

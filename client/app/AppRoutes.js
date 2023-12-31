import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import NotLoggedIn from "../features/notloggedin/NotLoggedIn";
import Main from "../features/main/Main";
import Guide from "../features/guide/Guide";
import Tags from "../features/tags/Tags";
import About from "../features/about/About";
import Graph from "../features/graph/Graph";
import { setFalseFirstVisit } from "../features/utils/userSlice";
import { me } from "./store";
import { fetchStyles } from "../features/styling/stylingSlice";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const firstVisit = useSelector((state) => state.auth.me.firstvisit);
  const userId = useSelector((state) => state.auth.me.id);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(me()).then(() => {
      setIsLoading(false);
    });

    if (userId) {
      dispatch(fetchStyles({ userId }));
    }

    if (firstVisit && userId) {
      navigate("/about");
      dispatch(setFalseFirstVisit(userId));
    }
  }, [dispatch, firstVisit, userId]);

  return (
    <>
      {isLoading ? (
        <div></div>
      ) : isLoggedIn ? (
        <div id="main-holder">
          <Routes>
            <Route to="/" element={<Main />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/graph" element={<Graph />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Main />} />
          </Routes>
        </div>
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

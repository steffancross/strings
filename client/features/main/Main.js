import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTexts } from "./mainSlice";

const Main = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const user = useSelector((state) => state.auth.me);
  const userId = user.id;
  const texts = useSelector((state) => state.texts);

  useEffect(() => {
    if (isLoggedIn && user) {
      dispatch(fetchTexts({ userId }));
    }
  }, [dispatch, user]);

  return (
    <>
      {texts.length > 0 && (
        <div id="text-container">
          {texts.map((text, index) => (
            <div id="text" key={index}>
              <Link to={`/mat/${text.id}`}>
                <h3>{text.content}</h3>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Main;

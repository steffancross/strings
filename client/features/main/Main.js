import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
              <h3>{text.content}</h3>
              {text.tags.map((tag, index) => (
                <p key={index}>{tag.name}</p>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Main;

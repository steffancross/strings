import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTexts } from "./mainSlice";
import { setShowNewMat } from "../utils/flagSlice";
// import { singleMatPopup } from "../utils/popupFunctions";
import {
  setCurrentId,
  setShowSingleMat,
  setShowOverlay,
} from "../utils/flagSlice";

const Main = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const user = useSelector((state) => state.auth.me);
  const userId = user.id;
  const texts = useSelector((state) => state.mats);
  const shouldFetch = useSelector((state) => state.flags.shouldFetch);

  const singleMatPopup = (id) => {
    dispatch(setCurrentId(id));
    dispatch(setShowOverlay(true));
    dispatch(setShowSingleMat(true));
  };

  useEffect(() => {
    if (isLoggedIn && user && shouldFetch) {
      dispatch(fetchTexts({ userId }));
    }
  }, [dispatch, user]);

  return (
    <>
      {texts.length > 0 ? (
        <div className="text-container">
          {texts.map((text, index) => (
            <div className="individual-text" key={index}>
              <div
                className="text-link"
                onClick={() => singleMatPopup(text.id)}
              >
                <p>{text.content}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>
            Looks like you don't have any mats yet, or any associated with that
            search. Click
          </p>
          <button onClick={() => dispatch(setShowNewMat(true))}>here</button>
          <p>to make your first one.</p>
        </div>
      )}
    </>
  );
};

export default Main;

import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTexts } from "./mainSlice";
import {
  setCurrentId,
  setShowSingleMat,
  setShowNewMat,
  setShowOverlay,
} from "../utils/flagSlice";
import { motion } from "framer-motion";

const Main = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const user = useSelector((state) => state.auth.me);
  const userId = user.id;
  const texts = useSelector((state) => state.mats);
  const shouldFetch = useSelector((state) => state.flags.shouldFetch);
  const [isLoading, setIsLoading] = useState(true);

  const singleMatPopup = (id) => {
    dispatch(setCurrentId(id));
    dispatch(setShowOverlay(true));
    dispatch(setShowSingleMat(true));
  };

  const newMatPopup = () => {
    dispatch(setShowOverlay(true));
    dispatch(setShowNewMat(true));
  };

  useEffect(() => {
    if (isLoggedIn && user && shouldFetch) {
      dispatch(fetchTexts({ userId })).then(() => {
        setIsLoading(false);
      });
    }
  }, [dispatch, user]);

  return (
    <>
      {isLoading ? (
        <div></div>
      ) : texts.length > 0 ? (
        <motion.div
          className="text-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
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
        </motion.div>
      ) : (
        <div>
          <p>
            Looks like you don't have any mats yet, or any associated with that
            search. Click
          </p>
          <button onClick={() => newMatPopup()}>here</button>
          <p>to make your first one.</p>
        </div>
      )}
    </>
  );
};

export default Main;

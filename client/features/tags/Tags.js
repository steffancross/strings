import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "./tagSlice";
import {
  setCurrentId,
  setShowSingleTag,
  setShowNewMat,
  setShowOverlay,
} from "../utils/flagSlice";
import { motion } from "framer-motion";

const Tags = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const user = useSelector((state) => state.auth.me);
  const userId = user.id;
  const tags = useSelector((state) => state.tags);
  const [isLoading, setIsLoading] = useState(true);

  const singleTagPopup = (id) => {
    dispatch(setCurrentId(id));
    dispatch(setShowOverlay(true));
    dispatch(setShowSingleTag(true));
  };

  const newMatPopup = () => {
    dispatch(setShowOverlay(true));
    dispatch(setShowNewMat(true));
  };

  useEffect(() => {
    if (isLoggedIn && user) {
      dispatch(fetchTags({ userId })).then(() => {
        setIsLoading(false);
      });
    }
  }, [dispatch, user]);

  return (
    <>
      {isLoading ? (
        <div></div>
      ) : tags.length > 0 ? (
        <motion.div
          className="text-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {tags.map((tag, index) => (
            <div className="individual-text" key={index}>
              <motion.div
                className="text-link"
                onClick={() => singleTagPopup(tag.id)}
                whileHover={{ scale: 1.05 }}
              >
                <p>{tag.name}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="no-results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p>Looks like you don't have any tags yet. Click</p>
          <button onClick={() => newMatPopup()}>here</button>
          <p>to make your first mat.</p>
        </motion.div>
      )}
    </>
  );
};

export default Tags;

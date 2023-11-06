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
        <div className="text-container">
          {tags.map((tag, index) => (
            <div className="individual-text" key={index}>
              <div className="text-link" onClick={() => singleTagPopup(tag.id)}>
                <p>{tag.name}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>Looks like you don't have any tags yet. Click</p>
          <button onClick={() => newMatPopup()}>here</button>
          <p>to make your first mat.</p>
        </div>
      )}
    </>
  );
};

export default Tags;

import React from "react";
import { useDispatch } from "react-redux";
import { setAllFalse } from "../utils/flagSlice";

const Overlay = () => {
  const dispatch = useDispatch();

  return (
    <div className="overlay" onClick={() => dispatch(setAllFalse())}></div>
  );
};

export default Overlay;

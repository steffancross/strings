import React from "react";
import { useDispatch } from "react-redux";
import { setAllFalse } from "../utils/flagSlice";
import { motion } from "framer-motion";

const Overlay = () => {
  const dispatch = useDispatch();

  return (
    <motion.div
      className="overlay"
      onClick={() => dispatch(setAllFalse())}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    ></motion.div>
  );
};

export default Overlay;

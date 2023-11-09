import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchTag } from "./singletagSlice";
import { motion } from "framer-motion";

const SingleTag = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useSelector((state) => state.flags.currentId);

  const tag = useSelector((state) => state.tag);

  // const handleDelete = () => {
  //   dispatch(deleteMat(id)).then(() => {
  //     navigate("/");
  //   });
  // };

  useEffect(() => {
    dispatch(fetchTag(id));
  }, [dispatch, id]);

  return (
    <>
      <motion.div
        className="popup"
        initial={{ opacity: 0, y: "-40%", x: "-50%" }}
        animate={{ opacity: 1, y: "-50%", x: "-50%" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {tag && (
          <div>
            <p>{tag.name}</p>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default SingleTag;

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
  const associatedMats = tag.texts;

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
        {tag && associatedMats && (
          <div className="single-mattag">
            <div className="single-content">
              <p>{tag.name}</p>
            </div>
            <div className="single-rest">
              <div>
                <div className="single-labels">
                  <small>Associated Mats</small>
                  <div className="single-list">
                    {associatedMats.map((mat, index) => (
                      <p key={index}>{mat.content}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="single-actions">
                <button className="single-edit">Edit Tag</button>
                <button className="single-delete">Delete Tag</button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default SingleTag;

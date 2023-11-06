import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMat, deleteMat } from "./singlematSlice";
import EditMat from "../editmat/EditMat";
import { motion } from "framer-motion";

const SingleMat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useSelector((state) => state.flags.currentId);
  const mat = useSelector((state) => state.mat);
  const tags = useSelector((state) => state.mat.tags);

  const handleDelete = () => {
    dispatch(deleteMat(id)).then(() => {
      navigate("/");
    });
  };

  useEffect(() => {
    dispatch(fetchMat(id));
  }, [dispatch, id]);

  return (
    <>
      <motion.div
        className="popup"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {mat && tags && (
          <div>
            <div>
              <p>{mat.content}</p>
            </div>
            <div>
              <p>Description: {mat.description}</p>
              <p>Link: {mat.link}</p>
              {tags.map((tag, index) => (
                <p key={index}>{tag.name}</p>
              ))}
            </div>
            <div>Edit Mat</div>
            <div>
              <button onClick={handleDelete}>Delete Mat</button>
            </div>
          </div>
        )}
        <EditMat />
      </motion.div>
    </>
  );
};

export default SingleMat;

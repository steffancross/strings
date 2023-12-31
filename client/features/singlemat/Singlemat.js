import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMat, deleteMat } from "./singlematSlice";
import EditMat from "../editmat/EditMat";
import {
  setAllFalse,
  setCurrentId,
  setShowSingleMat,
  setShowSingleTag,
} from "../utils/flagSlice";
import { motion } from "framer-motion";

const SingleMat = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.flags.currentId);
  const mat = useSelector((state) => state.mat);
  const tags = useSelector((state) => state.mat.tags);
  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleDelete = () => {
    dispatch(deleteMat(id)).then(() => {
      dispatch(setAllFalse());
      location.reload();
    });
  };

  const handleTagNavigate = (data) => {
    dispatch(setCurrentId(data));
    dispatch(setShowSingleMat(false));
    dispatch(setShowSingleTag(true));
  };

  useEffect(() => {
    dispatch(fetchMat(id));
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
        {mat && tags && (
          <div className="single-mattag">
            <div className="single-content">
              <p>{mat.content}</p>
            </div>
            <div className="single-rest">
              {editMode ? (
                <EditMat handleEdit={handleEdit} />
              ) : (
                <>
                  <div>
                    <div className="single-labels">
                      <small>Description</small>
                      <p className="single-desc">{mat.description}</p>
                    </div>
                    <div className="single-labels">
                      <small>Tags</small>
                      <div className="single-list">
                        {tags.map((tag, index) => (
                          <p
                            key={index}
                            onClick={() => handleTagNavigate(tag.id)}
                          >
                            -{tag.name}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="single-labels">
                      <a href={mat.link} target="_blank">
                        Go to source
                      </a>
                    </div>
                  </div>
                  <div className="single-actions">
                    <button className="single-edit" onClick={handleEdit}>
                      Edit Mat
                    </button>
                    <button className="single-delete" onClick={handleDelete}>
                      Delete Mat
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default SingleMat;

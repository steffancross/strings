import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTag, deleteTag } from "./singletagSlice";
import { motion } from "framer-motion";
import {
  setAllFalse,
  setCurrentId,
  setShowSingleMat,
  setShowSingleTag,
} from "../utils/flagSlice";
import EditTag from "../edittag/EditTag";

const SingleTag = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.flags.currentId);
  const tag = useSelector((state) => state.tag);
  const associatedMats = tag.texts;
  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleDelete = () => {
    dispatch(deleteTag(id)).then(() => {
      dispatch(setAllFalse());
      location.reload();
    });
  };

  const handleMatNavigate = (data) => {
    dispatch(setCurrentId(data));
    dispatch(setShowSingleTag(false));
    dispatch(setShowSingleMat(true));
  };

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
              {editMode ? (
                <EditTag handleEdit={handleEdit} />
              ) : (
                <>
                  <div>
                    <div className="tag-labels">
                      <small>Associated Mats</small>
                      <div className="tag-list">
                        {associatedMats.map((mat, index) => (
                          <p
                            key={index}
                            onClick={() => handleMatNavigate(mat.id)}
                          >
                            -{mat.content}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="single-actions">
                    <button className="single-edit" onClick={handleEdit}>
                      Edit Tag
                    </button>
                    <button className="single-delete" onClick={handleDelete}>
                      Delete Tag
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

export default SingleTag;

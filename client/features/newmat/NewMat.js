import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMat } from "./newmatSlice";
import { fetchTexts } from "../main/mainSlice";
import { setAllFalse } from "../utils/flagSlice";
import { motion } from "framer-motion";

const NewMat = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.me);
  const userId = user.id;
  const [formData, setFormData] = useState({
    content: "",
    link: "",
    description: "",
    tags: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { content, link, description, tags } = formData;

    // spilt and trim tags
    const tagsArray = tags.split(",").map((tag) => tag.trim());

    // what will be sending to addMat, don't include link, and
    // description if they are left blank
    const payload = {
      content,
      userId,
      ...(link !== "" && { link }),
      ...(description !== "" && { description }),
      tags: tagsArray[0] !== "" ? tagsArray : [],
    };

    await dispatch(addMat(payload));
    dispatch(fetchTexts({ userId }));

    // clear the form after submit
    setFormData({
      content: "",
      userId: "",
      link: "",
      description: "",
      tags: "",
    });

    dispatch(setAllFalse());
  };

  return (
    <motion.div
      className="popup"
      initial={{ opacity: 0, y: "-40%", x: "-50%" }}
      animate={{ opacity: 1, y: "-50%", x: "-50%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <form onSubmit={handleSubmit}>
        <div className="single-labels">
          <small>Content:</small>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="single-labels">
          <small>Description:</small>
          <textarea
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="single-labels">
          <small>Link:</small>
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="single-labels">
          <small>Tags:</small>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="new-buttons">
          <button className="single-edit" type="submit">
            Add Mat
          </button>
          <button
            className="single-delete"
            onClick={() => dispatch(setAllFalse())}
          >
            Discard
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default NewMat;

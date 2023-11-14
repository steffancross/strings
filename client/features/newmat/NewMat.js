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
      <h2>Add New Mat</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Content:
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </label>
        <label>
          Link:
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </label>
        <label>
          Description:
          <textarea
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Tags:
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </label>
        <button className="single-edit" type="submit">
          Add Text
        </button>
        <button
          className="single-delete"
          onClick={() => dispatch(setAllFalse())}
        >
          Discard
        </button>
      </form>
    </motion.div>
  );
};

export default NewMat;

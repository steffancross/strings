import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editMat } from "./editmatSlice";
import { fetchMat } from "../singlemat/singlematSlice";
import { setAllFalse } from "../utils/flagSlice";

const EditMat = ({ handleEdit }) => {
  const dispatch = useDispatch();
  const mat = useSelector((state) => state.mat);
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

    // what will be sending to editMat, don't include link, and
    // description if they are left blank
    const payload = {
      content,
      ...(link !== "" && { link }),
      ...(description !== "" && { description }),
      tags: tagsArray[0] !== "" ? tagsArray : [],
      id: mat.id,
    };

    await dispatch(editMat(payload));
    dispatch(fetchMat(mat.id));

    setFormData({
      content: "",
      link: "",
      description: "",
      tags: "",
    });

    handleEdit();
    // dispatch(setAllFalse());
  };

  useEffect(() => {
    if (mat) {
      setFormData({
        content: mat.content || "",
        link: mat.link || "",
        description: mat.description || "",
        tags: mat.tags ? mat.tags.map((tag) => tag.name).join(", ") : "",
      });
    }
  }, [mat]);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} id="editInfo">
          <div className="single-labels">
            <small>Content</small>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="single-labels">
            <small>Description</small>
            <textarea
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="single-labels">
            <small>Link</small>
            <input
              type="text"
              name="link"
              value={formData.link}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="single-labels">
            <small>Tags</small>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </div>
        </form>
      </div>
      <div className="single-actions">
        <button className="single-edit" type="submit" form="editInfo">
          Save
        </button>
        <button
          className="single-delete"
          onClick={() => dispatch(setAllFalse())}
        >
          Discard
        </button>
      </div>
    </>
  );
};

export default EditMat;

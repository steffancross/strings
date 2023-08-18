import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editMat } from "./editmatSlice";
import { fetchMat } from "../singlemat/singlematSlice";

const EditMat = () => {
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
    <div>
      <h2>Edit</h2>
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
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditMat;

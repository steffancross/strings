import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMat } from "./newmatSlice";

const NewMat = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.me);
  const userId = user.id;
  const [formData, setFormData] = useState({
    content: "",
    source: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const { content, source, link, description, tags } = formData;

    // spilt and trim tags
    const tagsArray = tags.split(",").map((tag) => tag.trim());

    // what will be sending to addMat, don't include source, link, and
    // description if they are left blank
    const payload = {
      content,
      userId,
      ...(source !== "" && { source }),
      ...(link !== "" && { link }),
      ...(description !== "" && { description }),
      tags: tagsArray[0] !== "" ? tagsArray : [],
    };

    dispatch(addMat(payload));

    // clear the form after submit
    setFormData({
      content: "",
      userId: "",
      source: "",
      link: "",
      description: "",
      tags: "",
    });
  };

  return (
    <div>
      <h2>Add New Mat</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Content:
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </label>
        <label>
          Source:
          <input
            type="text"
            name="source"
            value={formData.source}
            onChange={handleChange}
          />
        </label>
        <label>
          Link:
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
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
          />
        </label>
        <button type="submit">Add Text</button>
      </form>
    </div>
  );
};

export default NewMat;

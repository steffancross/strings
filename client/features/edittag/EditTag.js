import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTag } from "./edittagSlice";
import { fetchTag } from "../singletag/singletagSlice";
import { setAllFalse } from "../utils/flagSlice";

const EditTag = ({ handleEdit }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.me);
  const userId = user.id;
  const tag = useSelector((state) => state.tag);
  const [formData, setFormData] = useState({
    name: "",
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

    const { name } = formData;

    const payload = {
      name,
      id: tag.id,
    };

    await dispatch(editTag(payload));
    dispatch(fetchTag(tag.id));

    setFormData({
      name: "",
    });

    handleEdit();
  };

  useEffect(() => {
    if (tag) {
      setFormData({
        name: tag.name || "",
      });
    }
  }, [tag]);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} id="editInfo">
          <div className="single-labels">
            <small>Name</small>
            <textarea
              name="name"
              value={formData.name}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="single-labels">
            <small>
              Warning: Changing the name of this tag will change its name in all
              associated mats as well.
            </small>
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

export default EditTag;

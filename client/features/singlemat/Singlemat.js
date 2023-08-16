import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMat, deleteMat } from "./singlematSlice";

const SingleMat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const mat = useSelector((state) => state.mat);
  const tags = useSelector((state) => state.mat.tags);

  const handleDelete = async () => {
    try {
      await dispatch(deleteMat(id));
      navigate("/");
    } catch (error) {
      console.error("error deleting mat", error);
    }
  };

  useEffect(() => {
    dispatch(fetchMat(id));
  }, [dispatch, id]);

  return (
    <>
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
    </>
  );
};

export default SingleMat;

import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMat } from "./singlematSlice";

const SingleMat = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const mat = useSelector((state) => state.mat);
  const tags = useSelector((state) => state.mat.tags);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const user = useSelector((state) => state.auth.me);
  const userId = user.id;

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
            <p>Source: {mat.source}</p>
            <p>Link: {mat.link}</p>
            {tags.map((tag, index) => (
              <p key={index}>{tag.name}</p>
            ))}
          </div>
          <div>Edit Mat</div>
        </div>
      )}
    </>
  );
};

export default SingleMat;

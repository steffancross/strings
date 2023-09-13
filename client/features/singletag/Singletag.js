import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchTag } from "./singletagSlice";

const SingleTag = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const tag = useSelector((state) => state.tag);

  // const handleDelete = () => {
  //   dispatch(deleteMat(id)).then(() => {
  //     navigate("/");
  //   });
  // };

  useEffect(() => {
    dispatch(fetchTag(id));
  }, [dispatch, id]);

  return (
    <>
      {tag && (
        <div>
          <p>{tag.name}</p>
        </div>
      )}
    </>
  );
};

export default SingleTag;

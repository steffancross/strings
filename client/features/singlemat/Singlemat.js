import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleMat = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const user = useSelector((state) => state.auth.me);
  const userId = user.id;

  return (
    <>
      <div>hello</div>
    </>
  );
};

export default SingleMat;

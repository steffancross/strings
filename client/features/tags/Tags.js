import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTags } from "./tagSlice";
import NewMat from "../newMat/Newmat";
import Popup from "reactjs-popup";

const Tags = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const user = useSelector((state) => state.auth.me);
  const userId = user.id;
  const tags = useSelector((state) => state.tags);
  const [showNewMat, setShowNewMat] = useState(false);

  const closeNewMatPopup = () => {
    setShowNewMat(false);
  };

  useEffect(() => {
    if (isLoggedIn && user) {
      dispatch(fetchTags({ userId }));
    }
  }, [dispatch, user]);

  return (
    <>
      {tags.length > 0 ? (
        <div className="text-container">
          {tags.map((tag, index) => (
            <div className="individual-text" key={index}>
              <Link className="text-link" to={`/tags/${tag.id}`}>
                <p>{tag.name}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>Looks like you don't have any tags yet. Click</p>
          <button onClick={() => setShowNewMat(true)}>here</button>
          <p>to make your first mat.</p>
        </div>
      )}
      <Popup
        className="add-popup"
        open={showNewMat}
        onClose={() => setShowNewMat(false)}
        modal
      >
        <NewMat closePopup={closeNewMatPopup} />
      </Popup>
    </>
  );
};

export default Tags;

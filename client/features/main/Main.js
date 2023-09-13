import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTexts } from "./mainSlice";
import NewMat from "../newMat/Newmat";
import Popup from "reactjs-popup";
import { setShouldFetch } from "./flagSlice";

const Main = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const user = useSelector((state) => state.auth.me);
  const userId = user.id;
  const texts = useSelector((state) => state.mats);
  const shouldFetch = useSelector((state) => state.shouldFetch);
  const [showNewMat, setShowNewMat] = useState(false);

  const closeNewMatPopup = () => {
    setShowNewMat(false);
  };

  useEffect(() => {
    if (isLoggedIn && user && shouldFetch) {
      dispatch(fetchTexts({ userId }));
    }
  }, [dispatch, user]);

  return (
    <>
      {texts.length > 0 ? (
        <div className="text-container">
          {texts.map((text, index) => (
            <div className="individual-text" key={index}>
              <Link className="text-link" to={`/mat/${text.id}`}>
                <p>{text.content}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>
            Looks like you don't have any mats yet, or any associated with that
            search. Click
          </p>
          <button onClick={() => setShowNewMat(true)}>here</button>
          <p>to make your first one.</p>
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

export default Main;

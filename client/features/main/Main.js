import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTexts } from "./mainSlice";
import NewMat from "../newMat/Newmat";
import Popup from "reactjs-popup";

const Main = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const user = useSelector((state) => state.auth.me);
  const userId = user.id;
  const texts = useSelector((state) => state.texts);
  const [showNewMat, setShowNewMat] = useState(false);

  const closeNewMatPopup = () => {
    setShowNewMat(false);
  };

  useEffect(() => {
    if (isLoggedIn && user) {
      dispatch(fetchTexts({ userId }));
    }
  }, [dispatch, user]);

  return (
    <>
      {texts.length > 0 ? (
        <div id="text-container">
          {texts.map((text, index) => (
            <div id="text" key={index}>
              <Link to={`/mat/${text.id}`}>
                <h3>{text.content}</h3>
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

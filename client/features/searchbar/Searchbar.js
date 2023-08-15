import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTexts,
  fetchTextsByContent,
  fetchTextsByTag,
} from "../main/mainSlice";
import NewMat from "../newMat/Newmat";
import Popup from "reactjs-popup";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const user = useSelector((state) => state.auth.me);
  const userId = user.id;
  const inputRef = useRef(null);
  const [showNewMat, setShowNewMat] = useState(false);

  const handleSearch = () => {
    const [command, value] = searchInput.split(":").map((str) => str.trim());

    if (command.toLowerCase() === "filter") {
      dispatch(fetchTextsByTag({ userId: userId, tagName: value }));
    } else if (command.toLowerCase() === "search") {
      dispatch(fetchTextsByContent({ userId: userId, searchTerm: value }));
    } else if (command.toLowerCase() === "home") {
      dispatch(fetchTexts({ userId }));
    } else if (command.toLowerCase() === "new") {
      setShowNewMat(true);
    }

    setSearchInput("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleGlobalKeyDown = (event) => {
    if (event.key === "/" && document.activeElement !== inputRef.current) {
      event.preventDefault();
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => {
      document.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, []);

  return (
    <>
      <div id="search-bar">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter search command..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <Popup
        className="add-popup"
        open={showNewMat}
        onClose={() => setShowNewMat(false)}
        modal
      >
        <NewMat />
      </Popup>
    </>
  );
};

export default SearchBar;

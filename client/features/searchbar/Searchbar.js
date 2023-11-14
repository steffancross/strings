import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  fetchTexts,
  fetchTextsByContent,
  fetchTextsByTag,
} from "../main/mainSlice";
import Navbar from "../navbar/Navbar";
import {
  setShouldFetch,
  setShowNewMat,
  setShowOverlay,
} from "../utils/flagSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchInput, setSearchInput] = useState("");
  const user = useSelector((state) => state.auth.me);
  const userId = user.id;
  const inputRef = useRef(null);
  const overlayOpen = useSelector((state) => state.flags.showOverlay);
  const [commandNotRecog, setCommandNotRecog] = useState(false);

  const handleSearch = () => {
    const [command, value] = searchInput
      .split(":")
      .map((str) => str.trim().toLowerCase());

    const atHome = location.pathname === "/";
    const notAtHome = () => {
      if (!atHome) {
        dispatch(setShouldFetch(false));
        navigate("/");
      }
    };

    switch (command) {
      case "filter":
        notAtHome();
        dispatch(fetchTextsByTag({ userId: userId, tagName: value }));
        break;
      case "search":
        notAtHome();
        dispatch(fetchTextsByContent({ userId: userId, searchTerm: value }));
        break;
      case "new":
        dispatch(setShowOverlay(true));
        dispatch(setShowNewMat(true));
        break;
      case "home":
        if (!atHome) {
          dispatch(setShouldFetch(true));
          navigate("/");
        } else {
          dispatch(fetchTexts({ userId: userId }));
        }
        break;
      case "tags":
        navigate("/tags");
        break;
      case "guide":
        navigate("/guide");
        break;
      default:
        setCommandNotRecog(true);
        setTimeout(() => {
          setCommandNotRecog(false);
        }, 1200);
    }

    setSearchInput("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleGlobalKeyDown = (event) => {
    console.log("+++", overlayOpen);
    if (
      event.key === "/" &&
      document.activeElement !== inputRef.current &&
      !overlayOpen
    ) {
      event.preventDefault();
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => {
      document.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, [handleGlobalKeyDown]);

  return (
    <>
      <div className="top-bar">
        <div></div>
        <div className="search-bar">
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter search command..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <Navbar />
      </div>
      {commandNotRecog && <div id="cmd-not-rcg">Unknown Command</div>}
    </>
  );
};

export default SearchBar;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { me } from "./store";
import AppRoutes from "./AppRoutes";
import SearchBar from "../features/searchbar/Searchbar";
import NewMat from "../features/newMat/Newmat";
import Overlay from "../features/overlay/Overlay";
import SingleMat from "../features/singlemat/Singlemat";
import SingleTag from "../features/singletag/Singletag";

const App = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const showOverlay = useSelector((state) => state.flags.showOverlay);
  const showSingleMat = useSelector((state) => state.flags.showSingleMat);
  const showSingleTag = useSelector((state) => state.flags.showSingleTag);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <>
      {isLoggedIn && <SearchBar />}
      {isLoggedIn && <NewMat />}
      {isLoggedIn && showSingleMat && <SingleMat />}
      {isLoggedIn && showSingleTag && <SingleTag />}
      {isLoggedIn && showOverlay && <Overlay />}
      <AppRoutes />
    </>
  );
};

export default App;

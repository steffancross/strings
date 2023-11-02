import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { me } from "./store";
import AppRoutes from "./AppRoutes";
import SearchBar from "../features/searchbar/Searchbar";
import NewMat from "../features/newMat/Newmat";
import Overlay from "../features/overlay/Overlay";
import SingleMat from "../features/singlemat/Singlemat";

const App = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const showOverlay = useSelector((state) => state.flags.showOverlay);
  const showSingleMat = useSelector((state) => state.flags.showSingleMat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <>
      {isLoggedIn && <SearchBar />}
      {isLoggedIn && <NewMat />}
      {isLoggedIn && showSingleMat && <SingleMat />}
      {isLoggedIn && showOverlay && <Overlay />}
      <AppRoutes />
    </>
  );
};

export default App;

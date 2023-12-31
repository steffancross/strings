import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { me } from "./store";
import AppRoutes from "./AppRoutes";
import SearchBar from "../features/searchbar/Searchbar";
import NewMat from "../features/newmat/NewMat";
import Overlay from "../features/overlay/Overlay";
import SingleMat from "../features/singlemat/Singlemat";
import SingleTag from "../features/singletag/Singletag";
import Styling from "../features/styling/Styling";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const showOverlay = useSelector((state) => state.flags.showOverlay);
  const showSingleMat = useSelector((state) => state.flags.showSingleMat);
  const showSingleTag = useSelector((state) => state.flags.showSingleTag);
  const showNewMat = useSelector((state) => state.flags.showNewMat);
  const showStyling = useSelector((state) => state.flags.showStyling);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <>
      {isLoggedIn && <SearchBar />}
      <AnimatePresence>
        {isLoggedIn && showSingleMat && <SingleMat key={1} />}
        {isLoggedIn && showSingleTag && <SingleTag key={2} />}
        {isLoggedIn && showNewMat && <NewMat key={3} />}
        {isLoggedIn && showOverlay && <Overlay key={4} />}
        {isLoggedIn && showStyling && <Styling key={5} />}
      </AnimatePresence>
      <AppRoutes />
    </>
  );
};

export default App;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { me } from "./store";
import AppRoutes from "./AppRoutes";
import SearchBar from "../features/searchbar/Searchbar";
import NewMat from "../features/newMat/Newmat";

const App = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <>
      {isLoggedIn && <SearchBar />}
      {isLoggedIn && <NewMat />}
      <AppRoutes />
    </>
  );
};

export default App;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { me } from "./store";
import AppRoutes from "./AppRoutes";
import SearchBar from "../features/searchbar/Searchbar";

const App = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <>
      {isLoggedIn && <SearchBar />}
      <AppRoutes />
    </>
  );
};

export default App;

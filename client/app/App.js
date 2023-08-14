import React from "react";

import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";
import Main from "../features/main/Main";
import SearchBar from "../features/searchbar/Searchbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <SearchBar />
      <Main />
    </div>
  );
};

export default App;

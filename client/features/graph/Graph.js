import React from "react";
import * as d3 from "d3";

const Graph = () => {
  const nodes = [
    { id: "tim" },
    { id: "jon" },
    { id: "bil" },
    { id: "bib" },
    { id: "giv" },
  ];

  const links = [
    { source: "tim", target: "jon" },
    { source: "jon", target: "bil" },
    { source: "bib", target: "giv" },
  ];

  return (
    <>
      <div>About</div>
    </>
  );
};

export default Graph;

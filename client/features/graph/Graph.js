import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Graph = () => {
  const svgRef = useRef(null);
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

  useEffect(() => {
    // Create the SVG container
    const svg = d3.select(svgRef.current);

    // Create a D3 force simulation
    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(100)
      )
      .force("charge", d3.forceManyBody().strength(-200))
      .force(
        "center",
        d3.forceCenter(window.innerWidth / 2, window.innerHeight / 2)
      );

    // Draw links
    const link = svg
      .selectAll(".link")
      .data(links)
      .enter()
      .append("line")
      .attr("class", "link");

    // Draw nodes
    const node = svg
      .selectAll(".node")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("class", "node")
      .attr("r", 8);

    // Update node and link positions on each tick of the simulation
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
    });

    return () => {
      // Clean up simulation on component unmount
      simulation.stop();
    };
  }, [nodes, links]);

  return (
    <>
      <svg ref={svgRef}></svg>;
    </>
  );
};

export default Graph;

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Graph = () => {
  const svgRef = useRef(null);
  const width = window.innerWidth;
  const height = window.innerWidth;

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
      .force("charge", d3.forceManyBody().strength(-20))
      .force(
        "center",
        d3.forceCenter(window.innerWidth / 2, window.innerHeight / 2)
      );

    // Draw links
    const link = svg
      .attr("stroke", "#000")
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
      .attr("r", 12)
      .attr("fill", "#fff");

    node.call(
      d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    );

    // Update node and link positions on each tick of the simulation
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
    });

    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => {
      // Clean up simulation on component unmount
      simulation.stop();
    };
  }, [nodes, links]);

  return (
    <>
      <svg ref={svgRef} width={width} height={height}></svg>
    </>
  );
};

export default Graph;

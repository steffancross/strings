import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as d3 from "d3";
import { fetchTexts } from "../main/mainSlice";
import { graphParser } from "../utils/HelperFunctions";

const Graph = () => {
  const svgRef = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.me);
  const userId = user.id;
  const dataToParse = useSelector((state) => state.mats);
  const [nodes, setNodes] = useState([]);
  const [links, setLinks] = useState([]);
  const width = window.innerWidth;
  const height = window.innerHeight;

  useEffect(() => {
    dispatch(fetchTexts({ userId }));
  }, [dispatch, userId]);

  useEffect(() => {
    const { nodes, links } = graphParser(dataToParse);
    setNodes(nodes);
    setLinks(links);
  }, [dataToParse]);

  useEffect(() => {
    // only simulate when that data is here
    if (nodes.length === 0 || links.length === 0) return;

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
      .force("charge", d3.forceManyBody().strength(-60))
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
      .append("g")
      .attr("class", "node")
      .call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

    node
      .append("circle")
      .attr("r", 20)
      .attr("fill", "#fff")
      .attr("color", "#000");

    node
      .append("text")
      .text(function (d) {
        return d.id;
      })
      .style("font-size", "12px")
      .style("color", "#000")
      .attr("text-anchor", "middle")
      .attr("y", 2)
      .attr("class", "text");

    // Update node and link positions on each tick of the simulation
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("transform", (d) => `translate(${d.x},${d.y})`);
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

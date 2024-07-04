import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as d3 from "d3";
import { fetchTexts } from "../main/mainSlice";
import { graphParser } from "../utils/graphParser";
import {
  setShowOverlay,
  setShowSingleMat,
  setShowSingleTag,
  setCurrentId,
} from "../utils/flagSlice";
import "../../styles/graph.scss";

const Graph = () => {
  const svgRef = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.me);
  const userId = user.id;
  const dataToParse = useSelector((state) => state.mats);
  const [nodes, setNodes] = useState([]);
  const [links, setLinks] = useState([]);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight - 80,
  });

  const singleMatPopup = (id) => {
    dispatch(setCurrentId(id));
    dispatch(setShowOverlay(true));
    dispatch(setShowSingleMat(true));
  };

  const singleTagPopup = (id) => {
    dispatch(setCurrentId(id));
    dispatch(setShowOverlay(true));
    dispatch(setShowSingleTag(true));
  };

  useEffect(() => {
    if (dataToParse.length === 0) {
      dispatch(fetchTexts({ userId }));
    }
  }, [dispatch, userId, dataToParse]);

  useEffect(() => {
    const { nodes, links } = graphParser(dataToParse);
    setNodes(nodes);
    setLinks(links);
  }, [dataToParse]);

  // Draw graph
  useEffect(() => {
    if (nodes.length === 0 || links.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous contents, if any

    // Zoom behavior
    const zoom = d3
      .zoom()
      .scaleExtent([0.1, 4]) // Set scale extent
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);
    const g = svg.append("g");

    // Create a D3 force simulation
    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.linkId)
          .distance(110)
      )
      .force("charge", d3.forceManyBody().strength(-60))
      .force(
        "center",
        d3.forceCenter(dimensions.width / 2, dimensions.height / 2)
      );

    // Draw links
    const link = g
      .selectAll(".link")
      .data(links)
      .enter()
      .append("line")
      .attr("class", "link");

    // Draw nodes
    const node = g
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
      )
      .on("click", (event, d) => {
        if (d.type === "tag") {
          singleTagPopup(d.id);
        } else {
          singleMatPopup(d.id);
        }
      });

    node
      .append("circle")
      .attr("r", (d) => (d.type === "tag" ? 15 : 7)) // Different sizes for tags and content nodes
      .attr("class", (d) => (d.type === "tag" ? "tag-node" : "content-node"));

    node
      .append("text")
      .text((d) => (d.type === "tag" ? d.name : d.content))
      .style("font-size", "14px")
      .attr("text-anchor", "middle")
      .attr("y", -17)
      .attr("class", (d) => (d.type === "tag" ? "tag-text" : "content-text"));

    // Update node and link positions
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("transform", (d) => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.05).restart();
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
  }, [nodes, links, dimensions.width, dimensions.height]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight - 80,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
      ></svg>
    </>
  );
};

export default Graph;

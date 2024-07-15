import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/guide.scss";

const Guide = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const next = () => {
    setCurrIndex((currIndex) => currIndex + 1);
  };

  const prev = () => {
    setCurrIndex((currIndex) => currIndex - 1);
  };

  return (
    <>
      <motion.div
        className="guide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.0, delay: 0.5 }}
      >
        <div className="guide-item">
          <h1 className="guide-title">Search Bar</h1>
          <p>
            The search bar at the top of the window is the main way to navigate
            the site. Besides when a popup is open, pressing <em>'/'</em> will
            focus the search bar and allow you to type commands.
          </p>
          <h1 className="guide-title">Navigation</h1>
          <p>
            With navigation commands, just type location you want into the
            search bar at the top and you'll be taken to the corresponding page.
          </p>
          <div className="guide-command">
            <em>home</em>
            <p>&nbsp;goes to home</p>
          </div>
          <div className="guide-command">
            <em>guide</em>
            <p>&nbsp;goes to the guide</p>
          </div>
          <div className="guide-command">
            <em>graph</em>
            <p>&nbsp;goes to the graph</p>
          </div>
          <div className="guide-command">
            <em>tags</em>
            <p>&nbsp;goes to all tags</p>
          </div>
          <div className="guide-command">
            <em>about</em>
            <p>&nbsp;goes to about</p>
          </div>
        </div>
        <div className="guide-item">
          <h1 className="guide-title">Mat</h1>
          <p>
            With the 'search' and 'filter' commands, there is a bit of syntax.
            The base command, followed by a <em>':'</em> and then your search
            criteria.
          </p>
          <div className="guide-command">
            <em>new</em>
            <p>&nbsp;opens the menu to create a new mat</p>
          </div>
          <div className="guide-command">
            <em>search</em>
            <p>
              &nbsp;this will search all your mats and return the ones that
              contain your search query at any location
            </p>
          </div>
          <div className="guide-example">
            <small>example</small>
            <em>search: and</em>
            <p>
              This would return all mats that contain 'and' whether it's a word
              on its own or part of a word such as 'brand'
            </p>
          </div>
          <div className="guide-command">
            <em>filter</em>
            <p>
              &nbsp;this functions like search but with tags and will return all
              mats associated with the input tag
            </p>
          </div>
          <div className="guide-example">
            <small>example</small>
            <em>filter: hope</em>
            <p>this will return all mats that have the tag 'hope'</p>
          </div>
        </div>
        <div className="guide-item">
          <h1 className="guide-title">Tags</h1>
          <p>
            When adding or editing a mat in the 'tags' input field, once again,
            there is syntax. If adding or assigning more than one tag, separate
            them by commas.
          </p>
          <div className="guide-example">
            <em>hope, cool</em>
            <p>will associate the tags 'hope' and 'cool' to the mat</p>
          </div>
          <div className="guide-example">
            <em>hope cool</em>
            <p>will associate the tag 'hope cool' to the mat</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Guide;

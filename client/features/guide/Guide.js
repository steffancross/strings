import React from "react";
import { motion } from "framer-motion";
import "../../styles/guide.scss";

const Guide = () => {
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
          <h1 className="guide-title">Command Bar</h1>
          <p>
            The command bar at the top of the window is the main way to interact
            with the site. From it, both navigation and functional commands can
            be executed. All commands can be executed from any page and will
            navigate automatically to the relevant one. Besides when a modal is
            open, pressing <em>'/'</em> will focus the search bar and allow you
            to type commands.
          </p>
        </div>
        <div className="guide-item">
          <h1 className="guide-title">Navigation</h1>
          <p>Navigation commands will take you to the corresponding page.</p>
          <div className="guide-command">
            <em>home</em>
            <p>&nbsp;to home</p>
          </div>
          <div className="guide-command">
            <em>guide</em>
            <p>&nbsp;to guide</p>
          </div>
          <div className="guide-command">
            <em>graph</em>
            <p>&nbsp;to graph</p>
          </div>
          <div className="guide-command">
            <em>tags</em>
            <p>&nbsp;to all tags</p>
          </div>
          <div className="guide-command">
            <em>about</em>
            <p>&nbsp; to about</p>
          </div>
          <div className="guide-command">
            <em>style</em>
            <p>&nbsp; to style</p>
          </div>
        </div>
        <div className="guide-item">
          <h1 className="guide-title">Mat</h1>
          <p>
            With the <em>search</em> and <em>filter</em> commands, there is a
            bit of syntax. The base command, followed by a <em>':'</em> and then
            your search criteria.
          </p>
          <div className="guide-command">
            <em>new</em>
            <p>&nbsp;opens the modal to create a new mat</p>
          </div>
          <div className="guide-command">
            <em>search</em>
            <p>
              &nbsp;will search all your mats and return the ones that contain
              your search query at any location
            </p>
          </div>
          <div className="guide-example">
            <small>example</small>
            <em>search: and</em>
            <p>
              This would return all mats that contain <em>and</em> whether it's
              a word on its own, or part of a word such as 'brand'
            </p>
          </div>
          <div className="guide-command">
            <em>filter</em>
            <p>
              &nbsp;functions like search but with tags and will return all mats
              associated with the input tag
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
            When adding or editing a mat in the 'tags' input field, there is
            syntax. If adding or assigning more than one tag, separate them by
            commas.
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

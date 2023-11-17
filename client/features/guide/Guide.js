import React from "react";

const Guide = () => {
  return (
    <>
      <div className="guide">
        <h1 className="guide-title">Search Bar</h1>
        <p>
          The search bar at the top of the window is the main way to navigate
          the site. Besides when a popup is open, pressing <em>"/"</em> will
          focus the search bar and allow you to type commands.
        </p>
        <h1 className="guide-title">Commands</h1>
        <p>There are two types of commands: navigation and mat-related.</p>
        <h2 className="indent-title">Navigation</h2>
        <div className="guide-command">
          <em>home</em>
          <p>&nbsp;goes to home</p>
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
        <h2 className="indent-title">Mat</h2>
        <div className="guide-command">
          <em>new</em>
          <p>&nbsp;opens the menu to create a new mat</p>
        </div>
        <p>
          With these following commands, there is a bit of syntax to take into
          account. After typing in the base command, add <em>":"</em> after and
          then your search criteria.
        </p>
        <div className="guide-command">
          <em>search:</em>
          <p>
            &nbsp;this will search all your mats and return the ones that
            contain your search query at any location
          </p>
        </div>
        <div className="guide-example">
          <small>example</small>
          <em>search: and</em>
          <p>
            This would return all mats that contain 'and' whether it's a word on
            its own or part of a word such as 'brand'
          </p>
        </div>
        <div className="guide-command">
          <em>filter:</em>
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
        <h1 className="guide-title">Tags</h1>
        <p>
          When adding or editing a mat in the 'tags' input field, there is a
          syntax to know. If adding or assigning more than one tag, separate
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
    </>
  );
};

export default Guide;

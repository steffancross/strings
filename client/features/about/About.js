import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="about">
        <p>
          Ad.hoc is a hybrid interface application, used through a mixture of
          mouse and typed commands to store words and phrases of importance.
        </p>
        <p>
          Mats are the core of this application. Whenever you store a word or a
          phrase, it becomes a mat. Mats are categorized with tags and can have
          one, or many, or none (although that is not recommended). These tags
          are the main way mats are thought about and retrieved.
        </p>
        <p>
          There is no hierarchy in the storage of tags, unlike conventional file
          storage systems. All tags are equal and there is no nesting of them.
        </p>
        <p>
          Tags can be both a single word or phrase. Whatever best represents the
          unifying concept among a group of mats.
        </p>
        <p>
          If this is your first visit, it is highly recommended that you visit
          the&nbsp;
          <a onClick={() => navigate("/guide")}>guide</a>
          &nbsp;first to learn about how to use the site.
        </p>
      </div>
    </>
  );
};

export default About;

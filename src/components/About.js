import React, { useState } from "react";
import Giphy from "../images/giphy.webp";

import HTML from "../images/html.svg";
import JS from "../images/js.svg";
import Python from "../images/python.svg";
import Java from "../images/java.svg";
import ReactIcon from "../images/react.svg";
import ReactNative from "../images/reactnative.svg";
import Redux from "../images/redux.svg";
import Bootstrap from "../images/bootstrap.svg";
import TailwindCSS from "../images/tailwindcss.svg";
import NodeJS from "../images/nodejs.svg";
import ExpressJS from "../images/expressjs.svg";
import FastAPI from "../images/fastapi.svg";
import MSSQLServer from "../images/sqlserver.svg";
import Oracle from "../images/oracle.svg";
import MongoDB from "../images/mongodb.svg";

import Git from "../images/git.svg";
import GitHub from "../images/github.svg";
import VSCode from "../images/vscode.svg";
import VisualStudio from "../images/visualstudio.svg";

const quotes = [
  {
    quote: "Birds of the same feather flock together.",
    from: "Buddha",
  },
  {
    quote: "Controlling complexity is the essence of computer programming.",
    from: "Brian Kernighan",
  },

  {
    quote: "We are what we believe we are.",
    from: "C.S. Lewis",
  },
  {
    quote: "Look at usual things with unusual eyes.",
    from: "Vico Magistetti",
  },
];

const skills = [
  {
    name: "HTML & CSS",
    icon: HTML,
  },
  {
    name: "Javascript",
    icon: JS,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "React Native",
    icon: ReactNative,
  },
  {
    name: "Redux",
    icon: Redux,
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: TailwindCSS,
  },
  {
    name: "NodeJS",
    icon: NodeJS,
  },
  {
    name: "ExpressJS",
    icon: ExpressJS,
  },
  {
    name: "FastAPI",
    icon: FastAPI,
  },
  {
    name: "MS SQL Server",
    icon: MSSQLServer,
  },
  {
    name: "Oracle",
    icon: Oracle,
  },
  {
    name: "MongoDB",
    icon: MongoDB,
  },
];

const tools = [
  {
    name: "Git",
    icon: Git,
  },
  {
    name: "GitHub",
    icon: GitHub,
  },
  {
    name: "VS Code",
    icon: VSCode,
  },
  {
    name: "Visual Studio",
    icon: VisualStudio,
  },
];

const About = () => {
  const [quoteIndex, setQuoteIndex] = useState(
    Math.floor(Math.random() * quotes.length)
  );

  return (
    <div id="about" className="about">
      <h1>About</h1>
      <div className="container">
        <div className="row about_contents">
          <div className="col col-6">
            <p className="about_content">
              I'm a junior student currently pursuing my degree in Information
              Systems at University of Information Technology - VNUHCM.
              <br />
              I'm aiming to become a proficient software developer, leveraging
              modern technologies to build efficient, scalable, and
              user-friendly applications.
              <br /> My educational journey and projects have equipped me with a
              strong foundation in both theoretical knowledge and practical
              skills, preparing me for a career in the tech industry.
            </p>

            <strong className="about_content_quote">
              "{quotes[quoteIndex].quote}"<br />
              <span>{quotes[quoteIndex].from}</span>
            </strong>
          </div>
          <div className="col col-6">
            <img src={Giphy} alt="Animated Images" />
          </div>
        </div>

        <h1 className="mb-0">My Skills</h1>
        <div className="row about_skills">
          {skills.map((skill, index) => (
            <div className="col" key={index}>
              <div className="about_skills_item">
                <img src={skill.icon} alt={skill.name} />

                <p>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>

        <h1 className="mb-0">Tools</h1>
        <div className="row about_skills">
          {tools.map((skill, index) => (
            <div className="col" key={index}>
              <div className="about_skills_item">
                <img src={skill.icon} alt={skill.name} />

                <p>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

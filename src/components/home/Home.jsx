import React from "react";
import "./Home.css";
import { ScrollDown } from "./ScrollDown";

export const Home = ({ t }) => {
  const quoteLines = t("homeSection.quote").split('\n');

  return (
    <section className="home_container" id="home">
      <div className="intro">
        <h1 className="home_name">{t("homeSection.name")}</h1>
        <span className="home_education">{t("homeSection.education")}</span>

        <div className="home_social-link">
          <a href="https://github.com/David-salem" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>

          <a href="https://www.linkedin.com/in/david-salem-6a5364160/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a href="https://www.instagram.com/david.salem?igsh=MWN3MWVxdmQ5MjN3aQ==" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        <div className="quote">
          {quoteLines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
      <div className="home"></div>
      <ScrollDown 
        t={t}
      />
    </section>
  );
};

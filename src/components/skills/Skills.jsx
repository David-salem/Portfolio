import React from "react";
import "./Skills.css";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGitAlt, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiMysql } from "react-icons/si";

export const Skills = ({ t }) => {
const quoteLines = t("skillsSection.description").split('\n');

  return (
    <section className="about container section" id='skills'>
      <h2 className="section_title">{t("skillsSection.title")}</h2>

      <div className="about_container grid">
        <div className="about_data grid">
          <div className="about_info">
          <div className="icon_skills">
                <label title="HTML">
                    <FaHtml5 />
                </label>
                <label title="CSS">
                    <FaCss3Alt />
                </label>
                <label title="Javascript">
                    <IoLogoJavascript />
                </label>
                <label title="Node.js">
                    <LiaNode />
                </label>
                <label title="React">
                    <FaReact />
                </label>
                <label title="MongoDB">
                    <SiMongodb />
                </label>
                <label title="Mysql">
                    <SiMysql />
                </label>
                <label title="Firebase">
                    <IoLogoFirebase />
                </label>
                <label title="GitHub">
                    <FaGitAlt />
                </label>
          </div>
            <p className="about_description">
                {quoteLines.map((line, index) => (
                <p key={index}>{line}</p>
                ))}
            </p>
          </div>

          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">{t("skillsSection.development.name")}</h3>
                <span className="skills_number">90%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage development"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">{t("skillsSection.ui_design.name")}</h3>
                <span className="skills_number">80%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage ui_design"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">{t("skillsSection.photography.name")}</h3>
                <span className="skills_number">70%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

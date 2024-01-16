import React from "react";
import "./Skills.css";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGitAlt, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiMysql } from "react-icons/si";

export const Skills = () => {
    return (
        <section className="about container section" id='skills'>
            <h2 className="section_title">Skills</h2>

            <div className="about_container grid">
                <div className="about_data grid">
                <div className="about_info">
                        <FaHtml5 />
                        <FaCss3Alt />
                        <IoLogoJavascript />
                        <LiaNode />
                        <FaReact />
                        <SiMongodb />
                        <SiMysql />
                        <IoLogoFirebase />
                        <FaGitAlt />
                        <p className="about_description">

                        <br />
                        <br />

                        Two years ago, I made the decision to expand my professional profile by gaining knowledge in software development, with the aim of implementing solutions more efficiently.

                        <br />
                        <br />

                        Currently, I am about to complete my training as a Certified Tech Developer at Digital House. Driven by my deep interest in the latest technological trends, I decided to dedicate myself entirely to software development as an independent professional, founding OsoñoDevs.

                        <br />
                        <br />

                        This company reflects my passion for growing in the software development industry and has the mission of driving business transformation through technology. I am committed to continuing to learn and grow in this field, with the goal of contributing to the development of technological solutions.

                        <br />
                        <br />
                        
                        I firmly believe that technology is the key to fostering innovation and efficiency in any organization. If you are looking for professionalism and dedication, count on me!
                        </p>
                    </div>

                    <div className="about_skills grid">
                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Development</h3>
                                <span className="skills_number">90%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage development"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">UI/UX design</h3>
                                <span className="skills_number">60%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage ui_design"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Photography</h3>
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
    )
}
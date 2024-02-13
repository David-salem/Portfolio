import React from "react";
import "./Resume.css";
import Data from "./Data";
import CardEducation from "./CardEducation";
import CardExperience from "./CardExperience.jsx";

export const Resume = ({ t }) => {
    return (
        <section className="resume container section" id="resume">
            <h2 className="section_title">{t("resumeSection.title")}</h2>

            <div className="resume_container grid">
                <div className="timeline grid">
                    <h3 className="resume_subtitle">{t("resumeSection.educationSubtitle")}</h3>
                    {Data.map((val, id) => {
                        if (val.category === "education") {
                            return (
                                <CardEducation
                                    key={id}
                                    icon={val.icon}
                                    title={val.title}
                                    year={val.year}
                                    desc={val.desc}
                                    info={val.info}
                                />
                            );
                        }
                    })}
                </div>

                <div className="timeline grid">
                    <h3 className="resume_subtitle">{t("resumeSection.experienceSubtitle")}</h3>
                    {Data.map((val, index) => {
                        if (val.category === "experience") {
                            return (
                                <CardExperience
                                    key={index}
                                    icon={val.icon}
                                    company={val.desc}
                                    title={t(`${val.title}`)}
                                    year={t(`${val.year}`)}
                                    desc={val.desc}
                                    info={val.info}
                                    job={t(`${val.job}`)}
                                    achievements={t(`${val.achievements}`)}
                                    skills={t(`${val.skills}`)}
                                    id={val.id}
                                />
                            );
                        }
                    })}
                </div>
            </div>
        </section>
    );
};

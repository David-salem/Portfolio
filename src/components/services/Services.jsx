import React from "react";
import "./Services.css";
import Image1 from "../../assests/service-1.svg";
import Image2 from "../../assests/service-2.svg";
import Image3 from "../../assests/service-3.svg";

const data = [
    {
        id: 1,
        image: Image1,
        title: "services.uiUxDesign.title",
        description: "services.uiUxDesign.description",
    },
    {
        id: 2,
        image: Image2,
        title: "services.webDevelopment.title",
        description: "services.webDevelopment.description",
    },
    {
        id: 3,
        image: Image3,
        title: "services.photography.title",
        description: "services.photography.description",
    },
];

export const Services = ({ t }) => {
    return (
        <section className="services container section" id="services">
            <h2 className="section_title">{t("servicesSection.title")}</h2>

            <div className="services_container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services_card" key={id}>
                            <img src={image} alt="" className="services_img" />

                            <h3 className="services_title">{t(title)}</h3>
                            <p className="services_description">{t(description)}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
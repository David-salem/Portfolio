import React from "react";
import "./Services.css";
import Image1 from "../../assests/service-1.svg";
import Image2 from "../../assests/service-2.svg";
import Image3 from "../../assests/service-3.svg";

const data = [
    {
      id: 1,
      image: Image1,
      title: "UI/UX design",
      description:
        "I design user-friendly digital interfaces with a focus on enhancing user experiences through visually appealing and intuitive designs.",
    },
    {
      id: 2,
      image: Image2,
      title: "Web Development",
      description:
        "I specialize in web development. My role involves coding, programming, and ensuring seamless functionality. I focus on creating responsive and user-friendly web experiences, incorporating both front-end and back-end technologies",
    },
    {
      id: 3,
      image: Image3,
      title: "Photography",
      description:
        "I capture moments through photography and develop user-friendly websites for seamless online experiences.",
    },
  ];

export const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section_title">Services</h2>
            
            <div className="services_container grid">
                {data.map(({ id, image, title, description }) => {
                    return(
                        <div className="services_card" key={id}>
                            <img src={image} alt="" className="services_img"/>

                            <h3 className="services_title">{title}</h3>
                            <p className="services_description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

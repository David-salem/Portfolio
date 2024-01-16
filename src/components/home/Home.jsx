import React from "react";
import "./Home.css";
import { ScrollDown } from "./ScrollDown";

export const Home = () => {
    return (
        <section className="home_container" id="home">
            <div className="intro">
                <h1 className="home_name">David Salem</h1>
                <span className="home_education">Fullstack developer</span>

                <div className="home_social-link">
                    <a href="https://github.com/David-salem" target="_blank">
                        <i className="fa-brands fa-github"></i>            
                    </a>

                    <a href="https://www.linkedin.com/in/david-salem-6a5364160/" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>            
                    </a>

                    <a href="https://www.instagram.com/david.salem?igsh=MWN3MWVxdmQ5MjN3aQ==" target="_blank">
                        <i className="fa-brands fa-instagram"></i>            
                    </a>
                </div>

                <span className="quote">30. Argentinian. <br />  Constantly seeking new challenges. <br /> I find fulfillment in collaborating with individuals and contributing to transformative teams. <br /> In my free time, I enjoy nature, surfing, traveling and good food.</span>

                {/* <a href="#contact" className="btn">Hire me</a> */}
            </div>
            <div className="home"></div>
                <ScrollDown />
        </section>
    )
}
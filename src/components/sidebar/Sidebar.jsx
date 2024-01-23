import React, { useState, useEffect, useRef } from "react";
import "./Sidebar.css";
import Logo from "../../assests/logo.svg";
import { IoBookOutline } from "react-icons/io5";

export const Sidebar = ({ t }) => {
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setToggle(false);
      }
    };
  
    const handleScroll = () => {
      const sections = ["home", "about", "services", "resume", "skills", "portfolio", "contact"];
  
      let activeSection = null;
  
      for (const section of sections) {
        const element = document.getElementById(section);
  
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5;
  
          if (isVisible) {
            activeSection = section;
            break;
          }
        }
      }
  
      setActiveLink(activeSection);
    };
  
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const handleToggleClick = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    const targetElement = document.getElementById(link);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <aside
        ref={sidebarRef}
        className={toggle ? "aside show-menu" : "aside"}
      >
        <a href="#home" className="logo">
          <img src={Logo} alt="" />
        </a>

        <nav className="nav">
          <div className="nav_menu">
            <ul className="nav_list">
                <li className="nav_item">
                    <a
                      href="#home"
                      className={`nav_link ${activeLink === "home" ? "active" : ""}`}
                      onClick={() => handleLinkClick("home")}
                    >                        
                      <i className="icon-home"></i>
                        <span className="nav_text">{t("aside.home")}</span>
                    </a>
                </li>                 
                <li className="nav_item">
                    <a
                      href="#about"
                      className={`nav_link ${activeLink === "about" ? "active" : ""}`}
                      onClick={() => handleLinkClick("about")}
                    >    
                        <i className="icon-user-following"></i>
                        <span className="nav_text">{t("aside.me")}</span>
                    </a>
                </li>    

                <li className="nav_item">
                    <a
                      href="#services"
                      className={`nav_link ${activeLink === "services" ? "active" : ""}`}
                      onClick={() => handleLinkClick("services")}
                    >    
                        <i className="icon-briefcase"></i>
                        <span className="nav_text">{t("aside.services")}</span>
                    </a>
                </li>    

                <li className="nav_item">
                    <a
                      href="#resume"
                      className={`nav_link ${activeLink === "resume" ? "active" : ""}`}
                      onClick={() => handleLinkClick("resume")}
                    >    
                        <i className="icon-graduation"></i>
                        <span className="nav_text">{t("aside.experience")}</span>
                    </a>
                </li> 

                <li className="nav_item">
                    <a
                      href="#skills"
                      className={`nav_link ${activeLink === "skills" ? "active" : ""}`}
                      onClick={() => handleLinkClick("skills")}
                    >                            
                      <IoBookOutline />
                      <span className="nav_text">{t("aside.skills")}</span>
                    </a>
                </li>       

                <li className="nav_item">
                    <a
                      href="#portfolio"
                      className={`nav_link ${activeLink === "portfolio" ? "active" : ""}`}
                      onClick={() => handleLinkClick("portfolio")}
                    >  
                        <i className="icon-layers"></i>
                        <span className="nav_text">{t("aside.work")}</span>
                    </a>
                </li>    

                <li className="nav_item">
                    <a
                      href="#contact"
                      className={`nav_link ${activeLink === "contact" ? "active" : ""}`}
                      onClick={() => handleLinkClick("contact")}
                    >  
                        <i className="icon-bubble"></i>
                        <span className="nav_text">{t("aside.contact")}</span>
                    </a>
                </li>     
            </ul>
          </div>
        </nav>

        <div className="nav_footer">
          <span className="copyright">&copy; 2023 - 2024.</span>
        </div>
      </aside>

      <div
        className={toggle ? "nav_toggle nav_toggle-open" : "nav_toggle"}
        onClick={(e) => {
          e.stopPropagation();
          handleToggleClick();
        }}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
};
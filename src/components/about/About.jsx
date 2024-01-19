import React from "react";
import "./About.css";

export const About = ({ t }) => {
  const handleDownload = () => {
    const url = process.env.PUBLIC_URL + '/Resume.pdf';

    const link = document.createElement('a');
    link.href = url;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about container section" id='about'>
      <h2 className="section_title">{t('aboutSection.title')}</h2>

      <div className="about_container grid">
        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              {t('aboutSection.description.paragraph1')} <br /><br />
              {t('aboutSection.description.paragraph2')} <br /><br />
              {t('aboutSection.description.paragraph3')}
            </p>
            <button className="btn btn_resume" onClick={handleDownload}>
              {t('aboutSection.downloadCV')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
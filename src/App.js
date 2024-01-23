import React, { useState, useEffect } from 'react';
import "./App.css";
import { useTranslation } from 'react-i18next';
import { Sidebar, Home, Portfolio, Resume, Services, About, Contact, Skills } from './components/index';
import { Fade } from 'react-awesome-reveal';

const App = () => {
  const { t, i18n } = useTranslation();
  const initialLanguage = localStorage.getItem('selectedLanguage') || 'en';
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  useEffect(() => {
    localStorage.setItem('selectedLanguage', selectedLanguage);
  }, [selectedLanguage]);

  return (
    <>
      <Sidebar t={t} />
      <main className="main">
        <div className='btn_lang'>
        <div className='btn_lang'>
          <button className={selectedLanguage === 'en' ? 'selected' : ''} onClick={() => changeLanguage('en')}>ENG</button>
          <p>|</p>
          <button className={selectedLanguage === 'es' ? 'selected' : ''} onClick={() => changeLanguage('es')}>SPA</button>
        </div>
        </div>
        <Home t={t} />
        <Fade cascade damping={0.1}>
          <About t={t} />
          <Services t={t} />
          <Resume t={t} />
          <Skills t={t} />
          <Portfolio t={t} />
          <Contact t={t} />
        </Fade>
      </main>
    </>
  );
};

export default App;
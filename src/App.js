import React from "react";
import "./App.css";
import {Sidebar, Home, Portfolio, Resume, Services, About, Contact, Skills } from "./components/index";
import { Fade } from "react-awesome-reveal";

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
      <Home />
        <Fade cascade damping={0.1}>
          <About />
          <Services />
          <Resume />
          <Skills />
          <Portfolio />
          <Contact/>
        </Fade>
      </main>
    </>
  )
}

export default App
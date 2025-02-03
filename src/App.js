import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";
import ParticlesComponent from "./utils.js/particles";

function App() {
  const location = useLocation(); // ✅ Now works because it's inside HashRouter (in index.js)
  console.log(location);

  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Particles.js */}
      {renderParticleJsInHomePage && <ParticlesComponent />}

      {/* Main Page Content */}
      <div className="app_mainpage_content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

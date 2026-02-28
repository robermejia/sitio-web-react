import React, { useState, useEffect } from 'react';
import HomeSection from './components/Home/HomeSection';
import AboutSection from './components/About/AboutSection';
import ServicesSection from './components/Services/ServicesSection';
import PortfolioSection from './components/Portfolio/PortfolioSection';
import ContactSection from './components/Contact/ContactSection';
import StyleSwitcher from './components/StyleSwitcher/StyleSwitcher';
import bgMusic from './assets/audio/Daddy_del_Código.mp3';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [loading, setLoading] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleNav = () => {
    const newState = !isNavOpen;
    setIsNavOpen(newState);
    if (newState) {
      document.body.classList.add('hidden-scrolling');
    } else {
      document.body.classList.remove('hidden-scrolling');
    }
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsNavOpen(false);
    document.body.classList.remove('hidden-scrolling');
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`app-container ${loading ? 'overflow-hidden' : ''}`}>
      {/* PRELOADER */}
      {loading && (
        <div className="preloader">
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}

      {/* HEADER */}
      <header className="header">
        <div className="container">
          <div className="row justify-content-between">
            <div className="logo">
              <a href="/">
                <img 
                  id="logo-imagen" 
                  className={theme === 'dark' ? 'logotipo-light' : 'logotipo-dark'} 
                  src={theme === 'dark' ? '/img/logos/logo-light.png' : '/img/logos/logo-dark.png'} 
                  alt="LOGO" 
                />
              </a>
            </div>
            <div className="nav-desktop">
              <ul>
                {['inicio', 'acerca', 'servicios', 'portafolio', 'contacto'].map((section) => (
                  <li key={section}>
                    <a 
                      href={`#${section}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(section);
                      }} 
                      className={`link-item ${activeSection === section ? 'inner-shadow active' : 'outer-shadow hover-in-shadow'}`}
                    >
                      {section === 'acerca' ? 'sobre mí' : section}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`hamburger-btn outer-shadow hover-in-shadow ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}>
              <span></span>
            </div>
          </div>
        </div>
      </header>

      {/* NAVIGATION */}
      <nav className={`nav-menu ${isNavOpen ? 'open' : ''}`}>
        <div className="close-nav-menu outer-shadow hover-in-shadow" onClick={toggleNav}>&times;</div>
        <div className="nav-menu-inner">
          <ul>
            {['inicio', 'acerca', 'servicios', 'portafolio', 'contacto'].map((section) => (
              <li key={section}>
                <a 
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(section);
                  }} 
                  className={`link-item ${activeSection === section ? 'inner-shadow active' : 'outer-shadow hover-in-shadow'}`}
                >
                  {section === 'acerca' ? 'sobre mí' : section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="fade-out-effect" onClick={toggleNav}></div>

      {/* SECTIONS */}
      <main>
        {activeSection === 'inicio' && <HomeSection />}
        {activeSection === 'acerca' && <AboutSection />}
        {activeSection === 'servicios' && <ServicesSection />}
        {activeSection === 'portafolio' && <PortfolioSection />}
        {activeSection === 'contacto' && <ContactSection />}
      </main>

      {/* STYLE SWITCHER */}
      <StyleSwitcher onThemeChange={handleThemeChange} />

      {/* AUDIO */}
      <audio id="bg-music" loop>
        <source src={bgMusic} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default App;

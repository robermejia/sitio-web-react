import React, { useState, useEffect } from 'react';
import '../../assets/css/style-switcher.css';

const StyleSwitcher = ({ onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [currentSkin, setCurrentSkin] = useState(localStorage.getItem('color') || 'color-1');
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  useEffect(() => {
    // Apply initial theme
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    if (onThemeChange) onThemeChange(theme);
    
    // Apply initial skin
    const alternateStyles = document.querySelectorAll('.alternate-style');
    alternateStyles.forEach((style) => {
      if (currentSkin === style.getAttribute('title')) {
        style.removeAttribute('disabled');
      } else {
        style.setAttribute('disabled', 'true');
      }
    });

    // Check music state
    const audio = document.getElementById('bg-music');
    if (audio) {
      setIsMusicPlaying(!audio.paused);
    }
  }, [theme, currentSkin, onThemeChange]);

  const toggleSwitcher = () => setIsOpen(!isOpen);

  const setActiveStyle = (color) => {
    localStorage.setItem('color', color);
    setCurrentSkin(color);
    
    const alternateStyles = document.querySelectorAll('.alternate-style');
    alternateStyles.forEach((style) => {
      if (color === style.getAttribute('title')) {
        style.removeAttribute('disabled');
      } else {
        style.setAttribute('disabled', 'true');
      }
    });
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    
    if (onThemeChange) onThemeChange(newTheme);
  };

  const toggleMusic = () => {
    const audio = document.getElementById('bg-music');
    if (audio) {
      if (audio.paused) {
        audio.play().catch(e => console.log("Audio play failed:", e));
        setIsMusicPlaying(true);
      } else {
        audio.pause();
        setIsMusicPlaying(false);
      }
    }
  };

  // Close on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <div className={`style-switcher outer-shadow ${isOpen ? 'open' : ''}`}>
      <div 
        className="day-night s-icon outer-shadow hover-in-shadow" 
        onClick={toggleTheme}
        id="boton"
      >
        <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
      </div>
      
      <div 
        className="style-switcher-toggler s-icon outer-shadow hover-in-shadow"
        onClick={toggleSwitcher}
      >
        <i className="fas fa-cog fa-spin"></i>
      </div>

      <div 
        className="music-control s-icon outer-shadow hover-in-shadow" 
        id="music-toggle" 
        style={{ top: '110px' }}
        onClick={toggleMusic}
      >
        <i className={`fas ${isMusicPlaying ? 'fa-pause' : 'fa-play'}`}></i>
      </div>

      <h4>Colores del Tema</h4>
      <div className="colors">
        {['color-1', 'color-2', 'color-3', 'color-4', 'color-5'].map((color) => (
          <span 
            key={color}
            className={color} 
            onClick={() => setActiveStyle(color)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default StyleSwitcher;

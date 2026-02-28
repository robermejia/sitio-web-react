import React, { useState, useEffect } from 'react';
import Footer from '../Common/Footer';

const PortfolioSection = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = React.useRef(null);

  const portfolioItems = [
    {
      category: 'angular java',
      title: 'UTP Store',
      thumb: '/img/portfolio/thumb/project-16.png',
      screenshots: [
        '/img/portfolio/large/project-25/1.png',
        '/img/portfolio/large/project-25/2.png',
        '/img/portfolio/large/project-25/3.png',
        '/img/portfolio/large/project-25/4.png',
        '/img/portfolio/large/project-25/5.png',
        '/img/portfolio/large/project-25/6.png',
        '/img/portfolio/large/project-25/7.png',
        '/img/portfolio/large/project-25/8.png',
        '/img/portfolio/large/project-25/9.png',
        '/img/portfolio/large/project-25/10.png',
        '/img/portfolio/large/project-25/11.png',
        '/img/portfolio/large/project-25/12.png'
      ],
      description: 'Tienda virtual desarrollada como tarea para la universidad UTP.',
      date: '2026',
      client: 'UTP',
      tools: 'Java, Spring Boot, Render, Firebase, Angular',
      link: 'https://utptechnology-frontend.onrender.com'
    },
    {
      category: 'react',
      title: 'Mi Sitio Web - React Version',
      thumb: '/img/portfolio/thumb/project-15.png',
      screenshots: [
        '/img/portfolio/large/project-24/1.png',
        '/img/portfolio/large/project-24/2.png',
        '/img/portfolio/large/project-24/3.png',
        '/img/portfolio/large/project-24/4.png',
        '/img/portfolio/large/project-24/5.png',
        '/img/portfolio/large/project-24/6.png',
        '/img/portfolio/large/project-24/7.png',
        '/img/portfolio/large/project-24/8.png',
        '/img/portfolio/large/project-24/9.png'
      ],
      description: 'Sitio web del portafolio personal, con el mismo diseño premium que la versión original pero reconstruido totalmente en React para mejorar el rendimiento y la mantenibilidad.',
      date: '2026',
      client: 'Proyecto Personal',
      tools: 'React JS, Render',
      link: 'https://robermejia.com/'
    },
    {
      category: 'react',
      title: 'MenteSana - Psicología TCC',
      thumb: '/img/portfolio/thumb/project-14.png',
      screenshots: [
        '/img/portfolio/large/project-23/1.png',
        '/img/portfolio/large/project-23/2.png',
        '/img/portfolio/large/project-23/3.png'
      ],
      description: 'Proyecto de psicología de temas TCC (Terapia Cognitivo Conductual) personalizado, desarrollado con React, Render y Firebase.',
      date: '2026',
      client: 'Proyecto Personal',
      tools: 'React JS, Render, Firebase',
      link: 'https://mentesana-s9sn.onrender.com/'
    },
    {
      category: 'react',
      title: 'Manual de Programación - Portfolio',
      thumb: '/img/portfolio/thumb/project-13.png',
      screenshots: [
        '/img/portfolio/large/project-22/1.png',
        '/img/portfolio/large/project-22/2.png',
        '/img/portfolio/large/project-22/3.png',
        '/img/portfolio/large/project-22/4.png',
        '/img/portfolio/large/project-22/5.png',
        '/img/portfolio/large/project-22/6.png',
        '/img/portfolio/large/project-22/7.png',
        '/img/portfolio/large/project-22/8.png',
        '/img/portfolio/large/project-22/9.png',
        '/img/portfolio/large/project-22/10.png',
        '/img/portfolio/large/project-22/11.png',
        '/img/portfolio/large/project-22/12.png'
      ],
      description: 'Plataforma educativa interactiva que funciona como un manual de programación completo, organizado por categorías y temas para facilitar el aprendizaje autodidacta.',
      date: '2026',
      client: 'Proyecto Personal',
      tools: 'React JS, Javascript, CSS, Render',
      link: 'https://programming-manual.onrender.com/'
    },
    {
      category: 'react java',
      title: 'Luxe Threads - E-commerce',
      thumb: '/img/portfolio/thumb/project-12.png',
      screenshots: [
        '/img/portfolio/large/project-21/1.png',
        '/img/portfolio/large/project-21/2.png',
        '/img/portfolio/large/project-21/3.png',
        '/img/portfolio/large/project-21/4.png',
        '/img/portfolio/large/project-21/5.png',
        '/img/portfolio/large/project-21/6.png'
      ],
      description: 'Tienda virtual moderna con un diseño premium, integrando un backend robusto en Spring Boot y un frontend dinámico en React para una gestión de productos eficiente.',
      date: '2026',
      client: 'Proyecto Personal',
      tools: 'Spring Boot, React JS, CSS, Render',
      link: 'https://luxethreads-frontend.onrender.com/'
    },
    {
      category: 'angular',
      title: 'Proyecto Angular - Coderhouse',
      thumb: '/img/portfolio/thumb/project-11.png',
      screenshots: [
        '/img/portfolio/large/project-11/1.png',
        '/img/portfolio/large/project-11/2.png',
        '/img/portfolio/large/project-11/3.png',
        '/img/portfolio/large/project-11/4.png',
        '/img/portfolio/large/project-11/5.png',
        '/img/portfolio/large/project-11/6.png',
        '/img/portfolio/large/project-11/7.png'
      ],
      description: 'Este proyecto fue realizado con el framework Angular JS como trabajo final del curso de Angular en Coderhouse.',
      date: '2025',
      client: 'Coderhouse',
      tools: 'TypeScript, Angular, MockAPI',
      link: 'https://coderhouse-angular-73985.vercel.app/'
    },
    {
      category: 'react',
      title: 'Proyecto React - Coderhouse',
      thumb: '/img/portfolio/thumb/project-10.png',
      screenshots: [
        '/img/portfolio/large/project-10/1.png',
        '/img/portfolio/large/project-10/2.png',
        '/img/portfolio/large/project-10/3.png',
        '/img/portfolio/large/project-10/4.png',
        '/img/portfolio/large/project-10/5.png'
      ],
      description: 'Este proyecto fue realizado con el framework React JS como trabajo final del curso de React en Coderhouse.',
      date: '2025',
      client: 'Coderhouse',
      tools: 'Javascript, React, Firebase, Vercel',
      link: 'https://coderhouse-react-88065.vercel.app/'
    },
    {
      category: 'java',
      title: 'Proyecto Java - Universidad Tecnologíca del Perú',
      thumb: '/img/portfolio/thumb/project-9.png',
      screenshots: [
        '/img/portfolio/large/project-9/1.png',
        '/img/portfolio/large/project-9/2.png',
        '/img/portfolio/large/project-9/3.png',
        '/img/portfolio/large/project-9/4.png',
        '/img/portfolio/large/project-9/5.png',
        '/img/portfolio/large/project-9/6.png',
        '/img/portfolio/large/project-9/7.png'
      ],
      description: 'Proyecto realizado en Java Swing como trabajo de la Universidad (UTP).',
      date: '2024',
      client: 'UTP',
      tools: 'JAVA SE, JAVA SWING',
      link: 'https://github.com/robermejia/algoritmos_y_estructuras_de_datos_16026/tree/proyecto_final'
    },
    {
      category: 'diseño-ux-ui',
      title: 'Proyecto Diseño UX/UI - Coderhouse',
      thumb: '/img/portfolio/thumb/project-8.jpg',
      screenshots: ['/img/portfolio/large/project-8/1.jpg'],
      description: 'El proyecto fue realizado con la metodología Design Thinking con el objetivo de crear un producto digital que pueda gestionar los proyectos de los usuarios con dificultad para usar las herramientas digitales.',
      date: '2023',
      client: 'Coderhouse',
      tools: 'Figma, Optimal Workshop, Useberry, Material Design 3',
      link: 'https://www.behance.net/gallery/163609697/Proyecto-Coderhouse-Diseno-UXUIz'
    },
    {
      category: 'html-css',
      title: 'Proyecto desarrollo web - Coderhouse',
      thumb: '/img/portfolio/thumb/project-1.png',
      screenshots: [
        '/img/portfolio/large/project-1/1.jpg',
        '/img/portfolio/large/project-1/2.jpg',
        '/img/portfolio/large/project-1/3.jpg',
        '/img/portfolio/large/project-1/4.jpg',
        '/img/portfolio/large/project-1/5.jpg'
      ],
      description: 'Proyecto CoderHouse. Proyecto subido el día 19/04/2022 para el curso de Desarrollo Web.',
      date: '2022',
      client: 'Coderhouse',
      tools: 'HTML, CSS,SASS, BOOTSTRAP, AOS',
      link: 'https://robermejia.github.io/coderhouse_desarrollo_web_36900/'
    },
    {
      category: 'javascript',
      title: 'Proyecto javascript - Coderhouse',
      thumb: '/img/portfolio/thumb/project-2.png',
      screenshots: [
        '/img/portfolio/large/project-2/1.jpg',
        '/img/portfolio/large/project-2/2.jpg',
        '/img/portfolio/large/project-2/3.jpg',
        '/img/portfolio/large/project-2/4.jpg'
      ],
      description: 'Proyecto CoderHouse. Proyecto subido el día 10/09/2022 para el curso de Javascript.',
      date: '2022',
      client: 'Coderhouse',
      tools: 'HTML, CSS, BOOTSTRAP, JAVASCRIPT, TOASTIFY, SWEETALERT2',
      link: 'https://robermejia.github.io/coderhouse_javascript_33980/'
    },
    {
      category: 'diseño-ux-ui',
      title: 'Interfaz de usuario - WTC',
      thumb: '/img/portfolio/thumb/project-3.jpg',
      screenshots: ['/img/portfolio/large/project-3/1.jpg'],
      description: 'Diseño de interfaz de usuario ficticia para una empresa de productos de relojes.',
      date: '2016',
      client: 'WTC',
      tools: 'Photoshop, Illustrator',
      link: '#'
    },
    {
      category: 'diseño-ux-ui',
      title: 'Interfaz de usuario - IAB Perú',
      thumb: '/img/portfolio/thumb/project-4.jpg',
      screenshots: ['/img/portfolio/large/project-4/1.JPG'],
      description: 'Diseño de interfaz de usuario para una empresa de publicidad peruana haciendo un rediseño para su sitio web.',
      date: '2016',
      client: 'IAB Perú',
      tools: 'Photoshop, Illustrator',
      link: '#'
    },
    {
      category: 'diseño-ux-ui',
      title: 'Interfaz de usuario - Portafolio',
      thumb: '/img/portfolio/thumb/project-5.jpg',
      screenshots: ['/img/portfolio/large/project-5/1.jpg'],
      description: 'Diseño de interfaz de usuario para un usuario con marca personal.',
      date: '2015',
      client: 'Ficticio',
      tools: 'Photoshop, Illustrator',
      link: '#'
    },
    {
      category: 'ilustracion',
      title: 'Ilustración DBS (Goku y Bills)',
      thumb: '/img/portfolio/thumb/project-6.jpg',
      screenshots: [
        '/img/portfolio/large/project-6/1.png',
        '/img/portfolio/large/project-6/2.jpg'
      ],
      description: 'Ilustración realizada para el anime Dragon Ball Super se trata de los personajes principales del manga.',
      date: '2015',
      client: 'Dragon Ball Super',
      tools: 'Illustrator',
      link: '#'
    },
    {
      category: 'ilustracion',
      title: 'Ilustración DBS (Goku)',
      thumb: '/img/portfolio/thumb/project-7.jpg',
      screenshots: [
        '/img/portfolio/large/project-7/1.png',
        '/img/portfolio/large/project-7/2.jpg'
      ],
      description: 'Ilustración realizada para el anime Dragon Ball Super se trata del personaje principal del manga.',
      date: '2015',
      client: 'Dragon Ball Super',
      tools: 'Illustrator',
      link: '#'
    },
  ];

  const categories = [
    { id: 'all', label: 'TODOS' },
    { id: 'diseño-ux-ui', label: 'DISEÑO UI/UX' },
    { id: 'html-css', label: 'HTML/CSS' },
    { id: 'javascript', label: 'JAVASCRIPT' },
    { id: 'react', label: 'REACT' },
    { id: 'angular', label: 'ANGULAR' },
    { id: 'java', label: 'JAVA' },
    { id: 'sql', label: 'SQL' },
    { id: 'ilustracion', label: 'ILUSTRACIÓN' },
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category.split(' ').some(c => c.includes(filter) || filter.includes(c)));

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentScreenshotIndex(0);
    setShowDetails(true); // Open details by default
    document.body.classList.add('stop-scrolling');
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.classList.remove('stop-scrolling');
  };

  const nextScreenshot = () => {
    if (selectedProject) {
      setCurrentScreenshotIndex((prev) => (prev + 1) % selectedProject.screenshots.length);
    }
  };

  const prevScreenshot = () => {
    if (selectedProject) {
      setCurrentScreenshotIndex((prev) => (prev - 1 + selectedProject.screenshots.length) % selectedProject.screenshots.length);
    }
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeProject();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section className="portfolio-section section active" id="portafolio">
      <div className="container container-portfolio">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="portafolio">ultimos <span className="mobile-wrap">trabajos</span></h2>
          </div>
        </div>
        
        {/* Filter */}
        <div className="row">
          <div className="portfolio-filter">
            {categories.map((cat) => (
              <span 
                key={cat.id} 
                className={`filter-item ${filter === cat.id ? 'outer-shadow active' : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </span>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="row portfolio-items">
          {filteredItems.map((item, index) => (
            <div 
              className="portfolio-item" 
              key={index} 
              onClick={() => openProject(item)}
              style={{ cursor: 'pointer' }}
            >
              <div className="portfolio-item-inner outer-shadow">
                <div className="portfolio-item-img">
                  <img src={item.thumb} alt={item.title} />
                  <span className="view-project">Ver projecto</span>
                </div>
                <p className="portfolio-item-title">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {selectedProject && (
        <div className="portfolio-popup open pp">
          <div className="pp-details-inner">
            <div className="pp-close-btn outer-shadow hover-in-shadow" onClick={closeProject}>&times;</div>
            
            <div className="pp-title">
              <h2>{selectedProject.title}</h2>
              <p>Categoría - <span className="pp-project-category">{selectedProject.category.split('-').join(' ')}</span></p>
            </div>

            {/* Collapsible Details */}
            <div className="pp-project-details" style={{ maxHeight: showDetails ? '1000px' : '0px', opacity: showDetails ? 1 : 0, overflow: 'hidden', transition: 'all 0.5s ease' }}>
              <div className="row">
                <div className="description">
                  <h3>Resumen del proyecto</h3>
                  <p>{selectedProject.description}</p>
                </div>
                <div className="info">
                  <h3>información del proyecto</h3>
                  <ul>
                    <li>Fecha - <span>{selectedProject.date}</span></li>
                    <li>Cliente - <span>{selectedProject.client}</span></li>
                    <li>Herramientas - <span>{selectedProject.tools}</span></li>
                    <li>Web - <span>
                      <a href={selectedProject.link === '#' ? undefined : selectedProject.link} target="_blank" rel="noreferrer">
                        {selectedProject.link === '#' ? 'No disponible' : 'Ver sitio web'}
                      </a>
                    </span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Navigation Controls and Image Integrated */}
            <div className="pp-main-integrated">
              <div className="pp-project-details-btn outer-shadow hover-in-shadow" onClick={toggleDetails}>
                {showDetails ? 'Ver menos detalles' : 'Ver detalles del proyecto'} <i className={`fas ${showDetails ? 'fa-minus' : 'fa-plus'}`}></i>
              </div>
              
              <div className="pp-img-container">
                <img 
                  src={selectedProject.screenshots[currentScreenshotIndex]} 
                  alt="screenshot" 
                  className="pp-img outer-shadow" 
                />
                
                {selectedProject.screenshots.length > 1 && (
                  <div className="pp-nav-controls">
                    <div className="pp-prev" onClick={prevScreenshot}><i className="fas fa-play"></i></div>
                    <div className="pp-counter">{currentScreenshotIndex + 1} of {selectedProject.screenshots.length}</div>
                    <div className="pp-next" onClick={nextScreenshot}><i className="fas fa-play"></i></div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
      <Footer />
    </section>
  );
};

export default PortfolioSection;

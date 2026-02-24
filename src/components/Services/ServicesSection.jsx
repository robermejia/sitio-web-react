import React from 'react';
import Footer from '../Common/Footer';

const ServicesSection = () => {
  const services = [
    { 
      icon: 'fas fa-mobile-alt', 
      title: 'diseño adaptativo', 
      desc: 'Es la técnica que se usa en la actualidad para tener una misma web adaptada a las diferentes plataformas que nos brinda la tecnología: ordenador, tablet y Smartphone.' 
    },
    { 
      icon: 'fas fa-laptop-code', 
      title: 'Diseño UX/UI', 
      desc: 'Utilizamos metodologías de diseño UX/UI como: Lean UX, Design Thinking para crear soluciones innovadoras y centradas en el usuario.' 
    },
    { 
      icon: 'fa-solid fa-wand-magic-sparkles', 
      title: 'Desarrollo Web', 
      desc: 'Ofrecemos servicios de desarrollo web para todo tipo de proyectos. Desde sitios web estáticos hasta aplicaciones web complejas, creamos soluciones personalizadas que se adaptan a tus necesidades y objetivos.' 
    },
    { 
      icon: 'fas fa-code', 
      title: 'Código limpio', 
      desc: 'Clean Code, o Código Limpio, es una filosofía de desarrollo de software que consiste en aplicar técnicas simples que facilitan la escritura y lectura de un código, volviéndolo más fácil de entender.' 
    },
    { 
      icon: 'fa-brands fa-java', 
      title: 'Programación Java', 
      desc: 'Ofrecemos servicios de programación en Java para el desarrollo de aplicaciones empresariales, web y móviles.' 
    },
    { 
      icon: 'fa-solid fa-database', 
      title: 'Base de Datos', 
      desc: 'Gestión experta de bases de datos. Optimizamos el rendimiento, garantizamos la seguridad y aseguramos la integridad de tus datos.' 
    },
  ];

  return (
    <section className="service-section section active" id="servicios">
      <div className="container container-services">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="Servicios">lo que hago</h2>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <div className="service-item-inner outer-shadow">
                <div className="icon inner-shadow">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ServicesSection;

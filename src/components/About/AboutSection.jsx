import React, { useState } from 'react';
import Footer from '../Common/Footer';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const tabs = [
    { id: 'skills', label: 'habilidades' },
    { id: 'experience', label: 'experiencia' },
    { id: 'education', label: 'educación' },
    { id: 'certifications', label: 'certificaciones' },
  ];

  return (
    <section className="about-section section" id="acerca">
      <div className="container container-about">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="información principal">Sobre mí</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-img">
            <div className="img-box inner-shadow">
              <img src="/src/assets/img/retratos/foto11.png" className="outer-shadow" alt="profile-pic" />
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/robermejia.pe" target="_blank" rel="noreferrer" className="outer-shadow hover-in-shadow"><i className="fab fa-facebook-f"></i></a>
              <a href="https://x.com/soyrobertomejia" target="_blank" rel="noreferrer" className="outer-shadow hover-in-shadow"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="https://github.com/robermejia" target="_blank" rel="noreferrer" className="outer-shadow hover-in-shadow"><i className="fab fa-github"></i></a>
              <a href="https://codepen.io/robermejia" target="_blank" rel="noreferrer" className="outer-shadow hover-in-shadow"><i className="fab fa-codepen"></i></a>
              <a href="https://www.linkedin.com/in/robermejia/" target="_blank" rel="noreferrer" className="outer-shadow hover-in-shadow"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="about-info">
            <p>
              ¡Hola! Soy <strong>Roberto Mejía</strong>, estudiante de <strong>Ingeniería de Sistemas e Informática</strong> en la <strong>Universidad Tecnológica del Perú (UTP)</strong>. Soy un apasionado por la tecnología y el desarrollo web, con enfoque en escribir código limpio, eficiente y bien estructurado.
            </p>
            <p>
              Soy egresado de la carrera de <strong>Diseño Web y Multimedia</strong> del <strong>Instituto Toulouse Lautrec</strong> (2013), y también estudié en el <strong>Instituto Peruano de Arte y Diseño</strong> (2009) y en el <strong>Instituto Cesca</strong>, donde me especialicé en <strong>Mantenimiento de PC</strong>.
            </p>
            <p>
              Actualmente continúo mi formación en plataformas digitales como <strong>Coderhouse</strong> (Argentina) y la <strong>Cámara de Comercio Exterior del Perú</strong>. Por motivos de salud estuve un tiempo alejado del ámbito tecnológico, pero hoy retomo mi desarrollo profesional trabajando de forma autónoma y aplicando todo lo aprendido de manera autodidacta.
            </p>
            <p>
              Me considero una persona <strong>proactiva, curiosa y con mentalidad de aprendizaje constante</strong>. Creo que una comunicación asertiva es clave para un buen ambiente laboral y una mayor productividad. Estoy convencido de que quienes buscan aprender cada día aportan valor real a cualquier equipo.
            </p>
            <a href="/cv_roberto.pdf" className="btn-1 new-shadow cta-gradient" target="_blank">Descargar CV</a>
            <a href="#contacto" className="link-item btn-1 new-shadow cta-gradient">Contratame</a>
          </div>
        </div>

        <div className="row">
          <div className="about-tabs">
            {tabs.map((tab) => (
              <span 
                key={tab.id}
                className={`tab-item ${activeTab === tab.id ? 'outer-shadow active' : ''}`} 
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </span>
            ))}
          </div>
        </div>

        <div className="row">
          {activeTab === 'skills' && (
            <div className="skills tab-content active">
              <div className="row">
                <div className="code">
                  <SkillItem label="Java" percentage="60%" />
                  <SkillItem label="Spring Boot" percentage="40%" />
                  <SkillItem label="MySQL" percentage="70%" />
                  <SkillItem label="HTML, CSS, Javascript" percentage="85%" />
                  <SkillItem label="Sass, Less" percentage="70%" />
                  <SkillItem label="Bootstrap, Tailwind" percentage="70%" />
                  <SkillItem label="TypeScript" percentage="65%" />
                  <SkillItem label="Angular" percentage="50%" />
                  <SkillItem label="React" percentage="65%" />
                </div>
                <div className="design">
                  <SkillItem label="VSC, Eclipse, Netbeans, Intellij Idea" percentage="75%" />
                  <SkillItem label="Postman" percentage="70%" />
                  <SkillItem label="Figma, Photoshop, Ilustrator" percentage="75%" />
                  <SkillItem label="Heroku, Netlify, Render" percentage="75%" />
                  <SkillItem label="Firebase" percentage="70%" />
                  <SkillItem label="Cursor, Antigravity" percentage="70%" />
                  <SkillItem label="Filezilla" percentage="60%" />
                  <SkillItem label="Git / GitHub" percentage="75%" />
                  <SkillItem label="Inglés" percentage="50%" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="experience tab-content active">
              <div className="row">
                <div className="timeline">
                  <div className="row">
                    <TimelineItem 
                      icon="fas fa-briefcase"
                      date="Enero, 2015 - Enero, 2023"
                      title="Desarrollo Web"
                      subtitle="Cosmos Studio, Lima"
                      description="Diseñador Gráfico y Multimedia."
                    />
                    <TimelineItem 
                      icon="fas fa-briefcase"
                      date="Diciembre, 2014 - Enero, 2015"
                      title="Desarrollo Web"
                      subtitle="Grupo Digitalink, Lima"
                      description="Desarrollador Web."
                    />
                    <TimelineItem 
                      icon="fas fa-briefcase"
                      date="Abril, 2014 - Noviembre 2014"
                      title="Diseñador, Producción Audiovisual"
                      subtitle="Cosmos Studio, Lima"
                      description="Diseñador Gráfico y Multimedia."
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="education tab-content active">
              <div className="row">
                <div className="timeline">
                  <div className="row">
                    <TimelineItem 
                      icon="fas fa-graduation-cap"
                      date="2024 - 2027"
                      title="Inglés Américano (Altual)"
                      subtitle="Cámara de Comercio Exterior"
                      description="Lima"
                      flag="/src/assets/img/banderas/peru.png"
                    />
                    <TimelineItem 
                      icon="fas fa-graduation-cap"
                      date="2023 - 2026"
                      title="Ingeniería de Sistema e Informática (Altual)"
                      subtitle="UTP - Universidad Tecnológica del Perú"
                      description="Lima"
                      flag="/src/assets/img/banderas/peru.png"
                    />
                    <TimelineItem 
                      icon="fas fa-graduation-cap"
                      date="2022 - 2025"
                      title="Desarrollo Web, Diseño UX/UI, MySQL, Javascript, Angular, React"
                      subtitle="Coderhouse - Institución Educativa 100% Online"
                      description="Buenos Aires"
                      flag="/src/assets/img/banderas/argentina.png"
                    />
                    <TimelineItem 
                      icon="fas fa-graduation-cap"
                      date="2009 - 2013"
                      title="Diseño Web y Multimedia"
                      subtitle="Instituto Toulouse Lautrec"
                      description="Lima"
                      flag="/src/assets/img/banderas/peru.png"
                    />
                    <TimelineItem 
                      icon="fas fa-graduation-cap"
                      date="2008 - 2009"
                      title="Diseño Gráfico"
                      subtitle="Ipad - Instituto peruano de Arte y Diseño"
                      description="Lima"
                      flag="/src/assets/img/banderas/peru.png"
                    />
                    <TimelineItem 
                      icon="fas fa-graduation-cap"
                      date="2006 - 2007"
                      title="Esamblaje y Mantenimiento de PC"
                      subtitle="Cesca - Institución de Educación Superior Tecnológico"
                      description="Lima"
                      flag="/src/assets/img/banderas/peru.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="certifications tab-content active">
              <div className="row">
                <div className="timeline">
                  <div className="row">
                    <CertificationItem date="Octubre 2025" title="Certificado de React" img="/src/assets/img/certificaciones/React.png" />
                    <CertificationItem date="Setiembre 2025" title="Certificado de Angular" img="/src/assets/img/certificaciones/Angular.png" />
                    <CertificationItem date="Junio 2025" title="Certificado de Defensa de la Red" img="/src/assets/img/certificaciones/network_defense.png" />
                    <CertificationItem date="Abril 2025" title="Certificado de Introducción a la Ciberseguridad" img="/src/assets/img/certificaciones/intruction_to_cibersecurity.png" />
                    <CertificationItem date="Abril 2025" title="Certificado de Practicante de Design Thinking Empresarial" img="/src/assets/img/certificaciones/enterprise_design_thinking_practitioner.png" />
                    <CertificationItem date="Mayo 2025" title="Certificado de Cocreador del pensamiento de diseño empresarial" img="/src/assets/img/certificaciones/enterprise_design_thinking_co_creator.png" />
                    <CertificationItem date="Diciembre 2024" title="Certificado de CCNA: Introducción a las redes" img="/src/assets/img/certificaciones/ccna_intruction_to_networks.png" />
                    <CertificationItem date="Octubre 2024" title="Certificado de MySQL" img="/src/assets/img/certificaciones/MySQL.png" />
                    <CertificationItem date="Abril 2024" title="Certificado de Asistente de docencia" img="/src/assets/img/certificaciones/Asistente_de_docencia_en_Matemática_UTP_pag.jpg" />
                    <CertificationItem date="Enero 2023" title="Certificado de Diseño UX/UI" img="/src/assets/img/certificaciones/Diseño_UX_UI.png" />
                    <CertificationItem date="Setiembre 2022" title="Certificado de Javascript" img="/src/assets/img/certificaciones/Javascript.png" />
                    <CertificationItem date="Mayo 2022" title="Certificado de Desarrollo Web" img="/src/assets/img/certificaciones/Desarrollo_Web.png" />
                    <CertificationItem date="Marzo 2022" title="Certificado de Diseño Web Adaptable" img="/src/assets/img/certificaciones/Diseño_Web_Adaptable_freecodecamp.png" />
                    <CertificationItem date="Julio 2007" title="Certificado de Cabinas de Internet" img="/src/assets/img/certificaciones/5.Cabinas_de_Internet(Redes)_CESCA.jpeg" />
                    <CertificationItem date="Julio 2007" title="Certificado de Diagnóstico de Redes" img="/src/assets/img/certificaciones/1.Diagnostico_y_Reparación_PC_CESCA.jpeg" />
                    <CertificationItem date="Junio 2007" title="Certificado de Mantenimiento de PC" img="/src/assets/img/certificaciones/2.Mantenimiento_de_PC_CESCA.jpeg" />
                    <CertificationItem date="Junio 2007" title="Certificado de Línux Redhat" img="/src/assets/img/certificaciones/4.Linux_RedHat_CESCA.jpeg" />
                    <CertificationItem date="Febrero 2007" title="Certificado de Ensamblaje de PC" img="/src/assets/img/certificaciones/6.Emsamblaje_de_Computadoras.jpeg" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
};

const SkillItem = ({ label, percentage }) => (
  <div className="skill-item">
    <p>{label}</p>
    <div className="progress inner-shadow">
      <div className="progress-bar" style={{ width: `calc(${percentage} - 14px)` }}>
        <span>{percentage}</span>
      </div>
    </div>
  </div>
);

const TimelineItem = ({ icon, date, title, subtitle, description, flag }) => (
  <div className="timeline-item">
    <div className="timeline-item-inner outer-shadow">
      <i className={`${icon} icon`}></i>
      <span>{date}</span>
      <h3>{title}</h3>
      {subtitle && <h4>{subtitle}</h4>}
      <p>
        {description}
        {flag && <img className="bandera" src={flag} alt="Bandera" />}
      </p>
    </div>
  </div>
);

const CertificationItem = ({ date, title, img }) => (
  <div className="timeline-item">
    <div className="timeline-item-inner outer-shadow">
      <i className="fas fa-certificate icon"></i>
      <span>{date}</span>
      <h3>{title}</h3>
      <div className="certification-image">
        <img src={img} alt={title} className="certificate-img" />
      </div>
    </div>
  </div>
);

export default AboutSection;

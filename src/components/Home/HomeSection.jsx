import React from 'react';

const HomeSection = () => {
  return (
    <section className="home-section section active" id="inicio">
      {/* effect wrap start */}
      <div className="effect-wrap">
        <div className="effect effect-1"></div>
        <div className="effect effect-2">
          {[...Array(28)].map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
        <div className="effect effect-3"></div>
        <div className="effect effect-4"></div>
        <div className="effect effect-5">
          {[...Array(10)].map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
      </div>
      {/* effect wrap end */}

      <div className="container">
        <div className="row full-screen align-items-center">
          <div className="home-text">
            <p>¡Hola! 👋🏼</p>
            <h2>Soy Roberto Mejía</h2>
            <h1>Ingeniero de Sistemas e Informática, Diseñador Web y Multimedia, Top 10 en CoderHouse.</h1>
            <a href="#contacto" className="btn-1 outer-shadow new-shadow cta-gradient">Contrátame ahora</a>
          </div>
          <div className="home-img">
            <div className="img-box inner-shadow">
              <img src="/src/assets/img/retratos/foto10.png" className="outer-shadow" alt="profile-pic" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

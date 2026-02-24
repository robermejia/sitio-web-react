import React, { useState } from 'react';
import Footer from '../Common/Footer';

const ContactSection = () => {
    const [showThanksModal, setShowThanksModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        fetch("https://formsubmit.co/ajax/contacto@robermejia.com", {
            method: "POST",
            body: formData,
        })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
            console.log(json);
            setShowThanksModal(true);
            setTimeout(() => {
                setShowThanksModal(false);
                e.target.reset(); // Clear form fields
            }, 4000);
        })
        .catch((err) => {
            console.error(err);
            alert("Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.");
        });
    };

    return (
        <section className="contact-section section active" id="contacto">
            <div className="container container-contact">
                <div className="row">
                    <div className="section-title">
                        <h2 data-heading="contacto">ponerse <span className="mobile-wrap">en contacto</span></h2>
                    </div>
                </div>
                <div className="row">
                    <ContactItem icon="fas fa-phone" label="Whatsapp" value="+51 991 585 471" flip={true} />
                    <ContactItem icon="fas fa-envelope" label="Email" value="contacto@robermejia.com" />
                    <ContactItem icon="fas fa-map-marker-alt" label="Localización" value="Lima, Perú" />
                </div>
                <div className="row">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="w-50">
                                <InputGroup type="text" name="nombre" placeholder="Ingresa tu nombre *" />
                                <InputGroup type="email" name="email" placeholder="Ingresa tu correo *" />
                                <InputGroup type="text" name="asunto" placeholder="Tema *" />
                            </div>
                            <div className="w-50">
                                <div className="input-group outer-shadow hover-in-shadow">
                                    <textarea name="mensaje" cols="50" rows="10" placeholder="Déjame tus comentarios *" className="input-control" required></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="submit-btn">
                                <button type="submit" className="btn-1 outer-shadow new-shadow cta-gradient">Enviar mensaje</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Modal de Agradecimiento */}
            <article id="gracias" className={`modal ${showThanksModal ? 'active' : ''}`}>
                <div className="modal-content">
                    <article className="contact-form-response">
                        <h3>
                            ¡Muchas Gracias!
                            <br />
                            Por tus comentarios
                        </h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12,18c4,0,5-4,5-4H7C7,14,8,18,12,18z" />
                            <path d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" />
                            <path d="M13 12l2 .012C15.012 11.55 15.194 11 16 11s.988.55 1 1h2c0-1.206-.799-3-3-3S13 10.794 13 12zM8 11c.806 0 .988.55 1 1h2c0-1.206-.799-3-3-3s-3 1.794-3 3l2 .012C7.012 11.55 7.194 11 8 11z" />
                        </svg>
                    </article>
                </div>
            </article>

            <Footer />
        </section>
    );
};

const ContactItem = ({ icon, label, value, flip }) => (
  <div className="contact-item">
    <div className="contact-item-inner outer-shadow">
      <i className={icon} style={flip ? { display: 'inline-block', transform: 'scaleX(-1)' } : {}}></i>
      <span>{label}</span>
      <p>{value}</p>
    </div>
  </div>
);

const InputGroup = ({ type, name, placeholder }) => (
  <div className="input-group outer-shadow hover-in-shadow">
    <input type={type} name={name} placeholder={placeholder} className="input-control" required />
  </div>
);

export default ContactSection;

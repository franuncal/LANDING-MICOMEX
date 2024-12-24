import emailjs from "emailjs-com";
import { useState } from "react";
import "./Contact.css";
import {
  FaWhatsapp,
  // FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  // Inicializar EmailJS con tu Public Key
  emailjs.init("-F5bPMUsEGYQ7EgF9");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Definir los parámetros del template
    const templateParams = {
      to_name: "M.I Logística y Comercio Internacional", // Nombre de tu cliente
      from_name: formData.name, // Nombre de la persona + leyenda personalizada
      from_email: formData.email, // Correo de la persona que llena el formulario
      phone: formData.phone,
      company: formData.company,
      service: formData.service,
      message: formData.message,
    };

    // Enviar el formulario a través de EmailJS
    emailjs
      .send(
        "service_7pr6bla", // Usamos 'default_service' como service ID (lo puedes verificar en EmailJS)
        "template_e5zo8cb", // Tu Template ID de EmailJS
        templateParams
      )
      .then(
        (result) => {
          console.log(result.text); // Si todo sale bien, loguea el resultado
          alert(
            "¡Mensaje enviado. Le responderemos a la brevedad. Muchas gracias!"
          );
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            message: "",
          });
        },
        (error) => {
          console.error(error.text); // Si ocurre un error, loguea el error
          alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
        }
      );
  };

  return (
    <section className="contact-section" id="contacto">
      <h2 className="contact-title">Contáctanos</h2>
      <div className="contact-container">
        <div className="contact-info">
          {/* Información de contacto */}
          <h4>DPTO. COMERCIAL - MARIA INES ZENGA</h4>
          <ul>
            <li>
              <a
                href="https://wa.me/+5492324510663?text=Hola!%20Quiero%20asesorarme%20con%20ustedes%20sobre%20los%20servicios%20de%20Comercio%20Internacional%20y%20Logística."
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp style={{ color: "#b24c11", marginRight: "10px" }} />
                +54 9 2324 510663
              </a>
            </li>
            {/* <li>
              <a
                href="tel:+5492324510663"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPhoneAlt style={{ color: "#b24c11", marginRight: "10px" }} />
                +54 9 2324 510663
              </a>
            </li> */}
            <li>
              <a
                href="mailto:mariazenga@milogisticainternacional.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope style={{ color: "#b24c11", marginRight: "10px" }} />
                mariazenga@milogisticainternacional.com
              </a>
            </li>
            <li>
              <a
                href="mailto:mariazenga.comercioexterior@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope style={{ color: "#b24c11", marginRight: "10px" }} />
                mariazenga.comercioexterior@gmail.com
              </a>
            </li>
          </ul>
          <br />
          <h4>DPTO. OPERACIONES - BAUTISTA PIRIZ</h4>
          <ul>
            <li>
              <a
                href="https://wa.me/+5492324510676?text=Hola!%20Quiero%20asesorarme%20con%20ustedes%20sobre%20los%20servicios%20de%20Comercio%20Internacional%20y%20Logística."
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp style={{ color: "#b24c11", marginRight: "10px" }} />
                +54 9 2324 510676
              </a>
            </li>
            {/* <li>
              <a
                href="tel:+5492324510663"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPhoneAlt style={{ color: "#b24c11", marginRight: "10px" }} />
                +54 9 2324 510663
              </a>
            </li> */}
            <li>
              <a
                href="mailto:bautistapiriz@milogisticainternacional.com "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope style={{ color: "#b24c11", marginRight: "10px" }} />
                bautistapiriz@milogisticainternacional.com
              </a>
            </li>
            <li>
              <a
                href="mailto:bautistapiriz.comercioexterior@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope style={{ color: "#b24c11", marginRight: "10px" }} />
                bautistapiriz.comercioexterior@gmail.com
              </a>
            </li>
            <br />
            <li>
              <FaMapMarkerAlt
                style={{ color: "#b24c11", marginRight: "10px" }}
              />
              Mercedes, Pcia. de Buenos Aires. Republica Argentina
            </li>
          </ul>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Nombre"
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Email"
              />

              <label htmlFor="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Teléfono"
              />

              <label htmlFor="company">Empresa</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Empresa"
              />

              {/* Mostrar el label de Servicio/Asesoría */}
              <label htmlFor="service" className="service-label">
                Servicio/Asesoría
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
              >
                <option value="aereo">Flete Aereo</option>
                <option value="terrestre">Flete Terrestre</option>
                <option value="maritimo">Flete Maritimo</option>
                <option value="peligrosa">Carga Peligrosa</option>
                <option value="proyecto">Carga de Proyecto</option>
                <option value="asesoria">Asesoría</option>
              </select>

              {/* Mostrar el label de Comentario */}
              <label htmlFor="message" className="message-label">
                Comentario
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                required
                placeholder="Escribe tu comentario"
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

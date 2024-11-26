import emailjs from "emailjs-com";
import { useState } from "react";
import "./Contact.css";
import {
  FaWhatsapp,
  FaPhoneAlt,
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
      to_name: "M.I Logística y Comercio Internacional", // Nombre de la empresa de tu cliente
      from_name: formData.name,
      from_email: formData.email,
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
          alert("¡Mensaje enviado correctamente!");
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
          <ul>
            <li>
              <a
                href="https://wa.me/+5492324510663?text=%C2%A1Hola!%20Estoy%20interesado%20en%20los%20servicios%20de%20MI%20LOGISTICA.%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%3A%0A-%20Flete%20A%C3%A9reo%0A-%20Flete%20Terrestre%0A-%20Flete%20Mar%C3%ADtimo%0A-%20Carga%20Peligrosa%0A-%20Carga%20Sobredimensionada%0A-%20Asesor%C3%ADa%20en%20Log%C3%ADstica%0A%0AQuisiera%20saber%20m%C3%A1s%20detalles%20sobre%20c%C3%B3mo%20podemos%20coordinar%20el%20env%C3%ADo%20de%20mi%20mercanc%C3%ADa.%20Gracias."
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp style={{ color: "#b24c11", marginRight: "10px" }} />
                +54 9 2324 510663
              </a>
            </li>
            <li>
              <a
                href="tel:+5492324510663"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPhoneAlt style={{ color: "#b24c11", marginRight: "10px" }} />
                +54 9 2324 510663
              </a>
            </li>
            <li>
              <a
                href="mailto:contacto@milogistica.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope style={{ color: "#b24c11", marginRight: "10px" }} />
                contacto@milogistica.com
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
            <li>
              <FaMapMarkerAlt
                style={{ color: "#b24c11", marginRight: "10px" }}
              />
              Mercedes. Buenos Aires, Argentina
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
                <option value="proyecto">Carga Proyecto</option>
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

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario (ej., validación o enviar los datos)
    console.log(formData); // Solo como ejemplo, imprimiendo los datos en consola
  };

  return (
    <section className="contact-section" id="contacto">
      <h2 className="contact-title"></h2>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contáctanos</h2>
          <ul>
            <li>
              <FaWhatsapp style={{ color: "#b24c11", marginRight: "10px" }} />{" "}
              +54 9 11 1234-5678
            </li>
            <li>
              <FaPhoneAlt style={{ color: "#b24c11", marginRight: "10px" }} />{" "}
              +54 11 2345-6789
            </li>
            <li>
              <FaEnvelope style={{ color: "#b24c11", marginRight: "10px" }} />{" "}
              contacto@milogistica.com
            </li>
            <li>
              <FaEnvelope style={{ color: "#b24c11", marginRight: "10px" }} />{" "}
              mariazenga.comercioexterior@gmail.com
            </li>
            <li>
              <FaEnvelope style={{ color: "#b24c11", marginRight: "10px" }} />{" "}
              bautistapiriz.comercioexterior@gmail.com
            </li>
            <li>
              <FaMapMarkerAlt
                style={{ color: "#b24c11", marginRight: "10px" }}
              />{" "}
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

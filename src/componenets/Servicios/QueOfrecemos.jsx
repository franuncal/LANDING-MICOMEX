import "./QueOfrecemos.css";
import {
  FaBoxOpen, // Para "seguimiento"
  FaTruck, // Para "retiro y entrega"
  FaShieldAlt, // Para "seguro"
  FaWarehouse, // Para "almacenamiento"
  FaTag, // Para "etiquetado"
  FaFileAlt, // Para "documentación"
  FaUserTie, // Para "trámites de aduana"
  FaMapMarkedAlt, // Para "entrega DAP"
} from "react-icons/fa";

const QueOfrecemos = () => {
  const servicios = [
    { id: 1, icon: <FaBoxOpen />, title: "Seguimiento de órdenes de compra" },
    { id: 2, icon: <FaTruck />, title: "Retiro y entrega puerta a puerta" },
    { id: 3, icon: <FaShieldAlt />, title: "Seguro internacional" },
    { id: 4, icon: <FaWarehouse />, title: "Almacenamiento" },
    { id: 5, icon: <FaTag />, title: "Etiquetado" },
    { id: 6, icon: <FaFileAlt />, title: "Documentación completa" },
    { id: 7, icon: <FaUserTie />, title: "Trámites de agentes de aduana" },
    { id: 8, icon: <FaMapMarkedAlt />, title: "Entrega DAP" },
  ];

  return (
    <section className="que-ofrecemos" id="que-ofrecemos">
      <h2>Nuestros Servicios</h2>
      <p>
        Brindamos servicios integrales diseñados para cubrir todas las
        necesidades logísticas, asegurando un proceso eficiente y seguro para tu
        mercadería.
      </p>
      <div className="servicios-grid">
        {servicios.map((servicio) => (
          <div className="servicio-card" key={servicio.id}>
            <div className="icon">{servicio.icon}</div>
            <h3>{servicio.title}</h3>
          </div>
        ))}
      </div>
      <div className="cta-container">
        <a href="#contacto" className="cta-button">
          Contáctanos
        </a>
      </div>
    </section>
  );
};

export default QueOfrecemos;

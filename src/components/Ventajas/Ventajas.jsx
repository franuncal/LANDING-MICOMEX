import {
  FaShieldAlt,
  FaGlobe,
  FaClock,
  FaCheckCircle,
  FaEye,
} from "react-icons/fa"; // Usamos react-icons para los íconos
import "./Ventajas.css";

const Ventajas = () => {
  return (
    <section className="ventajas" id="ventajas">
      <div className="ventajas-card">
        <div className="card-v">
          <div className="card-content-ventajas">
            <h3>Ventajas de Nuestra Experiencia</h3>
            <p className="ventaja-description">
              Con más de 30 años de experiencia, ofrecemos seguridad, alcance
              global, disponibilidad 24/7, puntualidad y total visibilidad en
              cada operación. <br /> Con nosotros, tu negocio estará en manos de
              expertos que garantizan eficiencia, rapidez y una ventaja
              competitiva para tu crecimiento.
            </p>
            <div className="footer-text-v">
              <div className="ventaja-item">
                <FaShieldAlt />
                <p className="ventaja-title">Seguridad</p>
                <p className="ventaja-text">
                  Protegemos tu información con los más altos estándares de
                  seguridad.
                </p>
              </div>
              <div className="ventaja-item">
                <FaGlobe />
                <p className="ventaja-title">Alcance</p>
                <p className="ventaja-text">
                  Operamos globalmente, llevando tu negocio a nuevos mercados.
                </p>
              </div>
              <div className="ventaja-item">
                <FaClock />
                <p className="ventaja-title">Disponibilidad</p>
                <p className="ventaja-text">
                  Estamos disponibles 24/7 para responder a tus necesidades
                  inmediatas.
                </p>
              </div>
              <div className="ventaja-item">
                <FaCheckCircle />
                <p className="ventaja-title">Puntualidad</p>
                <p className="ventaja-text">
                  Nos aseguramos de cumplir con los plazos, garantizando
                  eficiencia.
                </p>
              </div>
              <div className="ventaja-item">
                <FaEye />
                <p className="ventaja-title">Visibilidad</p>
                <p className="ventaja-text">
                  Te brindamos visibilidad total para que siempre estés
                  informado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ventajas;

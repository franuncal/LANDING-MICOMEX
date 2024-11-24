import "./Banner.css";
import videoSrc from "../../assets/videos/videoBanner.mp4";

const Banner = () => {
  return (
    <section className="banner" id="banner">
      {/* Contenedor de texto centrado */}
      <div className="banner-content">
        <div className="banner-text">
          <h1>M.I Logística y Comercio Exterior</h1>
          <h2>
            Más de 30 años de experiencia en Comercio Exterior en Argentina
          </h2>
          <h3>Soluciones logísticas integrales y personalizadas</h3>
          <div className="cta-container">
            <a href="#contacto" className="cta-button">
              Contáctanos
            </a>
          </div>
        </div>
      </div>

      {/* El video se manejará a través de CSS como fondo */}
      <video className="video-background" autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
    </section>
  );
};

export default Banner;

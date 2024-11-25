import "./TransporteEspecial.css";
import img1 from "../../assets/transporte/cp1.webp";
import img2 from "../../assets/transporte/cp2.webp";
import img3 from "../../assets/transporte/proyecto1.webp";
import img4 from "../../assets/transporte/proyecto2.webp";

const TransporteEspecial = () => {
  return (
    <section className="especialidades" id="especialidades">
      <div className="title">
        <h2>Transporte Especializado de Cargas de Proyectos y Peligrosas</h2>
        <p>
          En <strong>M.I Logística</strong> somos expertos en el manejo de carga
          peligrosa, cumpliendo con los más altos estándares de seguridad y
          normativas internacionales. Te guiamos en el tramitado de certificados
          y envases autorizados, evitando costos innecesarios y garantizando la
          seguridad de las personas y el medio ambiente. <br /> Además, contamos
          con experiencia en el transporte de cargas sobredimensionadas,
          utilizando vehículos, contenedores y embalajes especializados para
          garantizar un traslado seguro y eficiente.
        </p>
      </div>
      <div className="img">
        <div className="peligrosas">
          <div className="img-pair">
            <img src={img1} alt="Cargas Peligrosas 1" />
            <img src={img2} alt="Cargas Peligrosas 2" />
          </div>
          <h3>Cargas Peligrosas</h3>
        </div>
        <div className="proyectos">
          <div className="img-pair">
            <img src={img3} alt="Cargas Proyecto 1" />
            <img src={img4} alt="Cargas Proyecto 2" />
          </div>
          <h3>Cargas de Proyecto</h3>
        </div>
      </div>
    </section>
  );
};

export default TransporteEspecial;

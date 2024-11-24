import "./TransporteEspecial.css";
import img from "../../assets/transporte/5.png";
import img1 from "../../assets/transporte/6.png";

const TransporteEspecial = () => {
  return (
    <section className="especialidades" id="especialidades">
      <div className="title">
        <h2>Transporte Especializado de Proyectos y Cargas Peligrosas</h2>
        <p>
          En <strong>M.I Logística</strong> somos expertos en el manejo de carga
          peligrosa, cumpliendo con los más altos estándares de seguridad y
          normativas internacionales. Te guiamos en el tramitado de certificados
          y envases autorizados, evitando costos innecesarios y asegurando la
          seguridad de las personas y el medio ambiente. Además, contamos con
          experiencia en el transporte de cargas sobredimensionadas, utilizando
          vehículos, contenedores y embalajes especializados para garantizar un
          traslado seguro y eficiente.
        </p>
      </div>
      <div className="img">
        <div className="peligrosas">
          <img src={img} alt="Cargas Peligrosas" />
          <h3>Cargas Peligrosas</h3>
        </div>
        <div className="proyectos">
          <img src={img1} alt="Cargas Proyecto" />
          <h3>Cargas Proyecto</h3>
        </div>
      </div>
    </section>
  );
};

export default TransporteEspecial;

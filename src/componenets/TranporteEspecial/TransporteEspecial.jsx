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
          peligrosa, conociendo y cumpliendo con estrictos estándares de
          seguridad y las normativas internacionales vigentes. Te acompañamos en
          el proceso del tramitado de los certificados y envases autorizados
          para el movimiento de las mercaderías, evitando costos innecesarios y
          guardando siempre la seguridad de las personas y el medio ambiente.
          Contamos con experiencia en el manejo de cargas sobredimencionadas que
          requieren vehiculos, contenedores y embalaje especializado, asegurando
          el transporte seguro y eficiente.
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

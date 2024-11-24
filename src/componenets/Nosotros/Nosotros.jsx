// import { FaStar } from "react-icons/fa";
import "./Nosotros.css";
import img from "../../assets/img/nosotros2.png";

const Nosotros = () => {
  return (
    <section className="nosotros" id="nosotros">
      <div className="container">
        <div className="text-title">
          <div className="text-block">
            <h2>Quiénes Somos</h2>
            <p>
              Somos una empresa joven y dinámica especializada en Comercio
              Exterior, liderada por María Inés Zenga, una profesional con más
              de 30 años de trayectoria en el sector. Nuestro equipo aporta una
              sólida experiencia en gestión de operaciones internacionales,
              optimización de procesos aduaneros, y desarrollo de estrategias de
              logística global.
            </p>
            {/* Agregar botón de certificados */}
            {/* <a href="/certificados" className="certificados-btn">
              <FaStar style={{ marginRight: "8px", color: "#FFD700" }} />{" "}
              Certificados
            </a> */}
          </div>
          <div className="text-block">
            <h2>Ganá con nuestra experiencia</h2>
            <p>
              Como equipo de trabajo aprovechamos nuestras sinergias recurriendo
              a un conocimiento profundo de los mercados locales y una vasta
              experiencia en logística global para ofrecerle los mejores
              resultados cuidando cada detalle de la operación de principio a
              fin. La confianza y la transparencia son los valores fundamentales
              de <strong>MI LOGISTICA Y COMERCIO EXTERIOR</strong>. Nuestra
              filosofía y nuestros servicios reflejan calidad y excelencia en
              todo lo que hacemos.
            </p>
          </div>
        </div>
        <div className="nosotros-img">
          <img src={img} alt="Empresa de Comercio Internacional" />
        </div>
      </div>
    </section>
  );
};

export default Nosotros;

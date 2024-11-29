import "./Adicionales.css";
import {
  FaBalanceScale,
  FaTruck,
  FaWarehouse,
  FaFileContract,
} from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";

const Adicionales = () => {
  const servicios = [
    {
      titulo: "Asesoría Contable",
      descripcion: "Servicios contables integrales para tu empresa.",
      icono: <MdAccountBalance />,
    },
    {
      titulo: "Asesoría Legal",
      descripcion: "Asistencia legal personalizada.",
      icono: <FaBalanceScale />,
    },
    {
      titulo: "Despacho Aduanero",
      descripcion: "Gestionamos todo tipo de trámites de aduana.",
      icono: <FaTruck />,
    },
    {
      titulo: "Depósitos Nacionales",
      descripcion: "Almacenes seguros para tus productos.",
      icono: <FaWarehouse />,
    },
    {
      titulo: "Depósito Fiscal",
      descripcion: "Ubicación estratégica en Mercedes.",
      icono: <BsFillBriefcaseFill />,
    },
    {
      titulo: "Servicio de Courrier",
      descripcion: "Envíos rápidos y eficientes.",
      icono: <FaFileContract />,
    },
  ];

  return (
    <section className="adicionales">
      <div className="container">
        <h2>Otros Servicios</h2>
        <div className="servicios-grid-1">
          {servicios.map((servicio, index) => (
            <div key={index} className="servicio">
              <div className="icon">{servicio.icono}</div>
              <div className="info">
                <h3>{servicio.titulo}</h3>
                <p>{servicio.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adicionales;

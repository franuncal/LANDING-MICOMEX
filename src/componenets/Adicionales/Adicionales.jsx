import "./Adicionales.css";

import img from "../../assets/adicionales/adu.png";
import img1 from "../../assets/adicionales/cont.png";
import img2 from "../../assets/adicionales/courries.png";
import img3 from "../../assets/adicionales/depo1.png";
import img4 from "../../assets/adicionales/depo2.png";
import img5 from "../../assets/adicionales/legal.png";

const Adicionales = () => {
  const servicios = [
    { titulo: "Asesoría Contable", imagen: img1 },
    { titulo: "Asesoría Legal", imagen: img5 },
    { titulo: "Despacho Aduanero", imagen: img },
    { titulo: "Depósitos Nacionales", imagen: img3 },
    {
      titulo: "Depósito Fiscal en Mercedes",
      imagen: img4,
    },
    { titulo: "Servicio de Courrier", imagen: img2 },
  ];

  return (
    <section className="adicionales">
      <div className="container">
        <h2>Además Ofrecemos:</h2>
        <div className="grid">
          {servicios.map((servicio, index) => (
            <div key={index}>
              <div className="card">
                <img src={servicio.imagen} alt={servicio.titulo} />
              </div>
              <h3 className="card-title">{servicio.titulo}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adicionales;

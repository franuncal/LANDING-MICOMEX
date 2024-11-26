// import { useState } from "react";
// import "./SolucionTransporte.css";
// import imgT1 from "../../assets/transporte/terrestre.webp";
// import imgT2 from "../../assets/transporte/maritimo.webp";
// import imgT3 from "../../assets/transporte/aereo.webp";

// //Modal
// import img1 from "../../assets/transporte/2.png";
// import img2 from "../../assets/transporte/1.png";
// import img3 from "../../assets/transporte/reffer.png";

// const SolucionTransporte = () => {
//   const [isMaritimoOpen, setIsMaritimoOpen] = useState(false);

//   const toggleMaritimo = () => {
//     setIsMaritimoOpen(!isMaritimoOpen);
//   };

//   return (
//     <section className="solucion-transporte" id="solucion-transporte">
//       <div className="transporte-cards">
//         <h2>Soluciones Integradas de Transporte</h2>

//         {/* Fletes Terrestres */}
//         <div
//           className="card"
//           data-aos="fade-left"
//           data-aos-delay="200"
//           style={{ backgroundImage: `url(${imgT1})` }}
//         >
//           <div className="card-content">
//             <h3>Fletes Terrestres - LTL o FTL</h3>
//             <p className="p-breve">
//               Ofrecemos transporte terrestre de mercancías tanto a nivel
//               nacional como internacional.
//             </p>
//             <p className="p-completo">
//               El envío terrestre es la alternativa más utilizada dentro del
//               transporte de mercancías, preferida por las distancias cortas y
//               cargas especiales (IMO – sobredimensionadas). Es también el
//               transporte de menor costo por lo que puede ajustarse a un
//               presupuesto limitado.
//             </p>

//             <a href="#contacto" className="contact-btn">
//               CONTACTANOS
//             </a>
//           </div>
//         </div>

//         {/* Fletes Marítimos */}
//         <div
//           className="card"
//           data-aos="fade-right"
//           data-aos-delay="200"
//           style={{ backgroundImage: `url(${imgT2})` }}
//         >
//           <div className="card-content">
//             <h3>Fletes Marítimos</h3>
//             <p className="p-breve">
//               Ofrecemos transporte marítimo seguro y global para importar y
//               exportar mercancías.
//             </p>
//             <p className="p-completo">
//               El transporte marítimo es crucial para el comercio internacional,
//               representando más del 80% de las importaciones y exportaciones. En
//               <strong> M.I Logistica</strong> optimizamos costos y tiempos de
//               tránsito con las principales líneas marítimas. Somos expertos en
//               el manejo de cargas peligrosas, sobredimensionadas, refrigeradas y
//               secas.
//             </p>

//             {/* Botón para abrir el modal de contenedores */}
//             <button onClick={toggleMaritimo} className="expand-btn">
//               {isMaritimoOpen
//                 ? "Cerrar Contenedores"
//                 : "Ver Tipos de Contenedores"}
//             </button>

//             <a href="#contacto" className="contact-btn">
//               CONTACTANOS
//             </a>
//           </div>
//         </div>

//         {/* Modal de contenedores */}
//         {isMaritimoOpen && (
//           <div className="modal active">
//             <div className="modal-content">
//               <h2>Tipos de Contenedores Marítimos</h2>
//               <div className="container-list horizontal-scroll">
//                 {/* Cada contenedor será un ítem en la fila */}
//                 <div className="container-item">
//                   <strong>Standards</strong>
//                   <img src={img1} alt="Standard container" />
//                   <div className="container-info">
//                     <h3>Dimensiones Internas</h3>
//                     <p>Longitud: 5,900 ml.</p>
//                     <p>Ancho: 2,352 ml.</p>
//                     <p>Altura: 2,395 ml.</p>
//                     <h3>Peso</h3>
//                     <p>Max Bruto: 32,500 kg.</p>
//                     <p>Tara: 2,370 kg.</p>
//                     <p>Capacidad Máx.: 30,130 kg.</p>
//                   </div>
//                 </div>
//                 <div className="container-item">
//                   <strong>Flatrack/Platform</strong>
//                   <img src={img2} alt="Flatrack container" />
//                   <div className="container-info">
//                     <h3>Dimensiones Internas</h3>
//                     <p>Longitud: 12,000 ml.</p>
//                     <p>Ancho: 2,500 ml.</p>
//                     <p>Altura: 2,000 ml.</p>
//                     <h3>Peso</h3>
//                     <p>Max Bruto: 40,000 kg.</p>
//                     <p>Tara: 5,000 kg.</p>
//                     <p>Capacidad Máx.: 35,000 kg.</p>
//                   </div>
//                 </div>
//                 <div className="container-item">
//                   <strong>Flatrack/Platform</strong>
//                   <img src={img3} alt="Flatrack container" />
//                   <div className="container-info">
//                     <h3>Dimensiones Internas</h3>
//                     <p>Longitud: 12,000 ml.</p>
//                     <p>Ancho: 2,500 ml.</p>
//                     <p>Altura: 2,000 ml.</p>
//                     <h3>Peso</h3>
//                     <p>Max Bruto: 40,000 kg.</p>
//                     <p>Tara: 5,000 kg.</p>
//                     <p>Capacidad Máx.: 35,000 kg.</p>
//                   </div>
//                 </div>
//                 {/* Más contenedores */}
//               </div>
//               <button onClick={toggleMaritimo} className="close-btn-card">
//                 Cerrar
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Fletes Aéreos */}
//         <div
//           className="card"
//           data-aos="fade-left"
//           data-aos-delay="200"
//           style={{ backgroundImage: `url(${imgT3})` }}
//         >
//           <div className="card-content">
//             <h3>Fletes Aéreos</h3>
//             <p className="p-breve">
//               El transporte aéreo es rápido y seguro, ideal para cumplir con los
//               plazos de la cadena de suministro.
//             </p>
//             <p className="p-completo">
//               El transporte aéreo es seguro, permitiendo cubrir grandes
//               distancias de manera rápida y eficiente ideal para cumplir con los
//               plazos en la cadena de suministro. <br /> CONSOLIDADOS - CHARTERS
//               - CARGAS DE PROYECTO - SEA/AIR - AIR/AIR - MULTIMODAL.
//             </p>

//             <a href="#contacto" className="contact-btn">
//               CONTACTANOS
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SolucionTransporte;

import { useState } from "react";
import "./SolucionTransporte.css";
import imgT1 from "../../assets/transporte/terrestre.webp";
import imgT2 from "../../assets/transporte/maritimo.webp";
import imgT3 from "../../assets/transporte/aereo.webp";

// Modal
import img1 from "../../assets/transporte/2.png";
import img2 from "../../assets/transporte/1.png";
import img3 from "../../assets/transporte/reffer.png";

const SolucionTransporte = () => {
  const [isMaritimoOpen, setIsMaritimoOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Estado para el carrusel

  const toggleMaritimo = () => {
    setIsMaritimoOpen(!isMaritimoOpen);
  };

  // Datos de los tipos de contenedores
  const contenedores = [
    {
      titulo: "Contenedor 20' Estándar",
      imagen: img1,
      medidas: "6.06 m x 2.44 m x 2.59 m",
      volumen: "33 m³",
    },
    {
      titulo: "Contenedor 40' High Cube",
      imagen: img2,
      medidas: "12.19 m x 2.44 m x 2.89 m",
      volumen: "67 m³",
    },
    {
      titulo: "Contenedor Refrigerado",
      imagen: img3,
      medidas: "12.19 m x 2.44 m x 2.59 m",
      volumen: "60 m³",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === contenedores.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? contenedores.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="solucion-transporte" id="solucion-transporte">
      <div className="transporte-cards">
        <h2>Soluciones Integradas de Transporte</h2>

        {/* Fletes Terrestres */}
        <div
          className="card"
          data-aos="fade-left"
          data-aos-delay="200"
          style={{ backgroundImage: `url(${imgT1})` }}
        >
          <div className="card-content">
            <h3>Fletes Terrestres - LTL o FTL</h3>
            <p className="p-breve">
              Ofrecemos transporte terrestre de mercancías tanto a nivel
              nacional como internacional.
            </p>
            <p className="p-completo">
              El envío terrestre es la alternativa más utilizada dentro del
              transporte de mercancías, preferida por las distancias cortas y
              cargas especiales (IMO – sobredimensionadas). Es también el
              transporte de menor costo por lo que puede ajustarse a un
              presupuesto limitado.
            </p>

            <a href="#contacto" className="contact-btn">
              CONTACTANOS
            </a>
          </div>
        </div>

        {/* Fletes Marítimos */}
        <div
          className="card"
          data-aos="fade-right"
          data-aos-delay="200"
          style={{ backgroundImage: `url(${imgT2})` }}
        >
          <div className="card-content">
            <h3>Fletes Marítimos</h3>
            <p className="p-breve">
              Ofrecemos transporte marítimo seguro y global para importar y
              exportar mercancías.
            </p>
            <p className="p-completo">
              El transporte marítimo es crucial para el comercio internacional,
              representando más del 80% de las importaciones y exportaciones. En
              <strong> M.I Logistica</strong> optimizamos costos y tiempos de
              tránsito con las principales líneas marítimas. Somos expertos en
              el manejo de cargas peligrosas, sobredimensionadas, refrigeradas y
              secas.
            </p>

            {/* Botón para abrir el modal de contenedores */}
            <button onClick={toggleMaritimo} className="expand-btn">
              {isMaritimoOpen
                ? "Cerrar Contenedores"
                : "Ver Tipos de Contenedores"}
            </button>

            <a href="#contacto" className="contact-btn">
              CONTACTANOS
            </a>
          </div>
        </div>

        {/* Modal de contenedores */}
        {isMaritimoOpen && (
          <div className="modal active">
            <div className="modal-content">
              <h2>Tipos de Contenedores Marítimos</h2>
              <div className="carousel-container">
                {/* Carrusel de imágenes y datos */}
                <button onClick={prevImage} className="carousel-btn-prev">
                  &#8592;
                </button>
                <div className="carousel-content">
                  <img
                    src={contenedores[currentImageIndex].imagen}
                    alt="Contenedor"
                    className="carousel-image"
                  />
                  <h3>{contenedores[currentImageIndex].titulo}</h3>
                  <p>
                    <strong>Medidas:</strong>{" "}
                    {contenedores[currentImageIndex].medidas}
                  </p>
                  <p>
                    <strong>Volumen:</strong>{" "}
                    {contenedores[currentImageIndex].volumen}
                  </p>
                </div>
                <button onClick={nextImage} className="carousel-btn-next">
                  &#8594;
                </button>
              </div>
              <button onClick={toggleMaritimo} className="close-btn-card">
                Cerrar
              </button>
            </div>
          </div>
        )}

        {/* Fletes Aéreos */}
        <div
          className="card"
          data-aos="fade-left"
          data-aos-delay="200"
          style={{ backgroundImage: `url(${imgT3})` }}
        >
          <div className="card-content">
            <h3>Fletes Aéreos</h3>
            <p className="p-breve">
              El transporte aéreo es rápido y seguro, ideal para cumplir con los
              plazos de la cadena de suministro.
            </p>
            <p className="p-completo">
              El transporte aéreo es seguro, permitiendo cubrir grandes
              distancias de manera rápida y eficiente ideal para cumplir con los
              plazos en la cadena de suministro. <br /> CONSOLIDADOS - CHARTERS
              - CARGAS DE PROYECTO - SEA/AIR - AIR/AIR - MULTIMODAL.
            </p>

            <a href="#contacto" className="contact-btn">
              CONTACTANOS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolucionTransporte;

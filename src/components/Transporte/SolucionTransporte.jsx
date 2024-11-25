// import "./SolucionTransporte.css";
// import imgT1 from "../../assets/transporte/terrestre.webp";
// import imgT2 from "../../assets/transporte/maritimo.webp";
// import imgT3 from "../../assets/transporte/aereo.webp";

// const SolucionTransporte = () => {
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

//             <a href="#contacto" className="contact-btn">
//               CONTACTANOS
//             </a>
//           </div>
//         </div>

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

// import { useState } from "react";
// import "./SolucionTransporte.css";
// import imgT1 from "../../assets/transporte/terrestre.webp";
// import imgT2 from "../../assets/transporte/maritimo.webp";
// import imgT3 from "../../assets/transporte/aereo.webp";

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

//             {/* Botón para desplegar la lista de contenedores */}
//             <button onClick={toggleMaritimo} className="expand-btn">
//               {isMaritimoOpen
//                 ? "Ocultar Contenedores"
//                 : "Ver Tipos de Contenedores"}
//             </button>

//             {/* Contenido desplegable */}
//             {isMaritimoOpen && (
//               <div className="contenedores-list">
//                 <ul>
//                   <li>
//                     <strong>Contenedor 20 pies</strong> - Volumen: 33 m³ -
//                     Largo: 6 m, Ancho: 2.44 m, Alto: 2.59 m
//                   </li>
//                   <li>
//                     <strong>Contenedor 40 pies</strong> - Volumen: 67 m³ -
//                     Largo: 12.19 m, Ancho: 2.44 m, Alto: 2.59 m
//                   </li>
//                   <li>
//                     <strong>Contenedor 40 pies High Cube</strong> - Volumen: 76
//                     m³ - Largo: 12.19 m, Ancho: 2.44 m, Alto: 2.89 m
//                   </li>
//                   <li>
//                     <strong>Contenedor 45 pies</strong> - Volumen: 85 m³ -
//                     Largo: 13.72 m, Ancho: 2.44 m, Alto: 2.59 m
//                   </li>
//                 </ul>
//               </div>
//             )}

//             <a href="#contacto" className="contact-btn">
//               CONTACTANOS
//             </a>
//           </div>
//         </div>

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

const SolucionTransporte = () => {
  const [isMaritimoOpen, setIsMaritimoOpen] = useState(false);

  const toggleMaritimo = () => {
    setIsMaritimoOpen(!isMaritimoOpen);
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
              <ul>
                <li>
                  <strong>Contenedor 20 pies</strong> - Volumen: 33 m³ - Largo:
                  6 m, Ancho: 2.44 m, Alto: 2.59 m
                </li>
                <li>
                  <strong>Contenedor 40 pies</strong> - Volumen: 67 m³ - Largo:
                  12.19 m, Ancho: 2.44 m, Alto: 2.59 m
                </li>
                <li>
                  <strong>Contenedor 40 pies High Cube</strong> - Volumen: 76 m³
                  - Largo: 12.19 m, Ancho: 2.44 m, Alto: 2.89 m
                </li>
                <li>
                  <strong>Contenedor 45 pies</strong> - Volumen: 85 m³ - Largo:
                  13.72 m, Ancho: 2.44 m, Alto: 2.59 m
                </li>
              </ul>
              <button onClick={toggleMaritimo} className="close-btn">
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

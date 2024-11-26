import { useState } from "react";
import "./SolucionTransporte.css";
import imgT1 from "../../assets/transporte/terrestre.webp";
import imgT2 from "../../assets/transporte/maritimo.webp";
import imgT3 from "../../assets/transporte/aereo.webp";

// Modal
// IMG STAND
import img1 from "../../assets/transporte/1ST1.png";
import img4 from "../../assets/transporte/2ST2.png";
// IMG Flat
import img2 from "../../assets/transporte/1FL1.webp";
import img5 from "../../assets/transporte/2FL2.webp";
// IMG OT
import img6 from "../../assets/transporte/3.png";
// IMG REEFER
import img3 from "../../assets/transporte/reffer.png";

const SolucionTransporte = () => {
  const [isMaritimoOpen, setIsMaritimoOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Estado para el carrusel

  const toggleMaritimo = () => {
    setIsMaritimoOpen(!isMaritimoOpen);
  };

  // Datos de los tipos de contenedores
  const contenedores = [
    // Cont. Standar
    {
      titulo: "Standard 20 DC",
      imagen: img1,
      medidas: "Longitud: 5,900 - Ancho: 2,352 - Altura: 2,395",
      apertura: "N/A",
      peso: "Max Bruto: 32,500 - Tara: 2,370 - Cap. Max: 30,130",
      capacidad: "33.2 cbm / 1,172 cbft",
    },
    {
      titulo: "Standard 40 DC",
      imagen: img4,
      medidas: "Longitud: 12,032 - Ancho: 2,352 - Altura: 2,395",
      apertura: "N/A",
      peso: "Max Bruto: 32,500 - Tara: 3,750 - Cap. Max: 28,750",
      capacidad: "67.7 cbm / 2,390 cbft",
    },
    {
      titulo: "Standard 40 HC",
      imagen: img4,
      medidas: "Longitud: 12,032 - Ancho: 2,350 - Altura: 2,700",
      apertura: "N/A",
      peso: "Max. Bruto: 32,500 - Tara: 3,900 - Cap. Max: 28,600",
      capacidad: "76.3 cbm / 2,694 cbft",
    },

    // Cont. Flat
    {
      titulo: "Flatrack 20 FR ",
      imagen: img2,
      medidas:
        "Longitud Min.: 5,638 - Ancho Piso: 2,438 - Ancho Min.: 2,194 - Altura: 2,233 - Altura Fondo: 370",
      apertura: "N/A",
      peso: "Max. Bruto: 45,000 - Tara: 2,900 - Cap. Max: 42,100",
      capacidad: "N/A",
    },
    {
      titulo: "Flatrack 40 FR / Platform 40 ",
      imagen: img5,
      medidas:
        "Longitud Min.: 11,652 - Ancho Piso: 2,347 - Ancho Min.: 2,245 - Altura: 2,265 - Altura Fondo: 648",
      apertura: "N/A",
      peso: "Max. Bruto: 55,000	 - Tara: 5,900 - Cap. Max: 49,100",
      capacidad: "N/A",
    },

    // Cont. OT
    {
      titulo: "Open Tops 20",
      imagen: img6,
      medidas: "Longitud: 5,895 - Ancho: 2,350 - Altura: 2,340",
      apertura: "Ancho: 2,23 - Longitud: 5,338",
      peso: "Max Bruto: 32,500 - Tara: 2,450 - Cap. Max: 30,050",
      capacidad: "32.5 cbm / 1,149 cbft",
    },
    {
      titulo: "Open Tops 40",
      imagen: img6,
      medidas: "Longitud: 12,029 - Ancho: 2,350 - Altura: 2,380",
      apertura: "Ancho: 2,23 - Longitud: 11,552",
      peso: "Max Bruto: 32,500 - Tara: 4,050 - Cap. Max: 28,450",
      capacidad: "66.8 cbm / 2,359 cbft",
    },

    // Cont. Reefer
    {
      titulo: "Reefer 20 RF",
      imagen: img3,
      medidas: "Longitud: 5,450 - Ancho: 2,280 - Altura: 2,159",
      apertura: "N/A",
      peso: "Max. Bruto: 32,000 - Tara: 2,860 - Cap. Max: 29,140",
      capacidad: "28,1 cbm / 1,006 cbft",
    },
    {
      titulo: "Reefer 40 RF",
      imagen: img3,
      medidas: "Longitud: 11,599 - Ancho: 2,290 - Altura: 2,425",
      apertura: "N/A",
      peso: "Max. Bruto: 34,000 - Tara: 4,420 - Cap. Max: 29,580",
      capacidad: "67.7 cbm / 2,387 cbft",
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
                    <strong>Dimensiones Internas (Milímetros):</strong>{" "}
                    {contenedores[currentImageIndex].medidas}
                  </p>
                  <p>
                    <strong>Peso (Kilogramos):</strong>{" "}
                    {contenedores[currentImageIndex].peso}
                  </p>
                  <p>
                    <strong>Capacidad:</strong>{" "}
                    {contenedores[currentImageIndex].capacidad}
                  </p>
                  <p>
                    <strong>Apertura Superior:</strong>{" "}
                    {contenedores[currentImageIndex].apertura}
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

// import "./Banner.css";
// import videoSrc from "../../assets/videos/videoBanner.mp4";

// const Banner = () => {
//   return (
//     <section className="banner" id="banner">
//       {/* Contenedor de texto centrado */}
//       <div className="banner-content">
//         <div className="banner-text">
//           <h1>M.I Logística y Comercio Exterior</h1>
//           <h2>
//             Más de 30 años de experiencia en Comercio Exterior en Argentina
//           </h2>
//           <h3>Soluciones logísticas integrales y personalizadas</h3>
//           <div className="cta-container">
//             <a href="#contacto" className="cta-button">
//               Contáctanos
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* El video se manejará a través de CSS como fondo */}
//       <video className="video-background" autoPlay loop muted>
//         <source src={videoSrc} type="video/mp4" />
//         Tu navegador no soporta la etiqueta de video.
//       </video>
//     </section>
//   );
// };
// import img1 from "../../assets/img-empresa/img4.jpeg";
// import img2 from "../../assets/img-empresa/img5.jpeg";
// export default Banner;

import { useEffect, useState } from "react";
import "./Banner.css";
import videoSrc from "../../assets/videos/videoBanner.mp4";
import img1 from "../../assets/img-empresa/img4.jpeg";
import img2 from "../../assets/img-empresa/img5.jpeg";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Comienza en la primera imagen
  const [isTransitioning, setIsTransitioning] = useState(false); // Estado para manejar la transición
  const images = [img1, img2]; // Arreglo de imágenes

  useEffect(() => {
    const interval = setInterval(
      () => {
        setIsTransitioning(true); // Inicia la transición cuando cambia la imagen
        setCurrentIndex((prevIndex) => {
          if (prevIndex === images.length - 1) {
            return images.length; // Después de la última imagen, mostramos el video
          } else if (prevIndex === images.length) {
            return 0; // Después del video, volvemos a las imágenes
          }
          return prevIndex + 1; // Siguiente imagen
        });
      },
      currentIndex === images.length ? 16000 : 5000
    ); // Si el índice es el del video, dura más

    return () => clearInterval(interval); // Limpiar el intervalo cuando se desmonte el componente
  }, [currentIndex, images.length]);

  // Esto asegurará que se detenga la transición después de un cierto tiempo
  useEffect(() => {
    if (isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(false); // Termina la transición después de 1 segundo (tiempo de la transición)
      }, 1000); // Debe coincidir con la duración de la transición en el CSS
    }
  }, [isTransitioning]);

  return (
    <section className="banner" id="banner">
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

      <div className="carousel">
        {currentIndex === 0 && (
          <img
            className={`carousel-image ${isTransitioning ? "" : "active"}`}
            src={images[0]}
            alt="Imagen 1"
          />
        )}
        {currentIndex === 1 && (
          <img
            className={`carousel-image ${isTransitioning ? "" : "active"}`}
            src={images[1]}
            alt="Imagen 2"
          />
        )}
        {currentIndex === images.length && (
          <video
            className={`video-background ${isTransitioning ? "" : "active"}`}
            autoPlay
            loop
            muted
          >
            <source src={videoSrc} type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        )}
      </div>
    </section>
  );
};

export default Banner;

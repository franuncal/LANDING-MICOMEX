import { useEffect, useState } from "react";
import "./Banner.css";
import videoSrc from "../../assets/videos/videoBanner.mp4";
import img1 from "../../assets/img-empresa/img4.jpeg";
import img2 from "../../assets/img-empresa/img5.jpeg";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Comenzamos con las imágenes
  const [isMobile, setIsMobile] = useState(false); // Estado para saber si es móvil
  const images = [img1, img2];

  // Verificar el tamaño de la pantalla para determinar si es móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Definir como móvil si el ancho es <= 768px
    };

    handleResize(); // Verificar al cargar la página
    window.addEventListener("resize", handleResize); // Actualizar en caso de cambio de tamaño

    return () => window.removeEventListener("resize", handleResize); // Limpiar el listener
  }, []);

  useEffect(() => {
    if (!isMobile) {
      // Si no es móvil, solo cambiamos entre las imágenes primero y luego el video
      const interval = setInterval(
        () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length + 1)); // Se debe sumar 1 por el video
        },
        currentIndex === 0 ? 14000 : 5000
      ); // El video tiene un tiempo mayor

      return () => clearInterval(interval);
    } else {
      // En pantallas móviles, las imágenes cambian cada 5 segundos
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [currentIndex, images.length, isMobile]);

  // Manejamos un pequeño retraso antes de mostrar el video después de las imágenes
  useEffect(() => {
    if (!isMobile) {
      const timer = setTimeout(() => {
        setCurrentIndex(0); // Cambiar al video después de 10 segundos (se muestran las 2 imágenes antes)
      }, 10000); // 10 segundos para que se vean las imágenes primero

      return () => clearTimeout(timer);
    }
  }, [isMobile]);

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
        {isMobile ? (
          // En pantallas móviles, mostramos ambas imágenes
          <>
            <img className="carousel-image" src={images[0]} alt="Imagen 1" />
            <img className="carousel-image" src={images[1]} alt="Imagen 2" />
          </>
        ) : currentIndex === 0 ? (
          // Video solo en pantallas grandes, luego de que se muestren las imágenes
          <video className="video-background" autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        ) : currentIndex === 1 ? (
          <img className="carousel-image" src={images[0]} alt="Imagen 1" />
        ) : (
          <img className="carousel-image" src={images[1]} alt="Imagen 2" />
        )}
      </div>
    </section>
  );
};

export default Banner;

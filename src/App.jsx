import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Nosotros from "./components/Nosotros/Nosotros";
import SolucionTransporte from "./components/Transporte/SolucionTransporte";
import TransporteEspecial from "./components/TranporteEspecial/TransporteEspecial";
import QueOfrecemos from "./components/Servicios/QueOfrecemos";
import Adicionales from "./components/Adicionales/Adicionales";
import EmpresasQueConfian from "./components/EmpresasQueConfian/EmpresasQueConfian";
import Ventajas from "./components/Ventajas/Ventajas";
import Contact from "./components/Contacto/Contact";
import Footer from "./components/Footer/Footer";
// import { ParallaxProvider } from "react-scroll-parallax";

import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación
      once: true, // Para que la animación solo se ejecute una vez
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <Nosotros />
      <QueOfrecemos />
      <SolucionTransporte />
      <TransporteEspecial />
      <Adicionales />
      <Ventajas />
      <EmpresasQueConfian />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

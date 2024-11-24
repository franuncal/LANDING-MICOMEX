// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

import "./App.css";

function App() {
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

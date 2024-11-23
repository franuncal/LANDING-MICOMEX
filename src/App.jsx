import Navbar from "./componenets/Navbar/Navbar";
import Banner from "./componenets/Banner/Banner";
import Nosotros from "./componenets/Nosotros/Nosotros";
import SolucionTransporte from "./componenets/Transporte/SolucionTransporte";
import TransporteEspecial from "./componenets/TranporteEspecial/TransporteEspecial";
import QueOfrecemos from "./componenets/Servicios/QueOfrecemos";
import Adicionales from "./componenets/Adicionales/Adicionales";
import EmpresasQueConfian from "./componenets/EmpresasQueConfian/EmpresasQueConfian";
import Ventajas from "./componenets/Ventajas/Ventajas";
import Contact from "./componenets/Contacto/Contact";
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
      {/* Otros componentes */}
    </div>
  );
}

export default App;

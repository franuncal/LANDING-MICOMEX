import "./SolucionTransporte.css";
import imgT1 from "../../assets/transporte/terrestre.png";
import imgT2 from "../../assets/transporte/maritimo.png";
import imgT3 from "../../assets/transporte/aereo.png";

const SolucionTransporte = () => {
  return (
    <section className="solucion-transporte" id="solucion-transporte">
      <div className="transporte-cards">
        <h2>Soluciones Integradas de Transporte</h2>

        {/* Fletes Terrestres */}
        <div className="card" style={{ backgroundImage: `url(${imgT1})` }}>
          <div className="card-content">
            <h3>Fletes Terrestres - LTL o FTL</h3>
            <p className="p-breve">
              Ofrecemos transporte terrestre de mercancías (LTL y FTL) tanto a
              nivel nacional como internacional.
            </p>
            <p className="p-completo">
              El envío terrestre es la alternativa más utilizada dentro del
              transporte de mercancías, preferida por las distancias cortas y
              cargas especiales (IMO – sobredimensionadas). Es también el
              transporte de menor costo por lo que puede ajustarse a un
              presupuesto limitado.
            </p>

            <a href="#contacto" className="contact-btn">
              CONOCE MÁS
            </a>
          </div>
        </div>

        {/* Fletes Marítimos */}
        <div className="card" style={{ backgroundImage: `url(${imgT2})` }}>
          <div className="card-content">
            <h3>Fletes Marítimos</h3>
            <p className="p-breve">
              Ofrecemos transporte marítimo seguro y global para importar y
              exportar mercancías.
            </p>
            <p className="p-completo">
              Por su eficiencia y economía, el transporte marítimo es una de las
              formas más comunes de transportar productos a nivel mundial,
              representando más del 80% del comercio internacional. Los fletes
              marítimos son esenciales para la importación y exportación de
              mercancías debido a su seguridad y cobertura global. En MI
              LOGISTICA Y COMERCIO EXTERIOR contamos con acuerdos con las
              principales líneas maritimas para optimizar costos y tiempos de
              transito acorde a lo que tu carga necesita. Somos especialistas en
              el manejo de mercaderia peligrosas y cargas de proyecto. Asimismo
              carga seca, refrigerada y sobredimensionada.
            </p>

            <a href="#contacto" className="contact-btn">
              CONOCE MÁS
            </a>
          </div>
        </div>

        {/* Fletes Aéreos */}
        <div className="card" style={{ backgroundImage: `url(${imgT3})` }}>
          <div className="card-content">
            <h3>Fletes Aéreos</h3>
            <p className="p-breve">
              El transporte aéreo es rápido y seguro, ideal para cumplir con los
              plazos de la cadena de suministro.
            </p>
            <p className="p-completo">
              El transporte aéreo es seguro, permitiendo cubrir grandes
              distancias de manera rápida y eficiente ideal para cumplir con los
              plazos en la cadena de suministro. CONSOLIDADOS - CHARTERS -
              CARGAS PROYECTO - SEA/AIR - AIR/AIR - MULTIMODAL
            </p>

            <a href="#contacto" className="contact-btn">
              CONOCE MÁS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolucionTransporte;

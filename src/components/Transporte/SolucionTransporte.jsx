import "./SolucionTransporte.css";
import imgT1 from "../../assets/transporte/terrestre.webp";
import imgT2 from "../../assets/transporte/maritimo.webp";
import imgT3 from "../../assets/transporte/aereo.webp";

const SolucionTransporte = () => {
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
              CONOCE MÁS
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

            <a href="#contacto" className="contact-btn">
              CONOCE MÁS
            </a>
          </div>
        </div>

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
              - CARGAS PROYECTO - SEA/AIR - AIR/AIR - MULTIMODAL.
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

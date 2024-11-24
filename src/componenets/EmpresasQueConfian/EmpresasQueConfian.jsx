import "./EmpresasQueConfian.css";
import img from "../../assets/logos/denver.png";
import img1 from "../../assets/logos/lumi.svg";
import img2 from "../../assets/logos/remolac.png";
import img3 from "../../assets/logos/parme.jpg";
import img4 from "../../assets/logos/wdlogo.jpg";
import img5 from "../../assets/logos/geva.png";
import img6 from "../../assets/logos/bosque2.svg";
import img7 from "../../assets/logos/restinga.png";
import img8 from "../../assets/logos/argenL.png";
import img9 from "../../assets/logos/bsf1.png";
import img10 from "../../assets/logos/bucki.webp";

const EmpresasQueConfian = () => {
  const logos = [
    { src: img, alt: "Laboratorio Denver Farma" },
    { src: img1, alt: "Lumilagro" },
    { src: img2, alt: "Ramolac" },
    { src: img3, alt: "La Parmesana" }, //Cambiar
    { src: img4, alt: "W.D SRL" },
    { src: img5, alt: "Distribuidora GEVA" },
    { src: img6, alt: "Bosque Gin" },
    { src: img7, alt: "Restinga Gin" },
    { src: img8, alt: "Argensun Food" },
    { src: img9, alt: "BSF" },
    { src: img10, alt: "Buckingham" },
  ];

  return (
    <section className="brand-section">
      <h2 className="brand-title">Empresas que nos eligen</h2>
      <div className="brand-grid">
        {logos.map((logo, index) => (
          <div className="brand-item" key={index}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmpresasQueConfian;

import "./EmpresasQueConfian.css";
import img from "../../assets/logos/denver.webp";
import img1 from "../../assets/logos/lumi.webp";
import img2 from "../../assets/logos/remolac.webp";
import img3 from "../../assets/logos/parme.webp";
import img4 from "../../assets/logos/wd1.webp";
import img6 from "../../assets/logos/bosque2.webp";
import img7 from "../../assets/logos/restinga.webp";
import img8 from "../../assets/logos/argenL.webp";
import img9 from "../../assets/logos/bsf1.webp";
import img10 from "../../assets/logos/bucki.webp";
import img11 from "../../assets/logos/merle.webp";
import img12 from "../../assets/logos/biagro.png";

const EmpresasQueConfian = () => {
  const logos = [
    { src: img, alt: "Laboratorio Denver Farma" },
    { src: img1, alt: "Lumilagro" },
    { src: img2, alt: "Ramolac" },
    { src: img12, alt: "BIAGRO" },
    { src: img9, alt: "BSF" },
    { src: img6, alt: "Bosque Gin" },
    { src: img7, alt: "Restinga Gin" },
    { src: img8, alt: "Argensun Food" },
    { src: img10, alt: "Buckingham" },
    { src: img4, alt: "W.D SRL" },
    { src: img11, alt: "Gin Merle" },
    { src: img3, alt: "La Parmesana" },
  ];

  return (
    <section className="brand-section">
      <h2 className="brand-title">Empresas Que Nos Eligen</h2>
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

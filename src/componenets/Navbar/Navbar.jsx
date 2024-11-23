import { useState } from "react";
import "./Navbar.css";
import img from "../../assets/img/M.I logistica.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={img} alt="M.I Logistica Logo" />
      </div>

      {/* Menú Hamburguesa en pantallas pequeñas */}
      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        {menuOpen ? (
          <i className="fas fa-times"></i> // Icono X
        ) : (
          <i className="fas fa-bars"></i> // Icono Hamburguesa
        )}
      </button>

      {/* Menú */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li>
            <a href="#nosotros" onClick={() => setMenuOpen(false)}>
              Quiénes somos
            </a>
          </li>
          <li>
            <a href="#solucion-transporte" onClick={() => setMenuOpen(false)}>
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="contact-link"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

import "./Footer.css";
import { Link } from "react-router-dom"; // Importamos Link para manejar rutas

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; 2024 <strong>M.I Comercio Internacional</strong> || Todos los
          derechos reservados.
        </p>
        <p>
          <Link to="/privacy-policy" className="footer-link">
            Política de Privacidad
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

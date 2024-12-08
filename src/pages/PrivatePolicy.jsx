import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./PrivatePolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Política de Privacidad</h1>
      <p>
        En Mi Logística Internacional, nos comprometemos a proteger la
        privacidad de los usuarios que visitan nuestro sitio web y nos contactan
        a través de nuestro formulario. Esta política explica cómo recopilamos,
        usamos, almacenamos y protegemos la información personal proporcionada
        por los usuarios.
      </p>
      <h2>1. Responsable del tratamiento de los datos</h2>
      <p>
        El responsable del manejo de los datos personales es Mi Logística
        Internacional, ubicada en Mercedes, Buenos Aires, Argentina. Si tiene
        preguntas relacionadas con esta política de privacidad, puede
        contactarnos en:{" "}
        <a href="mailto:mariazenga@milogisticainternacional.com">
          mariazenga@milogisticainternacional.com
        </a>
      </p>
      <h2>2. Datos recopilados</h2>
      <p>
        A través de nuestro formulario de contacto, recopilamos los siguientes
        datos personales:
      </p>
      <ul>
        <li>Nombre</li>
        <li>Dirección de correo electrónico</li>
        <li>Teléfono</li>
        <li>Nombre de la empresa</li>
        <li>Tipo de servicio consultado</li>
        <li>Mensaje del usuario</li>
      </ul>
      <h2>3. Finalidad del tratamiento de los datos</h2>
      <p>
        Los datos proporcionados serán utilizados exclusivamente para responder
        consultas realizadas a través del formulario de contacto en nuestro
        sitio web.
      </p>
      <h2>4. Uso de terceros</h2>
      <p>
        Utilizamos EmailJS como servicio externo para gestionar el envío de los
        formularios. EmailJS procesa los datos únicamente para facilitar el
        envío del mensaje al destinatario correspondiente.
      </p>
      <h2>5. Almacenamiento de datos</h2>
      <p>
        Los datos personales serán almacenados durante un período de 6 meses a
        partir de la fecha de su envío, después del cual serán eliminados de
        forma segura.
      </p>
      <h2>6. Derechos del usuario</h2>
      <p>Los usuarios tienen derecho a:</p>
      <ul>
        <li>Acceder a los datos personales que hemos recopilado.</li>
        <li>Solicitar la corrección o actualización de sus datos.</li>
        <li>Solicitar la eliminación de sus datos personales.</li>
      </ul>
      <p>
        Para ejercer estos derechos, puede contactarnos a través de{" "}
        <a href="mailto:mariazenga@milogisticainternacional.com">
          mariazenga@milogisticainternacional.com
        </a>
        .
      </p>
      <h2>7. Seguridad de los datos</h2>
      <p>
        Adoptamos las medidas técnicas y organizativas necesarias para proteger
        la información personal contra accesos no autorizados, alteraciones o
        pérdidas.
      </p>
      <h2>8. Cambios en esta política</h2>
      <p>
        Nos reservamos el derecho de actualizar esta política de privacidad en
        cualquier momento. Las actualizaciones serán publicadas en esta misma
        página.
      </p>

      {/* Botón para volver al inicio */}
      <div className="back-to-home">
        <Link to="/" className="btn-back">
          Volver al inicio
        </Link>
      </div>

      {/* Agregar el Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

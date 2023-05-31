import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import styles from "../../styles/components/Navbar.module.css";
import logo from "../../imagens/logo-sem-texto.png";
import Container from "./Container";

function Navbar() {
  return (
    <nav>
      <Container customClass="max-width">
        <div className={styles.logo}>
          <img src={logo} alt="Logo Construction Rondan" />
        </div>

        <ul className={styles.navList}>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <ScrollLink to="aboutId" smooth={true} duration={500} offset={-150}>
              à propos
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="servicesId"
              smooth={true}
              duration={500}
              offset={-110}
            >
              Service
            </ScrollLink>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;

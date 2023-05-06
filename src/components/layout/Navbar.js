import { Link } from "react-router-dom";

import styles from "../../styles/components/Navbar.module.css";
import logo from "../../imagens/logo.png";
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
            <Link to="/about">à propos</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
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

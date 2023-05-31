import { Link } from "react-router-dom";
import styles from "../../styles/components/Footer.module.css";
import bgFooter from "../../imagens/maçon1.jpg";
import { MdLocationOn, MdMail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookSquare } from "react-icons/fa";
import logo from "../../imagens/logo-sem-texto.png";

function Footer() {
  return (
    <footer>
      <div
        className={styles.data}
        style={{
          backgroundImage: `url(${bgFooter})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: " center ",
        }}
      >
        <div className={styles.data_block}>
          <div className={styles.data_description}>
            <div>
              <img src={logo} alt="Logo Construction Rondan" />
            </div>
            <h3>
              Depuis plus de 20 ans, travaillant avec excellence et ponctualité,
              toujours axé sur la satisfaction du client.
            </h3>
          </div>
          <div className={styles.data_contact}>
            <h2>Contact</h2>
            <ul>
              <li>
                <MdLocationOn />
                Bouleurs 77580 Seine-et-Marne
              </li>
              <li>
                <FaPhoneAlt />
                +33 6.31.66.99.11
              </li>
              <li>
                <MdMail />
                <Link to={"malito:rondan_construction@hotmail.com"}>
                  rondan_construction@hotmail.com
                </Link>
              </li>
              <li>
                <FaFacebookSquare />
                <a
                  href="https://www.facebook.com/Rondanconstruction"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        <div className={styles.copy_text}>
          <p>Copyright© 2023 Rondan Construction</p>
          <p>Site internet réalisé par Gislaine de Aguiar </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

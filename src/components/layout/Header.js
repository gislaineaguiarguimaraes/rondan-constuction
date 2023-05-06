import styles from "../../styles/components/Header.module.css";
import { Link } from "react-router-dom";

import { MdLocationOn, MdMail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookSquare } from "react-icons/fa";

function Header() {
  return (
    <header>
      <ul className={styles.dataList}>
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
    </header>
  );
}

export default Header;

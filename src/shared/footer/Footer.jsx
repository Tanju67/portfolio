import styles from "./Footer.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { navData } from "../../data/data";

function Footer() {
  const year = new Date().getFullYear();
  const [searchParams] = useSearchParams();
  const selectedLan =
    searchParams.get("lan") === null ? "de" : searchParams.get("lan");
  const filter = selectedLan === "de" ? "german" : "english";

  const data = navData[filter];
  return (
    <div className={styles.footer}>
      <div className={styles.socialIcons}>
        <Link to={"https://github.com/Tanju67"} target="_blank">
          <FaGithub />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/tanju-%C3%B6zer-14b1b9231/"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
      </div>
      <ul className={styles.navMenu}>
        <li>
          <NavLink to={`/about?lan=${selectedLan}`}>{data[0]}</NavLink>
        </li>
        <li>
          <NavLink to={`/projects?lan=${selectedLan}`}>{data[1]}</NavLink>
        </li>
        <li>
          <NavLink to={`/contact?lan=${selectedLan}`}>{data[2]}</NavLink>
        </li>
      </ul>
      <div className={styles.copyright}>
        <span>© {year}, Tanju Özer</span>
      </div>
    </div>
  );
}

export default Footer;

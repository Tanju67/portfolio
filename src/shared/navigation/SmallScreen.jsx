import { NavLink, useSearchParams } from "react-router-dom";
import styles from "./SmallScreen.module.css";
import { navData } from "../../data/data";

function SmallScreen({ showModal }) {
  const [searchParams] = useSearchParams();
  const selectedLan =
    searchParams.get("lan") === null ? "de" : searchParams.get("lan");
  const filter = selectedLan === "de" ? "german" : "english";

  const data = navData[filter];
  return (
    <ul className={styles.navMenu}>
      <li onClick={() => showModal(false)} className={styles.about}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to={`/about?lan=${selectedLan}`}
        >
          {data[0]}
        </NavLink>
      </li>

      <li onClick={() => showModal(false)} className={styles.project}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to={`/projects?lan=${selectedLan}`}
        >
          {data[1]}
        </NavLink>
      </li>

      <li onClick={() => showModal(false)} className={styles.contact}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to={`/contact?lan=${selectedLan}`}
        >
          {data[2]}
        </NavLink>
      </li>
    </ul>
  );
}

export default SmallScreen;

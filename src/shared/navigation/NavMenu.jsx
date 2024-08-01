import { NavLink, useSearchParams } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import styles from "./NavMenu.module.css";
import Language from "./Language";
import { navData } from "../../data/data";

function NavMenu({ showModal }) {
  const [searchParams] = useSearchParams();
  const selectedLan =
    searchParams.get("lan") === null ? "de" : searchParams.get("lan");
  const filter = selectedLan === "de" ? "german" : "english";
  const data = navData[filter];
  return (
    <>
      <ul className={styles.navMenu}>
        <li className={styles.about}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={`/about?lan=${selectedLan}`}
          >
            {data[0]}
          </NavLink>
        </li>

        <li className={styles.project}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={`/projects?lan=${selectedLan}`}
          >
            {data[1]}
          </NavLink>
        </li>

        <li className={styles.contact}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={`/contact?lan=${selectedLan}`}
          >
            {data[2]}
          </NavLink>
        </li>
        <li>
          <Language />
        </li>
      </ul>

      <ul className={styles.menuIcon}>
        <li>
          <Language />
        </li>
        <li onClick={() => showModal(true)}>
          <IoMenuSharp />
        </li>
      </ul>
    </>
  );
}

export default NavMenu;

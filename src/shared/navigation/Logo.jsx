import { Link, useSearchParams } from "react-router-dom";
import styles from "./Logo.module.css";
import logo from "../../assets/logo.png";
import splash from "../../assets/splash.svg";

function Logo() {
  const [searchParams] = useSearchParams();
  const selectedLan =
    searchParams.get("lan") === null ? "de" : searchParams.get("lan");
  return (
    <Link to={`/?lan=${selectedLan}`} className={styles.logo}>
      <img className={styles.splash} src={splash} alt="" />
      <img src={logo} alt="logo" />
    </Link>
  );
}

export default Logo;

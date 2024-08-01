import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ classname, children, link, target = "" }) {
  if (Link) {
    return (
      <Link className={`${styles.btn} ${classname}`} to={link} target={target}>
        {children}
      </Link>
    );
  }
  return <button className={`${styles.btn} ${classname}`}>{children}</button>;
}

export default Button;

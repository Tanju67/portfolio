import { useState } from "react";
import styles from "./Navigation.module.css";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import Modal from "../Modal";
import SmallScreen from "./SmallScreen";

function Navigation() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  return (
    <nav className={styles.nav}>
      <Logo />
      <NavMenu showModal={setModalIsVisible} />
      {modalIsVisible && (
        <Modal showModal={setModalIsVisible}>
          <SmallScreen showModal={setModalIsVisible} />
        </Modal>
      )}
    </nav>
  );
}

export default Navigation;

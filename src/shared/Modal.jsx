import { motion } from "framer-motion";
import styles from "./Modal.module.css";

function Modal({ children, showModal }) {
  return (
    <motion.div
      variants={{
        hidden: { clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" },
        show: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
      }}
      initial="hidden"
      animate="show"
      exit="hidden"
      className={styles.backdrop}
      onClick={() => {
        showModal(false);
      }}
    >
      <motion.p
        variants={{
          hidden: { clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" },
          show: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
        }}
        initial="hidden"
        animate="show"
        exit="hidden"
        className={styles.modal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <span onClick={() => showModal(false)} className={styles.clsBtn}>
          &times;
        </span>
        {children}
      </motion.p>
    </motion.div>
  );
}

export default Modal;

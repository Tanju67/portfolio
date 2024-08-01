import { Link, useSearchParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./Contact.module.css";

function Contact() {
  const [searchParams] = useSearchParams();
  const selectedLan = searchParams.get("lan");
  return (
    <div className={styles.contact}>
      <div className={styles.textBox}>
        <p>
          {selectedLan === "en"
            ? `I am looking forward to connecting with people and exploring new
          opportunities.`
            : `Ich freue mich darauf, mit Menschen in Kontakt zu kommen und neue
          Möglichkeiten.`}
        </p>
        <p>
          {selectedLan === "en"
            ? `Please reach out to me!`
            : `Bitte melden Sie sich bei mir!`}
        </p>
      </div>
      <div className={styles.contactBox}>
        <Link
          to={"https://www.linkedin.com/in/tanju-%C3%B6zer-14b1b9231/"}
          target="_blank"
        >
          <FaLinkedin />
          <span>
            {selectedLan === "en"
              ? `Connect on LinkedIn`
              : `Auf LinkedIn verbinden`}
          </span>
        </Link>
        <Link to={"https://github.com/Tanju67"} target="_blank">
          <FaGithub />
          <span>
            {selectedLan === "en" ? `Follow on GitHub` : `Auf GitHub folgen`}
          </span>
        </Link>
        <Link to={"mailto:tanju_ozer@web.de"} target="_blank">
          <MdEmail />
          <span>tanju_ozer@web.de</span>
        </Link>
      </div>
    </div>
  );
}

export default Contact;

import { useSearchParams } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import styles from "./About.module.css";
import image from "../../assets/aboutImg.jpg";
import Button from "../../shared/Button";
import { aboutPageData } from "../../data/data";

function About() {
  const [searchParams] = useSearchParams();
  const selectedLan = searchParams.get("lan");
  const filter = selectedLan === "de" ? "german" : "english";
  return (
    <div className={styles.about}>
      <div className={styles.leftSide}>
        <div className={styles.imgBox}>
          <img src={image} alt="" />
        </div>
        <div className={styles.badgeBox}>
          <h3>{selectedLan === "en" ? "Skills" : "Fähigkeiten"}</h3>
          <div className={styles.badge}>
            <img
              src="https://img.shields.io/badge/-React-61DBFB?style=flat-square&labelColor=black&logo=react&logoColor=61DBFB"
              alt="react"
            />
            <img
              src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&labelColor=black&logo=javascript&logoColor=F7DF1E"
              alt="js"
            />
            <img
              src="https://img.shields.io/badge/-HTML-E34F26?style=flat-square&labelColor=black&logo=html5&logoColor=E34F26"
              alt="HTML"
            />
            <img
              src="https://img.shields.io/badge/-CSS-1572B6?style=flat-square&labelColor=black&logo=css3&logoColor=1572B6"
              alt="CSS"
            />
            <img
              src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&labelColor=black&logo=redux&logoColor=764ABC"
              alt="redux"
            />
            <img
              src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&labelColor=black&logo=node.js&logoColor=339933"
              alt="nodejs"
            />
            <img
              src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&labelColor=black&logo=typescript&logoColor=3178C6"
              alt="ts"
            />
            <img
              src="https://img.shields.io/badge/-Express-000000?style=flat-square&labelColor=black&logo=express&logoColor=fff"
              alt=""
            />
            <img
              src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&labelColor=black&logo=mongodb&logoColor=47A248"
              alt="MongoDB"
            />
            <img
              src="https://img.shields.io/badge/-Mongoose-880000?style=flat-square&labelColor=black&logo=mongoose&logoColor=880000"
              alt="Mongoose"
            />
            <img
              src="https://img.shields.io/badge/-React_Router-F44250?style=flat-square&labelColor=black&logo=reactrouter&logoColor=white"
              alt="React Router"
            />

            <img
              src="https://img.shields.io/badge/-Next.js-black?style=flat-square&logo=next.js&logoColor=white"
              alt="Next.js"
            />
            <img
              src="https://img.shields.io/badge/-Tailwind_CSS-06B6D4?style=flat-square&labelColor=black&logo=tailwind-css&logoColor=white"
              alt="Tailwind CSS"
            />
          </div>
        </div>
        <div className={styles.btnBox}>
          <Button
            link={
              "https://drive.google.com/drive/folders/1BA1J3UC8QoLEns841WDyOlkiBx-Bb58H?usp=sharing"
            }
            target="_blank"
            classname={styles.downloadBtn}
          >
            <FaDownload />
            <span>
              {selectedLan === "en"
                ? "Download Resume"
                : "Lebenslauf herunterladen"}
            </span>
          </Button>
        </div>
      </div>
      <div className={styles.rightSide}>
        <h1>{aboutPageData.title[filter]}</h1>
        <p>{aboutPageData.p1[filter]}</p>
        <p>{aboutPageData.p2[filter]}</p>
        <p>{aboutPageData.p3[filter]}</p>
        <p>{aboutPageData.p4[filter]}</p>
      </div>
    </div>
  );
}

export default About;

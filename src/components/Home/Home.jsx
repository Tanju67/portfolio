import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./Home.module.css";
import { homeData } from "../../data/data";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedLan = searchParams.get("lan");
  const filter = selectedLan === "de" ? "german" : "english";
  const title = homeData.title[filter];
  const text = homeData.text[filter];

  useEffect(() => {
    if (selectedLan) {
      setSearchParams((prev) => {
        prev.set("lan", selectedLan);
        return prev;
      });
    } else {
      setSearchParams((prev) => {
        prev.set("lan", "en");
        return prev;
      });
    }
  }, []);
  return (
    <div className={styles.home}>
      <div className={styles.text}>
        <h1>{title} </h1>
        <p>{text}</p>
      </div>

      <div className={styles.image}>
        <div className={styles.imageBox}></div>
      </div>
    </div>
  );
}

export default Home;

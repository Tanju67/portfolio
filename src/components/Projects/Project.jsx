import { useSearchParams } from "react-router-dom";
import { BiDetail } from "react-icons/bi";
import styles from "./Project.module.css";
import Card from "../../shared/Card";
import Button from "../../shared/Button";

function Project({ image, title, detailLink }) {
  const [searchParams] = useSearchParams();
  const selectedLan =
    searchParams.get("lan") === null ? "de" : searchParams.get("lan");
  return (
    <div className={styles.projectMain}>
      <h3>{title}</h3>

      <Card className={styles.project}>
        <div className={styles.imgBox}>
          <img src={image} alt={title} />
        </div>

        <div className={styles.btnBox}>
          <Button
            classname={styles.detailBtn}
            link={detailLink + `?lan=${selectedLan}`}
          >
            <BiDetail />
            <span>
              {selectedLan === "en" ? "More Details" : "Mehr Details"}
            </span>
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Project;

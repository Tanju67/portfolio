import { Link, useParams, useSearchParams } from "react-router-dom";
import { GrInternetExplorer } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import styles from "./ProjectDetail.module.css";
import { projects } from "../../data/data";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.filter((p) => p.title === id)[0];
  const [searchParams] = useSearchParams();
  const selectedLan =
    searchParams.get("lan") === null ? "de" : searchParams.get("lan");
  const filter = selectedLan === "de" ? "german" : "english";

  return (
    <div className={styles.detailPage}>
      <h3>
        <Link to={`/projects?lan=${selectedLan}`}>
          {selectedLan === "en" ? "Projects" : "Projekte"}{" "}
        </Link>
        &rarr; {project.title}
      </h3>
      <div className={styles.imgBox}>
        <img src={project.image} alt={project.title} />
      </div>
      <div className={styles.detailBox}>
        <p>{project.detay[filter]}</p>
        {project.warning && (
          // <p className={styles.warning}>{project.warning[filter]}</p>
          <>
            {project.warning.map((pro, i) => (
              <p className={styles.warning} key={i}>
                {pro[filter]}
              </p>
            ))}
          </>
        )}
        <p className={styles.stack}>
          <span>Stack</span> <span>{project.stack}</span>
        </p>
      </div>
      <div className={styles.linkBox}>
        {project.websiteLink && (
          <Link to={project.websiteLink} target="_blank">
            <GrInternetExplorer /> <span>{project.websiteLink}</span>
          </Link>
        )}
        <Link to={project.githubLink} target="_blank">
          <FaGithub />
          <span>{project.title}</span>
        </Link>
      </div>
    </div>
  );
}

export default ProjectDetail;

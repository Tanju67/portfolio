import { useSearchParams } from "react-router-dom";
import styles from "./Projects.module.css";
import Project from "./Project";
import { projects } from "../../data/data";
import { projectPageData } from "../../data/data";

function Projects() {
  const [searchParams] = useSearchParams();
  const selectedLan = searchParams.get("lan");
  const filter = selectedLan === "de" ? "german" : "english";
  const title = projectPageData.title[filter];
  return (
    <div className={styles.projects}>
      <h2>{title}</h2>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <Project
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            webLink={project.websiteLink}
            githubLink={project.githubLink}
            detailLink={project.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

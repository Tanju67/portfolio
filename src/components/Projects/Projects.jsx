import { useSearchParams } from "react-router-dom";
import styles from "./Projects.module.css";
import Project from "./Project";
import { projects } from "../../data/data";
import { projectPageData } from "../../data/data";
import CategoryProjects from "./CategoryProjects";

function Projects() {
  const [searchParams] = useSearchParams();
  const selectedLan = searchParams.get("lan");
  const filter = selectedLan === "de" ? "german" : "english";
  const title = projectPageData.title[filter];
  const mern = projects.filter((p) => p.subCategory === "mern");
  const nextjs = projects.filter((p) => p.subCategory === "nextjs");
  const react = projects.filter((p) => p.subCategory === "react");
  const staticWeb = projects.filter((p) => p.subCategory === "static");
  return (
    <div className={styles.projects}>
      <h1>{title}</h1>
      <CategoryProjects
        projects={mern}
        category="Fullstack"
        subCategory="MERN Projects"
      />
      <CategoryProjects
        projects={nextjs}
        category="Fullstack"
        subCategory="NextJS Projects"
      />
      <CategoryProjects
        projects={react}
        category="Frontend"
        subCategory="React Projects"
      />
      <CategoryProjects
        projects={staticWeb}
        category="Frontend"
        subCategory="Static Web Projects"
      />
    </div>
  );
}

export default Projects;

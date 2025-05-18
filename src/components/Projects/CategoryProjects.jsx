import React from "react";
import styles from "./CategoryProjects.module.css";
import Project from "./Project";

function CategoryProjects({ projects, category, subCategory }) {
  return (
    <>
      <h2 className={styles.title}>
        <span className={styles.category}>{category}</span> &rarr;{" "}
        <span className={styles.subCategory}>{subCategory}👇</span>
      </h2>
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
    </>
  );
}

export default CategoryProjects;

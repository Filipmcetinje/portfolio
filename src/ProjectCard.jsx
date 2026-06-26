function ProjectCard({
  title,
  description,
  frontendGithub,
  backendGithub,
  demo,
}) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      {(frontendGithub || backendGithub || demo) && (
        <div className="project-links">
          {frontendGithub && (
            <a href={frontendGithub} target="_blank" rel="noopener noreferrer">
              Frontend GitHub
            </a>
          )}

          {backendGithub && (
            <a href={backendGithub} target="_blank" rel="noopener noreferrer">
              Backend GitHub
            </a>
          )}

          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;

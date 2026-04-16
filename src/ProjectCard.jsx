function ProjectCard({ title, description, github, demo }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      {(github || demo) && (
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
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

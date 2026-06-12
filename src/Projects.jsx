import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <ProjectCard
        title="Art Gallery Explorer"
        description="React app using The Met Museum API to search and explore artwork."
        github="https://github.com/Filipmcetinje/art-gallery-frontend"
        demo="https://filipmcetinje.github.io/art-gallery-frontend/"
      />

      <ProjectCard
        title="WTWR Weather App"
        description="Full-stack weather app with frontend, backend, and user interaction."
        github="https://github.com/Filipmcetinje/se_project_react"
        demo="https://filipmcetinje.github.io/se_project_react/"
      />

      <ProjectCard
        title="Partner Pipeline Externship"
        description="Worked on real frontend and API features, including editing student data through a modal connected to the backend."
      />
    </section>
  );
}

export default Projects;

import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <ProjectCard
        title="Art Gallery Explorer"
        description="Full-stack art gallery application with React, Node.js, Express, MongoDB, and JWT authentication. Browse artwork, create an account, and save favorites."
        frontendGithub="https://github.com/Filipmcetinje/art-gallery-frontend"
        backendGithub="https://github.com/Filipmcetinje/art-gallery-backend"
        demo="https://filipmcetinje.github.io/art-gallery-frontend/"
      />

      <ProjectCard
        title="WTWR Weather App"
        description="Full-stack weather application built with React, Node.js, Express, MongoDB, and JWT authentication. Users can manage clothing items based on weather conditions."
        frontendGithub="https://github.com/Filipmcetinje/se_project_react"
        backendGithub="https://github.com/Filipmcetinje/se_project_express"
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

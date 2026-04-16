import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <ProjectCard
        title="Art Gallery Explorer"
        description="React app using The Met Museum API to search and explore artwork."
        github="https://github.com/Filipmcetinje/art-gallery-frontend"
        demo="https://art-gallery-frontend.vercel.app/"
      />

      <ProjectCard
        title="WTWR Weather App"
        description="Full-stack weather app with frontend, backend, and user interaction."
      />

      <ProjectCard
        title="Partner Pipeline Externship"
        description="Worked on real frontend and API features, including editing student data through a modal connected to the backend."
      />
    </section>
  );
}

export default Projects;

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card no-break">
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          🔗
        </a>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-tech">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;

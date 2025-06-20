const TechnicalSkills = () => {
  const skills = [
    "React",
    "Next.js", 
    "ASTRO",
    "Tailwind CSS",
    "Firebase",
    "JavaScript",
    "SEO Basics",
    "Frontend Development",
    "UI/UX Design",
    "Figma",
    "Cryptocurrency Mining",
    "Github",
    "Vercel",
    "Firebase",
    "Vite",
    "API Integration"
  ];

  return (
    <div className="section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
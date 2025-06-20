const CoreCompetencies = () => {
  const competencies = [
    "Team Leadership",
    "Operations Management",
    "Cost Analysis",
    "Staff Training",
    "Customer Service",
    "Project Management",
    "Problem Solving",
    "Results-Driven",
  ];

  return (
    <div className="section">
      <h2 className="section-title">Core Competencies</h2>
      <div className="skills">
        {competencies.map((competency, index) => (
          <span key={index} className="skill-tag">
            {competency}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CoreCompetencies;

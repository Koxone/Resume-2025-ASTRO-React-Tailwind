const Education = () => {
  const educationItems = [
    {
      degree: "Full Stack Web Development Certification",
      institution: "WGU/EDX",
      details: "Currently Enrolled",
    },
    {
      degree: "English Language Teaching (Incomplete)",
      institution: "UNACH",
      details: "Tuxtla Gutierrez, Chiapas",
    },
  ];

  return (
    <div className="section">
      <h2 className="section-title">Education</h2>
      {educationItems.map((item, index) => (
        <div key={index} className="education-item">
          <div className="degree">{item.degree}</div>
          <div className="institution">{item.institution}</div>
          <div className="education-details">{item.details}</div>
        </div>
      ))}
    </div>
  );
};

export default Education;

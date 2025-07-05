const Education = () => {
  const educationItems = [
    {
      degree: "Full Stack Web Development Certification",
      institution: "WGU / edX",
      details: "Enrolled (2025)",
    },
    {
      degree: "Bachelor’s in English Language Teaching (Incomplete, 2011)",
      institution: "Universidad Autónoma de Chiapas (UNACH)",
      details: "Tuxtla Gutiérrez, Chiapas",
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

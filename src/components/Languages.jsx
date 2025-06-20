const Languages = () => {
  const languages = [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "C1" },
    { name: "Portuguese", level: "A2" },
  ];

  return (
    <div className="section">
      <h2 className="section-title">Languages</h2>
      {languages.map((language, index) => (
        <div key={index} className="language-item">
          <span className="language-name">{language.name}</span>
          <span className="language-level">{language.level}</span>
        </div>
      ))}
    </div>
  );
};

export default Languages;

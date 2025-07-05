const HonorsAndAwards = () => {
  const achievementItems = [
    {
      title: "Local, Regional, and State Champion – Wrestling",
      organization: "Instituto del Deporte de Chiapas (INDEPORTE)",
      details:
        "Earned consecutive gold medals in local, regional, and state-level wrestling competitions across Chiapas from 2008 to 2010, progressing through the official selection system under INDEPORTE.",
    },
    {
      title: "National Gold Medalist – Olimpiada Nacional 2010",
      organization: "Comisión Nacional de Cultura Física y Deporte (CONADE)",
      details:
        "Won gold at the 2009 regional stage in Ciudad del Carmen, Campeche, and at the 2010 Olimpiada Nacional in Guadalajara, Jalisco, organized by CONADE. Became national champion in my weight category and received recognition for technical excellence.",
    },
    {
      title: "National Wrestling Team Member & Pan American Games Qualifier",
      organization:
        "Mexican National Team – Comité Olímpico Mexicano (COM) & Federación Mexicana de Luchas Asociadas (FMLA)",
      details:
        "Selected in 2010 to join the Mexican National Wrestling Team, representing Mexico at national camps and international events, including winning first place at the Mexico vs. Puerto Rico meet in Mexico City and qualifying for the 2011 Pan American Games in Guadalajara, Jalisco.",
    },
  ];

  return (
    <div className="section">
      <h2 className="section-title">Honors & Awards</h2>
      {achievementItems.map((item, index) => (
        <div key={index} className="education-item">
          <div className="degree">{item.title}</div>
          <div className="institution">{item.organization}</div>
          <div className="education-details">{item.details}</div>
        </div>
      ))}
    </div>
  );
};

export default HonorsAndAwards;

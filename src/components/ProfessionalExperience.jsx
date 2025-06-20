import JobExperience from "./JobExperiences";

const ProfessionalExperience = () => {
  const jobs = [
    {
      title: "Chief of Operations",
      company: "Cvche & Grill San Angel - Fine Dining Restaurant",
      location: "Ciudad de México",
      duration: "January 2023 - January 2024",
      description:
        "Collaborated with management team in developing concept for new restaurant group. Led comprehensive operational setup including supplier agreements, staff training, and administrative foundation establishment.",
      achievements: [
        "Managed 50+ staff members across multiple departments (floor, kitchen, bar, storage, entrance)",
        "Achieved monthly revenue of $10 million pesos ($600,000 USD)",
        "Established supplier relationships for meat, glassware, groceries, and linens",
        "Developed internal audit controls and administrative systems",
      ],
    },
    {
      title: "Founder & CEO",
      company: "Kooxland Inc - Web Development & Cryptocurrency Mining",
      location: "Mexico City",
      duration: "2023",
      description:
        "Founded and operated company dedicated to cryptocurrency mining and software development. Managed entire operation from equipment maintenance to software optimization.",
      achievements: [
        "Modified equipment operating systems to achieve monthly mining goals",
        "Managed complete technical infrastructure and operations",
      ],
    },
    {
      title: "General Manager",
      company: "Sonora Grill Prime Artz - Fine Dining Restaurant",
      location: "Ciudad de México",
      duration: "January 2019 - January 2023",
      description:
        "Led comprehensive restaurant operations managing large-scale teams and achieving significant revenue targets through strategic leadership and operational excellence.",
      achievements: [
        "Supervised 50+ team members across all operational departments",
        "Generated monthly revenue of $10 million pesos ($600,000 USD)",
        "Conducted daily and weekly accounting assessments",
        "Implemented cost analysis for F&B operations",
      ],
    },
    {
      title: "General Manager",
      company: "Barezzito Tuxtla",
      location: "Tuxtla Gutierrez, Chiapas",
      duration: "October 2018 - January 2019",
      description:
        "Oversaw establishment completion and standardized brand operations for new franchise location.",
      achievements: [
        "Led team of 80 across diverse operational roles",
        "Implemented comprehensive training programs for all departments",
        "Performed thorough F&B cost analysis and ROI optimization",
      ],
    },
    {
      title: "Jr Manager → Regional Manager",
      company: "Barezzito - Multiple Locations",
      location: "Mexico City & Leon, Guanajuato",
      duration: "June 2011 - September 2018",
      description:
        "Progressed through management roles across multiple restaurant locations, consistently achieving sales targets and operational excellence.",
      achievements: [
        "Managed teams of 40-50 staff members across various locations",
        "Executed daily promotional activities with PR teams",
        "Achieved weekly sales goals through strategic floor management",
      ],
    },
  ];

  return (
    <section className="section">
      <h2 className="section-title">Professional Experience</h2>
      {jobs.map((job, index) => (
        <JobExperience key={index} job={job} />
      ))}
    </section>
  );
};

export default ProfessionalExperience;

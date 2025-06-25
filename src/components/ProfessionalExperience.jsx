import JobExperience from "./JobExperiences";

const ProfessionalExperience = () => {
  const jobs = [
    {
      title: "Co-Owner & Operator – Small Restaurant Startup",
      company: "Brahma Steakhouse & Lounge",
      location: "Atlanta, Georgia, United States",
      duration: "2024 - 2025",
      description:
        "Relocated from Mexico to Atlanta, USA for a two-year professional break focused on personal and professional growth. Co-founded a small neighborhood restaurant with a business partner, holding a minority ownership stake.",
      achievements: [
        "Managed daily operations for a 50-seat establishment",
        "Oversaw procurement, hiring, menu design, and regulatory compliance",
        "Gained firsthand experience navigating U.S. supplier systems and labor regulations",
        "Adapted operational strategies to fit the local market and customer base",
      ],
    },
    {
      title: "Chief of Operations",
      company: "Cvche & Grill San Ángel – Fine Dining Restaurant",
      location: "Mexico City, Mexico",
      duration: "2023",
      description:
        "Led the restaurant project from construction to full operation, overseeing all aspects of launch including vendor sourcing, menu development, pricing strategy, cost analysis, and operational planning.",
      achievements: [
        "Managed recruitment, onboarding, and training of 50+ staff across all departments",
        "Created internal policies, procedures, and administrative systems for long-term stability",
        "Negotiated supplier contracts for meat, produce, glassware, linens, and inventory",
        "Delivered operational performance reports directly to stakeholders and partners",
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
        "I was responsible for both purchasing and importing equipment directly from suppliers in China.",
        "Modified equipment operating systems to achieve monthly mining goals",
        "Managed complete technical infrastructure and operations",
      ],
    },
    {
      title: "General Manager",
      company: "Sonora Grill Group - Prime Artz (Fine Dining)",
      location: "Mexico City, Mexico",
      duration: "January 2019 - January 2022",
      description:
        "Led full-service restaurant operations with a focus on team leadership, financial performance, and operational excellence in a high-end dining environment.",
      achievements: [
        "Supervised 50+ team members across all operational departments",
        "Achieved monthly revenue of $10 million pesos (~$600,000 USD)",
        "Conducted daily and weekly accounting assessments",
        "Implemented food and beverage cost control strategies and operational audits",
      ],
    },
    {
      title: "Jr Manager → Regional Manager",
      company: "Barezzito - Multiple Locations",
      location: "Mexico City & Leon, Guanajuato",
      duration: "June 2010 - September 2019",
      description:
        "Progressed from server assistant to Regional Manager over a 9-year career, ultimately overseeing operations across 10 restaurants in 6 cities.",
      achievements: [
        "Led and mentored teams ranging from 20 to over 100 staff members",
        "Ensured consistent service standards and operational efficiency across all locations",
        "Played a key role in staff development, local strategy execution, and cross-department coordination",
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

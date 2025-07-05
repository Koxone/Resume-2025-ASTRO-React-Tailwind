import JobExperience from "./JobExperiences";

const ProfessionalExperience = () => {
  const jobs = [
    {
      title: "Development Intern - Web Development Company",
      company: "Sacbe Transfers",
      location: "Cancun, Quintana Roo, Mexico",
      duration: "2024 - 2025",
      description:
        "Currently enrolled in a software development internship focused on building and structuring web interfaces using React and Tailwind for a company developing solutions for the tourist transportation sector in Mexico. My main role involves site layout and UI implementation, along with working on small projects such as the discount coupons feature, where I planned the interface and integrated the company-provided API to enable dynamic coupon validation within the booking system. This project also included integration with Google Wallet and Apple Wallet, meeting the technical requirements of both platforms so that users can easily add and store their coupons on their devices. This work contributes to improving the user experience and streamlining the reservation process.",
      achievements: [
        "Developed responsive UI components with React and Tailwind",
        "Integrated dynamic coupon validation using API endpoints",
        "Enabled Google Wallet and Apple Wallet coupon storage",
        "Improved booking flow to enhance user experience onsite",
      ],
    },

    {
      title: "Co-Owner & Operator - Small Restaurant Startup",
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
      title: "Chief Operations Officer",
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

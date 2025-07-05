import JobExperience from "./JobExperiences";

const ProfessionalExperience = () => {
  const jobs = [
    {
      title: "Development Intern - Web Development Company",
      company: "Sacbe Transfers",
      location: "Cancun, Quintana Roo, Mexico",
      duration: "2024 - 2025",
      description:
        "Currently enrolled in a software development internship focused on building and structuring web interfaces using React and Tailwind for a company developing solutions for the tourist transportation sector in Mexico. Responsible for site layout and UI implementation, and led small projects such as the discount coupons feature, planning the interface and integrating the company-provided API for dynamic coupon validation within the booking system. Included integration with Google Wallet and Apple Wallet, ensuring technical requirements for users to add and store coupons seamlessly. This work contributes to improving user experience and streamlining the reservation process.",
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
        "Relocated from Mexico to Atlanta for a two-year professional break focused on personal and professional growth. Co-founded a small neighborhood restaurant with a business partner, holding a minority ownership stake and overseeing day-to-day operations.",
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
        "Led the restaurant project from construction to full operation, overseeing vendor sourcing, menu development, pricing strategy, cost analysis, and operational planning to ensure a successful launch.",
      achievements: [
        "Managed recruitment, onboarding, and training of 50+ staff across all departments",
        "Created internal policies, procedures, and administrative systems for stability",
        "Negotiated supplier contracts for meat, produce, glassware, linens, and inventory",
        "Delivered operational performance reports to stakeholders and partners",
      ],
    },
    {
      title: "Founder & CEO",
      company: "Kooxland Inc - Web Development & Cryptocurrency Mining",
      location: "Mexico City",
      duration: "2023",
      description:
        "Founded and operated a company dedicated to cryptocurrency mining and software development, managing all operations from equipment maintenance to software optimization.",
      achievements: [
        "Purchased and imported equipment directly from suppliers in China",
        "Modified equipment operating systems to achieve monthly mining targets",
        "Managed technical infrastructure and operational workflows",
      ],
    },
    {
      title: "General Manager",
      company: "Sonora Grill Group - Prime Artz (Fine Dining)",
      location: "Mexico City, Mexico",
      duration: "January 2019 - January 2022",
      description:
        "Led full-service restaurant operations, focusing on team leadership, financial performance, and operational excellence within a high-end dining environment.",
      achievements: [
        "Supervised 50+ team members across all operational departments",
        "Achieved monthly revenue of $10 million pesos (~$600,000 USD)",
        "Conducted daily and weekly accounting assessments",
        "Implemented cost control strategies and operational audits",
      ],
    },
    {
      title: "Jr Manager → Regional Manager",
      company: "Barezzito - Multiple Locations",
      location: "Mexico City & Leon, Guanajuato",
      duration: "June 2010 - September 2019",
      description:
        "Progressed from server assistant to Regional Manager over a 9-year career, overseeing operations across 10 restaurants in 6 cities and driving consistency in service and operations.",
      achievements: [
        "Led and mentored teams of 20 to over 100 staff members",
        "Ensured consistent service standards and operational efficiency",
        "Contributed to staff development and local strategy execution",
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

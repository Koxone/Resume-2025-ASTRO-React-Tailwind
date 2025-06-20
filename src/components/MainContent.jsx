import ProfessionalSummary from "./ProfessionalSummary";
import FeaturedProjects from "./FeaturedProjects";
import ProfessionalExperience from "./ProfessionalExperience";

const MainContent = () => {
  return (
    <main className="content">
      <ProfessionalSummary />
      <FeaturedProjects />
      <ProfessionalExperience />
    </main>
  );
};

export default MainContent;

import TechnicalSkills from "./TechnicalSkills";
import Languages from "./Languages";
import Education from "./Education";
import CoreCompetencies from "./CoreCompetencies";
import GitHubLinks from "./GitHubLinks";
import HonorsAndAwards from "./HonorsAndAwards";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <TechnicalSkills />
      <Languages />
      <Education />
      <CoreCompetencies />
      <GitHubLinks />
      <HonorsAndAwards />
    </aside>
  );
};

export default Sidebar;

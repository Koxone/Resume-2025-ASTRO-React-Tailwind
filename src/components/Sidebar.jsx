import TechnicalSkills from "./TechnicalSkills";
import Languages from "./Languages";
import Education from "./Education";
import CoreCompetencies from "./CoreCompetencies";
import GitHubLinks from "./GithubLinks";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <TechnicalSkills />
      <Languages />
      <Education />
      <CoreCompetencies />
      <GitHubLinks />
    </aside>
  );
};

export default Sidebar;

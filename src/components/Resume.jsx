import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import DownloadButton from "./DownloadButton";
import ResumeStyles from "./ResumeStyles";

const Resume = () => {
  return (
    <>
      <ResumeStyles />
      <DownloadButton />
      <div className="resume-container">
        <Header />
        <div className="main-content">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default Resume;

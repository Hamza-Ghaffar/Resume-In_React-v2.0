import React from "react";
import Header from "./components/header/Header";
import InfoCard from "./components/infocard/InfoCard";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import LinksCard from "./components/linkscard/LinksCard";
import EducationCard from "./components/educationcard/EducationCard";
import WorkExperienceCard from "./components/workexperiencecard/WorkExperienceCard";
import ProjectsCard from "./components/projectscard/ProjectsCard";
import SkillsCard from "./components/skillscard/SkillsCard";
import LanguagesCard from "./components/languagescard/LanguagesCard";
import CertificationCard from "./components/certificationcard/CertificationCard";
function App() {
  return (
    <div style={{ height: "100vh", overflowY: "auto" }}>
      <Header />
      <InfoCard />
      <About />
      <LinksCard />
      <EducationCard />
      <WorkExperienceCard />
      <ProjectsCard />
      <SkillsCard />
      <LanguagesCard />
      <CertificationCard />
      <Footer />
    </div>
  );
}

export default App;

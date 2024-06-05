import React, { useState } from "react";
import InfoCard from "../infocard/InfoCard";
import About from "../about/About";
import LinksCard from "../linkscard/LinksCard";
import EducationCard from "../educationcard/EducationCard";
import WorkExperienceCard from "../workexperiencecard/WorkExperienceCard";
import ProjectsCard from "../projectscard/ProjectsCard";
import SkillsCard from "../skillscard/SkillsCard";
import LanguagesCard from "../languagescard/LanguagesCard";
import CertificationCard from "../certificationcard/CertificationCard";

function Body() {
  return (
    <div style={{ height: "100vh", overflowY: "auto" }}>
      <InfoCard />
      <About />
      <LinksCard />
      <EducationCard />
      <WorkExperienceCard />
      <ProjectsCard />
      <SkillsCard />
      <LanguagesCard />
      <CertificationCard />
    </div>
  );
}

export default Body;

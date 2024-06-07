import React, { useState, useEffect } from "react";
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
  // Start Props Code for InfoCard................................

  let titleObjs = [
    {
      id: 1,
      firstName: "Hamza",
      lastName: "Ghaffar",
      title: "IT-Engineer",
      age: "28",
      imgsrc: "./imges/pr1.jpeg",
      email: {
        p: "hamza.ghaffar.edu@gmail.com",
        s: "hamza.ghaffar.edu@gmail.com",
      },
      contact: {
        primary: "+43 660 1192777",
        secondray: "+92 301 5563366",
      },
      address: {
        city: "Portschach",
        country: "Austria",
      },
    },

    {
      id: 2,
      firstName: "Abdullah",
      lastName: "Ghaffar",

      title: "Software-Engineer",
      age: "24",
      email: {
        p: "adbullah.edu@gmail.com",
        s: "abdullah.ghaffar.edu@gmail.com",
      },
      contact: {
        primary: "+43 660 1192777",
        secondray: "+92 301 5563366",
      },
      address: {
        city: "Mian Channu",
        country: "Pakistan",
      },
    },
  ];

  const [info, setInfo] = useState(titleObjs);
  //.....using an arrow function might be useful if you want to perform additional operations or checks before updating the state
  const updateInfo = (titleObjs) => {
    setInfo(titleObjs);
  };

  // End  Props Code for InfoCard................................

  // Start Props Code for 'About' Section................................

  let aboutObjs = [
    {
      id: 1,
      about:
        "I am currently pursuing my Master’s degree, which allows me the flexibility to work full‑time or part‑time alongside my coursework. I can easily relocate as my thesis will be completed remotely. I am committed to ongoing learning and the adoption of new technologies and processes. I have acquired firsthand knowledge of L1 and L2 methods, which has enhanced my understanding of software development and network infrastructure with self‑organization, flexibility, and good time management skills. Whether it’s a part‑time job or a working student position, I am eager to contribute to the versatile field of IT domain of data acquisition, post-processing, and visualization with my T‑shaped knowledge.\n\nI am confident that, once I start, I can quickly earn my position and make meaningful contributions across various IT domains, as I have successfully done in the past. I understand the application process takes time, and I assure you that if given the opportunity, my commitment to your organization will be long‑term, unless you decide otherwise.",
    },
    {
      id: 2,
      about:
        "I am currently pursuing my Master’s degree, which allows me the flexibility to work full‑time or part‑time alongside my coursework. I can easily relocate as my thesis will be completed remotely. I am committed to ongoing learning and the adoption of new technologies and processes. I have acquired firsthand knowledge of L1 and L2 methods, which has enhanced my understanding of software development and network infrastructure with self‑organization, flexibility, and good time management skills. Whether it’s a part‑time job or a working student position, I am eager to contribute to the versatile field of IT domain of data acquisition, post-processing, and visualization with my T‑shaped knowledge.\n\nI am confident that, once I start, I can quickly earn my position and make meaningful contributions across various IT domains, as I have successfully done in the past. I understand the application process takes time, and I assure you that if given the opportunity, my commitment to your organization will be long‑term, unless you decide otherwise.",
    },
  ];

  const [about, setAbout] = useState(aboutObjs);
  //.....using an arrow function might be useful if you want to perform additional operations or checks before updating the state
  const updateabout = (aboutObjs) => {
    setAbout(aboutObjs);
  };

  // End  Props Code for 'About' Section................................

  // Start Props Code for 'LinksCard' Section................................

  let linksCardObjs = [
    {
      id: 1,
      updatedate: "Update on29-June-2024",

      sociallinks: {
        linkedin: {
          text: "Connect with me on LinkedIn to explore my professional journey.",
          url: "https://www.linkedin.com/in/hamzaghaffar/",
          name: "Linkedin",
        },
        github: {
          text: "Connect with me on LinkedIn to explore my professional journey.",
          url: "https://www.linkedin.com/in/hamzaghaffar/",
          name: "Git-Hub",
        },
        fb: {
          text: "Connect with me on LinkedIn to explore my professional journey.",
          url: "https://www.linkedin.com/in/hamzaghaffar/",
          name: "Facebook",
        },
      },
    },
  ];

  const [linksCard, setlinksCard] = useState(linksCardObjs);
  //.....using an arrow function might be useful if you want to perform additional operations or checks before updating the state
  const updatelinksCard = (linksCardObjs) => {
    setAbout(linksCardObjs);
  };

  // End  Props Code for 'linksCard' Section................................

  // Start Props Code for 'Education' Section................................

  let educationObjs = [
    {
      id: 1,
      date: "Date: 2023-2025*",
      coursename: "M.SC. IN COMMUNICATION ENGINEERING",
      insitutename: "FH(Carinthia University of Applied Sciences)",
      address: "KLAGENFURT, AUSTRIA",
      courseworks: {
        coursework01: {
          title: "IOT / WebEmmbeded Application",
          detail:
            "Focuses on securing web applications that are embedded within various systems and devices. It involves implementing measures to protect against cyber threats such as unauthorized access, data breaches, and malicious attacks. This field is crucial for ensuring the safety and integrity of web-based systems in diverse environments.",
          links: {
            github: "https://www.linkedin.com/in/hamzaghaffar/",
          },
        },
        coursework02: {
          title: "Network Planing automation and Security / Testing Famework ",
          detail:
            " Methodologies, tools, and best practices for identifying vulnerabilities, conducting security assessments, and implementing measures to mitigate risks. This framework is essential for building robust and secure software systems that withstand potential cyber threats and attacks.",
          links: {
            github: "https://www.linkedin.com/in/hamzaghaffar/",
          },
        },
      },
      keysubjectslist: {
        keysub01: "APIdevelopmentforsoftwaredesignandarchitecture (FastAPI).",
        keysub02:
          "Webembeddedapplicationcybersecurity andvulnerability analysis(Linux,bash)",
        keysub03:
          "Understanding of signal processing and data transmission (Matlab)",
        keysub04: "EmbeddedsystemsdevelopmentandIoTtechnologies",
      },
    },
    {
      id: 2,
      date: "Date: 2014-2018",
      coursename: "Bachelor of Information Technology",
      insitutename: "UOE(University of Education Lahore)",
      address: "MULTAN, PAKISTAN",
      courseworks: {
        coursework01: {
          title: "IOT / WebEmmbeded Application",
          detail:
            "Focuses on securing web applications that are embedded within various systems and devices. It involves implementing measures to protect against cyber threats such as unauthorized access, data breaches, and malicious attacks. This field is crucial for ensuring the safety and integrity of web-based systems in diverse environments.",
          links: {},
        },
        coursework02: {
          title: "Network Planing automation and Security / Testing Famework ",
          detail:
            " Methodologies, tools, and best practices for identifying vulnerabilities, conducting security assessments, and implementing measures to mitigate risks. This framework is essential for building robust and secure software systems that withstand potential cyber threats and attacks.",
          links: {},
        },
      },
      keysubjectslist: {
        keysub02:
          "Webembeddedapplicationcybersecurity andvulnerability analysis(Linux,bash)",
        keysub03:
          "Understanding of signal processing and data transmission (Matlab)",
        keysub04: "EmbeddedsystemsdevelopmentandIoTtechnologies",
      },
    },
  ];

  const [education, seteducation] = useState(educationObjs);
  //.....using an arrow function might be useful if you want to perform additional operations or checks before updating the state
  const updateEducationCard = (educationObjs) => {
    seteducation(educationObjs);
  };

  // End  Props Code for 'Education' Section................................

  // Start Props Code for 'Education' Section................................

  let workExperiencObjs = [
    {
      id: 1,
      date: "Date: 2021-2023*",
      postion: "DATACOM Engineer",
      insitutename: "Huawei Technologies",
      address: "ISLAMABAD, PAKISTAN",
      role: "Technical Lv2 Engineer",
      skillset: {
        skill01: "Linux",
        skill02: "Python",
        skill03: "Network Confiuration",
      },
      keytasks: {
        keysub01: "APIdevelopmentforsoftwaredesignandarchitecture (FastAPI).",
        keysub02:
          "Webembeddedapplicationcybersecurity andvulnerability analysis(Linux,bash)",
        keysub03:
          "Understanding of signal processing and data transmission (Matlab)",
        keysub04: "EmbeddedsystemsdevelopmentandIoTtechnologies",
      },
      links: {
        Linkdin: "https://www.linkedin.com/in/hamzaghaffar/",
        github: "https://www.linkedin.com/in/hamzaghaffar/",
      },
    },
    {
      id: 1,
      date: "Date: 2021-2023*",
      postion: "IT Supervisor",
      insitutename: "Carrefour",
      address: "ISLAMABAD, PAKISTAN",
      role: "Assitant IT Manager",
      skillset: {
        skill01: "Linux",
        skill02: "Python",
        skill03: "Network Confiuration",
      },
      keytasks: {
        keysub01: "APIdevelopmentforsoftwaredesignandarchitecture (FastAPI).",
        keysub02:
          "Webembeddedapplicationcybersecurity andvulnerability analysis(Linux,bash)",
        keysub03:
          "Understanding of signal processing and data transmission (Matlab)",
        keysub04: "EmbeddedsystemsdevelopmentandIoTtechnologies",
      },
      links: {
        Linkdin: "https://www.linkedin.com/in/hamzaghaffar/",
        github: "https://www.linkedin.com/in/hamzaghaffar/",
      },
    },
  ];

  const [work, setWork] = useState(workExperiencObjs);
  //.....using an arrow function might be useful if you want to perform additional operations or checks before updating the state
  const updateWorkExperienceCard = (workExperiencObjs) => {
    setWork(workExperiencObjs);
  };

  // End  Props Code for 'Education' Section................................

  // Start Props Code for 'FolioCard' Section................................

  let folioCardObjs = [
    {
      id: "1",
      title: "HTML CSS",
      detail: "EmbeddedsystemsdevelopmentandIoTtechnologies",
      icon: "https://www.linkedin.com/in/hamzaghaffar/",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "2",
      title: "Linux",
      detail: "EmbeddedsystemsdevelopmentandIoTtechnologies",
      icon: "https://www.linkedin.com/in/hamzaghaffar/",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "3",
      title: "React",
      detail: "EmbeddedsystemsdevelopmentandIoTtechnologies",
      icon: "https://www.linkedin.com/in/hamzaghaffar/",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "4",
      title: "Python",
      detail: "EmbeddedsystemsdevelopmentandIoTtechnologies",
      icon: "https://www.linkedin.com/in/hamzaghaffar/",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "5",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
      title: "Python",
      detail: "EmbeddedsystemsdevelopmentandIoTtechnologies",
      icon: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "6",
      title: "Python",
      detail: "EmbeddedsystemsdevelopmentandIoTtechnologies",
      icon: "https://www.linkedin.com/in/hamzaghaffar/",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "7",
      title: "Python",
      detail: "EmbeddedsystemsdevelopmentandIoTtechnologies",
      icon: "https://www.linkedin.com/in/hamzaghaffar/",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
  ];

  const [folioCard, setfolioCard] = useState(folioCardObjs);
  //.....using an arrow function might be useful if you want to perform additional operations or checks before updating the state
  const updateFolioCard = (folioCardObjs) => {
    setfolioCard(folioCardObjs);
  };

  // End  Props Code for 'FolioCard' Section................................

  // Start Props Code for 'FolioCard' Section................................

  let skillsTagsCardObjs = [
    {
      id: "1",
      title: "HTML CSS",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "2",
      title: "Linux Administration",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "3",
      title: "Docker",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "4",
      title: "Kubernetes",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "5",
      title: "AWS",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "6",
      title: "CI/CD Pipelines",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "7",
      title: "Jenkins",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "8",
      title: "Ansible",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "9",
      title: "Terraform",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "10",
      title: "Python Scripting",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "11",
      title: "Monitoring & Logging (Prometheus, Grafana)",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "12",
      title: "Networking",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "13",
      title: "Git & GitHub",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "14",
      title: "Microservices Architecture",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "15",
      title: "Shell Scripting",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "16",
      title: "Configuration Management (Chef, Puppet)",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "17",
      title: "CloudFormation",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "18",
      title: "Agile & Scrum Practices",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "19",
      title: "Nagios",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "20",
      title: "Security Best Practices",
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
  ];

  const [skillsTagsCard, setSkillsTagsCardObjs] = useState(skillsTagsCardObjs);
  //.....using an arrow function might be useful if you want to perform additional operations or checks before updating the state
  const updateSkillsTagsCardObjs = (skillsTagsCardObjs) => {
    setSkillsTagsCardObjs(skillsTagsCardObjs);
  };

  // End  Props Code for 'FolioCard' Section................................

  // start Props Code for 'languaes' Section................................
  let languagesCardObjs = [
    {
      id: "1",
      title: "German",
      level: 60,
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "2",
      title: "English",
      level: 80,
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "3",
      title: "Urdu",
      level: 95,
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "4",
      title: "Hindi",
      level: 80,
      src: "https://www.linkedin.com/in/hamzaghaffar/",
    },
  ];

  const [languagesCard, setLanguagesCardObjs] = useState(languagesCardObjs);
  //.....using an arrow function might be useful if you want to perform additional operations or checks before updating the state
  const updatelanguagesCardObjs = (languagesCardObjs) => {
    setLanguagesCardObjs(languagesCardObjs);
  };

  // End  Props Code for 'languaes' Section................................

  // start Props Code for 'certifications' Section................................

  let certificationCardObjs = [
    {
      id: "1",
      title: "CCNP",
      subtitle: "Routing & Switching",
      img: "./imges/ccnp.webp",
      srclink: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "2",
      title: "HCIP",
      img: "./imges/hcip.jpg",
      subtitle: "Routing & Switching",
      srclink: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "3",
      title: "Python",
      img: "./imges/python.webp",
      subtitle: "Automation",
      srclink: "https://www.linkedin.com/in/hamzaghaffar/",
    },
    {
      id: "4",
      title: "AWS",
      subtitle: "Cloud",
      img: "./imges/aws.png",
      srclink: "https://www.linkedin.com/in/hamzaghaffar/",
    },
  ];

  const [certificationCard, setcertificationCardOBjs] = useState(
    certificationCardObjs
  );
  //.....using an arrow function might be useful if you want to perform additional operations or checks before updating the state
  const updatecertificationCardObjs = (certificationCardObjs) => {
    setcertificationCardOBjs(certificationCardObjs);
  };

  // end Props Code for 'certifications' Section................................

  return (
    <div>
      <InfoCard infoCardValues={info} />
      <About aboutData={about} />
      <LinksCard linksCardData={linksCard} />
      <EducationCard educationCardData={education} />
      <WorkExperienceCard workexperienceCardData={work} />

      <ProjectsCard folioCardData={folioCard} />
      <SkillsCard skillsTagsCardData={skillsTagsCard} />
      <LanguagesCard languagesCardData={languagesCard} />
      <CertificationCard certificationCardData={certificationCard} />
    </div>
  );
}

export default Body;

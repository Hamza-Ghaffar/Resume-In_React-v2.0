import React from "react";
import styles from "./EducationCard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const EducationCard = () => {
  return (
    <div
      className={`${styles.container} mx-auto max-w-6xl bg-white shadow p-10 space-y-2 rounded-md hover:-translate-y-2 duration-300`}
    >
      <div className={` ${styles.educationCard}`}>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-2 text-Black">Education</h2>
          <div className="mb-2 text-2xl text-Black">
            FH(Carinthia University of Applied Sciences)
          </div>
          <div className="flex justify-between items-start mb-2 text-black">
            <span>M.SC. IN COMMUNICATION ENGINEERING</span>
            <span className="ml-4">KLAGENFURT, AUSTRIA</span>
          </div>
          <p className="mb-2 text-1xl text-Black"></p>
          <div className="flex justify-between items-start mb-2 text-black">
            <span>Master Course Work: IOT / WebEmmbeded Application</span>
            <span className="ml-4">Date: 2023-2025*</span>
          </div>
          <div>
            Key Subjects:
            <ul className="list-disc pl-5">
              <li>APIdevelopmentforsoftwaredesignandarchitecture (FastAPI).</li>
              <li>
                Webembeddedapplicationcybersecurity andvulnerability
                analysis(Linux,bash)
              </li>
              <li>
                Understanding of signal processing and data transmission
                (Matlab)
              </li>
              <li>EmbeddedsystemsdevelopmentandIoTtechnologies</li>
              {/* Add more skills as needed */}
            </ul>
          </div>
        </div>
        <button className="hover:bg-gray-700 bg-gray-800 text-gray-100 mt-6 rounded p-2 px-6">
          Edit
        </button>
      </div>
    </div>
  );
};

export default EducationCard;

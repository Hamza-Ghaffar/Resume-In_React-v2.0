import React from "react";
import styles from "./WorkExperienceCard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const WorkExperienceCard = () => {
  return (
    <div
      className={`${styles.container} mx-auto max-w-6xl bg-white shadow p-10 space-y-2 rounded-md hover:-translate-y-2 duration-300`}
    >
      <div className={` ${styles.educationCard}`}>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-2 text-Black">
            Working Experiences
          </h1>
          <div className="mb-2 text-1xl text-Black">DATACOM Engineer</div>
          <div className="flex justify-between items-start mb-2 text-black">
            <span>Huawei Technologies</span>
            <span className="ml-4">ISLAMABAD, PAKISTAN</span>
          </div>
          <p className="mb-2 text-1xl text-Black"></p>
          <div className="flex justify-between items-start mb-2 text-black">
            <span>Technical Lv2 Engineer </span>
            <span className="ml-4">Date: 2021- Sept 2023</span>
          </div>
          <div>
            Key Subjects:
            <ul className="list-disc pl-5">
              <li>
                Provisioned hybrid infrastructure spearheaded the knowledge in
                multi‑objective optimization.
              </li>
              <li>
                Provisioned hybrid infrastructure Spearheaded the Knowledge in
                multi‑objective optimization
              </li>
              <li> Collaborated with cross‑functional teams. (FastAPI).</li>

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

export default WorkExperienceCard;

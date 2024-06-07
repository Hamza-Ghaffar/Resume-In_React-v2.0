import React from "react";
import styles from "./SkillsCard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTags } from "react-icons/fa";

const SkillsCard = ({ skillsTagsCardData }) => {
  return (
    <div
      className={`${styles.card}   mx-auto max-w-6xl shadow p-10 space-y-2 rounded-md hover:-translate-y-2 duration-300`}
    >
      <FaTags className="inline-block mr-2" />
      <span className={`${styles.title} text-xl font-bold `}>Skills Tags</span>
      {skillsTagsCardData.map(
        (
          eachTag,
          index // Add the key prop here
        ) => (
          <div key={index} className={` mt-2 ${styles.card__tags}`}>
            <ul className={styles.tag}>
              <li className={styles.tag__name}>{eachTag.title}</li>
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default SkillsCard;

import React from "react";
import styles from "./SkillsCard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SkillsCard = () => {
  return (
    <div
      className={`${styles.card}  mx-auto max-w-6xl shadow p-10 space-y-2 rounded-md hover:-translate-y-2 duration-300`}
    >
      <span className={styles.title}>Skills Tags</span>
      <div className={styles.card__tags}>
        <ul className={styles.tag}>
          <li className={styles.tag__name}>JS</li>
          <li className={styles.tag__name}>wordpress</li>
          <li className={styles.tag__name}>uiverse</li>
          <li className={styles.tag__name}>Css</li>
          <li className={styles.tag__name}>html</li>
          <li className={styles.tag__name}>go</li>
          <li className={styles.tag__name}>java</li>
          <li className={styles.tag__name}>ux/ui</li>
          <li className={styles.tag__name}>figma</li>
          <li className={styles.tag__name}>wordpress</li>
          <li className={styles.tag__name}>wordpress</li>
          <li className={styles.tag__name}>uiverse</li>
          <li className={styles.tag__name}>Css</li>
          <li className={styles.tag__name}>html</li>
          <li className={styles.tag__name}>go</li>
          <li className={styles.tag__name}>java</li>
          <li className={styles.tag__name}>ux/ui</li>
          <li className={styles.tag__name}>figma</li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsCard;

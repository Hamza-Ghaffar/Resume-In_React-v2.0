import React from "react";
import styles from "./LanguagesCard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LanguagesCard = () => {
  return (
    <div
      className={`${styles.container} bg-white mx-auto max-w-6xl shadow p-10 space-y-2 rounded-md hover:-translate-y-2 duration-300`}
    >
      <h1 className={`${styles.container} bg-white   shadow p-2 `}>
        Languages
      </h1>
      <div className={styles.skillBox}>
        <span className={styles.title}>ENGLISH</span>
        <div className={styles.skillBar}>
          <span className={`${styles.skillPer} ${styles.html}`}>
            <span className={styles.tooltip}>80%</span>
          </span>
        </div>
      </div>
      <div className={styles.skillBox}>
        <span className={styles.title}>GERMAN</span>
        <div className={styles.skillBar}>
          <span className={`${styles.skillPer} ${styles.css}`}>
            <span className={styles.tooltip}>50%</span>
          </span>
        </div>
      </div>
      <div className={styles.skillBox}>
        <span className={styles.title}>URDU</span>
        <div className={styles.skillBar}>
          <span className={`${styles.skillPer} ${styles.javascript}`}>
            <span className={styles.tooltip}>100%</span>
          </span>
        </div>
      </div>
      <div className={styles.skillBox}>
        <span className={styles.title}>HINDI</span>
        <div className={styles.skillBar}>
          <span className={`${styles.skillPer} ${styles.nodejs}`}>
            <span className={styles.tooltip}>70%</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LanguagesCard;

import React from "react";
import styles from "./CertificationCard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CertificationCard = () => {
  return (
    <div
      className={`${styles.container}  bg-white mx-auto max-w-6xl shadow p-10 rounded-md`}
    >
      <div className={`${styles.card} `}>
        <div className={styles.cardPhoto}>
          <img src="./imges/ccnp.webp" alt="CCNP" className={styles.icon} />
        </div>
        <div className={styles.cardTitle}>
          CCNP <br />
          <span>Routing &amp; Switching</span>
        </div>
        <div className={styles.cardSocials}>
          <button className={`${styles.cardSocialsBtn} ${styles.facebook}`}>
            <img src="./imges/git.png" alt="GitHub" className={styles.icon} />
          </button>
          <button className={`${styles.cardSocialsBtn} ${styles.github}`}>
            <img
              src="./imges/linkedin.webp"
              alt="LinkedIn"
              className={styles.icon}
            />
          </button>
          <button className={`${styles.cardSocialsBtn} ${styles.linkedin}`}>
            <img
              src="./imges/insta.webp"
              alt="Instagram"
              className={styles.icon}
            />
          </button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardPhoto}>
          <img src="./imges/hcip.jpg" alt="CCNP" className={styles.icon} />
        </div>
        <div className={styles.cardTitle}>
          HCIP <br />
          <span>Routing &amp; Switching</span>
        </div>
        <div className={styles.cardSocials}>
          <button className={`${styles.cardSocialsBtn} ${styles.facebook}`}>
            <img src="./imges/git.png" alt="GitHub" className={styles.icon} />
          </button>
          <button className={`${styles.cardSocialsBtn} ${styles.github}`}>
            <img
              src="./imges/linkedin.webp"
              alt="LinkedIn"
              className={styles.icon}
            />
          </button>
          <button className={`${styles.cardSocialsBtn} ${styles.linkedin}`}>
            <img
              src="./imges/insta.webp"
              alt="Instagram"
              className={styles.icon}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;

import React from "react";
import styles from "./InfoCard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const InfoCard = () => {
  return (
    <div className={styles.container}>
      <div className={`card ${styles.card}`}>
        <div className={`card-body ${styles.body}`}>
          <img
            src="./imges/pr1.jpeg"
            alt="Profile"
            className={styles.profileImage}
          />
          <div className={styles.info}>
            <h5 className={`card-header ${styles.header}`}>HAMZA GHAFFAR</h5>
            <div className={styles.section}>
              <span className={`card-title ${styles.title}`}>
                <i className="fas fa-envelope"></i> Email:
              </span>
              <span className={`card-text ${styles.text}`}>
                hamza.ghaffar@hotmail.com
              </span>
            </div>
            <div className={styles.section}>
              <span className={`card-title ${styles.title}`}>
                <i className="fas fa-phone"></i> Phone:
              </span>
              <span className={`card-text ${styles.text}`}>+66011923366</span>
            </div>
            <div className={styles.section}>
              <span className={`card-title ${styles.title}`}>
                <i className="fas fa-map-marker-alt"></i> Address:
              </span>
              <span className={`card-text ${styles.text}`}>
                Portschach, 9210, Austria
              </span>
            </div>
            <button className={`btn ${styles.customButton}`} type="submit">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

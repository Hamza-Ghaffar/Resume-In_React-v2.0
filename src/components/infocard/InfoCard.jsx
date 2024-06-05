import React, { useState } from "react";
import styles from "./InfoCard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const InfoCard = () => {
  // State variables for name and edit mode
  const [name, setName] = useState("HAMZA GHAFFAR");
  const [isEditingName, setIsEditingName] = useState(false);

  // Function to enable name editing
  const handleEditName = () => {
    setIsEditingName(true);
  };

  // Function to save edited name
  const handleSaveName = () => {
    setIsEditingName(false);
    // Additional save logic can be added here
  };

  // Function to handle 'Enter' key press for saving name
  const handleKeyPressName = (e) => {
    if (e.key === "Enter") {
      handleSaveName();
    }
  };

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
            <h5 className={`card-header ${styles.header}`}>
              {isEditingName ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyPress={handleKeyPressName}
                />
              ) : (
                name
              )}
            </h5>
            <button
              className={`btn ${styles.customButton}`}
              onClick={handleEditName}
            >
              Edit Name
            </button>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

import React from "react";
import styles from "./BottomBar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const BottomBar = () => {
  return (
    <>
      <div className={styles.container}>
        <div
          className="card text-center"
          style={{
            boxShadow: "0px 4px 6px rgb(12, 12, 12)",
            backgroundColor: "rgba(211, 163, 4, 0.781)",
            borderRadius: ".5rem",
            width: "1500px",
          }}
        >
          <div className="card-header">Extra's</div>
          <div className="card-body">
            <h5 className="card-title">THANKS !</h5>
            <p
              className="card-text"
              style={{
                color: "white",
                textAlign: "justify",
                textJustify: "inter-word",
                lineHeight: "1.6",
              }}
            >
              Explore the world of technology and innovation with me as we
              embark on a journey through my experiences, projects, and
              expertise as an IT Engineer. This platform serves as a window into
              my professional endeavors and a testament to my passion for
              pushing the boundaries of technology to create meaningful
              solutions. Join me as we dive into the exciting realm of IT, where
              every challenge is an opportunity for growth and innovation.
            </p>
            <button className={styles.customButton} type="submit">
              GIT-HUB
            </button>
          </div>
          <div className="card-footer text-body-secondary">2 days ago</div>
        </div>
      </div>
    </>
  );
};

export default BottomBar;

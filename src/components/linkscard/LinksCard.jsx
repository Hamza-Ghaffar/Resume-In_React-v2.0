import React from "react";
import styles from "./LinksCard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LinksCard = () => {
  return (
    <div className={`${styles.container}`}>
      <div
        className={`${styles.card} mx-auto max-w-6xl bg-gray-900 shadow p-10 space-y-2 rounded-md hover:-translate-y-2 duration-300`}
      >
        <div className={styles.mainContent}>
          <div className={styles.header}>
            <div className={styles.footer}>"By the grace of GOD"</div>
            <span>Update on</span>
            <span>29-June-2024</span>
          </div>
          <div className=" text-sm md:text-base lg:text-lg xl:text-xl text-white text-justify font-mono">
            <a href="" className="text-justify">
              Connect with me on LinkedIn to explore my professional journey.
            </a>
          </div>
          <div className={`${styles.categories}`}>
            <span>Linkedin</span>
          </div>
          <div className="text-sm md:text-base lg:text-lg xl:text-xl text-white text-justify font-mono">
            <a href="#" className="text-justify">
              Check out my GitHub profile for my latest projects and
              contributions.
            </a>
          </div>
          <div className={styles.categories}>
            <span>Git Hub</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksCard;

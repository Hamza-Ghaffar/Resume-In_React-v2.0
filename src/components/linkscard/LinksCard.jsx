import React from "react";
import styles from "./LinksCard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LinksCard = ({ linksCardData }) => {
  return (
    <div className={`${styles.container}`}>
      {linksCardData.map((card) => (
        <div
          key={card.id}
          className={`${styles.card} mx-auto max-w-6xl bg-blue-900 shadow p-10 space-y-2 rounded-md hover:-translate-y-2 duration-300`}
        >
          <div className={styles.mainContent}>
            <div className={styles.header}>
              <div className={styles.footer}>By the grace of GOD</div>
              <span>Update on </span>
              <span>{card.updatedate}</span>
            </div>

            {Object.keys(card.sociallinks).map((linkName) => (
              <div key={linkName} className="mb-4">
                <div className=" mx-3 text-sm md:text-base lg:text-lg xl:text-xl text-white text-justify font-mono mb-2">
                  <a
                    href={card.sociallinks[linkName].url}
                    className="text-justify"
                  >
                    {card.sociallinks[linkName].text}
                  </a>
                </div>
                <div className={styles.categories}>
                  <a href={card.sociallinks[linkName].url}>
                    <span>{card.sociallinks[linkName].name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinksCard;

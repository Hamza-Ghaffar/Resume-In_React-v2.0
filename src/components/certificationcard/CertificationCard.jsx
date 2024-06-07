import React from "react";
import { FaGoogleDrive } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import styles from "./CertificationCard.module.css";

const CertificationCard = ({ certificationCardData }) => {
  if (!certificationCardData || certificationCardData.length === 0) {
    return <div>No certification data available</div>;
  }

  return (
    <div className="bg-gray-50 mx-auto max-w-6xl shadow-lg p-10 space-y-6 rounded-lg ">
      <h1 className="text-3xl font-bold shadow p-4 bg-white text-black rounded-lg">
        <GrCertificate className="inline-block mr-2" /> Certifications
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {certificationCardData.map((certification) => (
          <div
            key={certification.id}
            className={`${styles.card} bg-gray-100 p-6 rounded-lg shadow-md`}
          >
            <div className={styles.cardPhoto}>
              <img
                src={certification.img}
                alt={certification.title}
                className={styles.icon}
              />
            </div>
            <div className={styles.cardTitle}>
              {certification.title} <br />
              <span>{certification.subtitle}</span>
            </div>
            <div className={styles.cardSocials}>
              {/* Source Icon */}
              {certification.srclink && (
                <a
                  href={certification.srclink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGoogleDrive
                    className={`${styles.sourceIcon} text-blue-500`}
                    title="Source"
                  />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationCard;

import React from "react";
import styles from "./ProjectsCard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ProjectsCard = ({ folioCardData }) => {
  return (
    <>
      <div
        className={`${styles.container} bg-blue-900 mx-auto max-w-6xl p-10 space-y-2 rounded-md hover:-translate-y-2 duration-300`}
      >
        <div>
          <h2 className="text-xl bg-white font-bold mb-4 rounded-md p-4 shadow-lg text-black">
            FOLIO
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {folioCardData.map((folioData) => (
              <a
                key={folioData.id} // Ensure each id is unique
                href={folioData.src} // Link to the source
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Security measure for opening links in a new tab
                className="block rounded-lg p-6 shadow-lg bg-white hover:bg-gray-100 transition duration-300"
              >
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-black">
                    {folioData.title}
                  </h2>
                  <p className="break-words">{folioData.detail}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;

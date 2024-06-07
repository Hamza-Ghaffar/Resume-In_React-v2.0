import React from "react";
import styles from "./EducationCard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const EducationCard = ({ educationCardData }) => {
  return (
    <div
      className={`${styles.container} mx-auto max-w-6xl bg-white shadow p-10 space-y-2 rounded-md hover:-translate-y-2 duration-300`}
    >
      <div className={`${styles.educationCard}`}>
        <h2 className="text-2xl font-bold mb-2 text-Black  ">Education</h2>
        <div className="flex flex-col">
          {educationCardData.map((educard) => (
            <div key={educard.id}>
              <div className="mb-2 text-2xl text-Black">
                {educard.insitutename}
              </div>
              <div className="flex justify-between items-start mb-2 text-black">
                <span>{educard.coursename}</span>
                <span className="ml-4">{educard.address}</span>
              </div>
              <div className="flex justify-between items-start mb-2 text-black">
                <span>Course Work:</span>
                <span className="ml-4">{educard.date}</span>
              </div>
              <p className="mb-2 text-1xl text-Black"></p>
              {Object.keys(educard.courseworks).map((courseworkskey) => (
                <div
                  key={courseworkskey}
                  className="flex items-start mb-2 text-black"
                >
                  <div className="text-justify justify-between mb-2 text-1xl text-Black">
                    <p>{educard.courseworks[courseworkskey].title}</p>
                    <li>{educard.courseworks[courseworkskey].detail}</li>

                    {Object.keys(educard.courseworks[courseworkskey].links).map(
                      (linkKey) => (
                        <div className=" justify-between" key={linkKey}>
                          <mark className="text-white mx-1 bg-blue-400 rounded  border-1 border-black rounded-start-circle w-1">
                            REPO
                          </mark>
                          <a
                            href={
                              educard.courseworks[courseworkskey].links[linkKey]
                            }
                          >
                            {linkKey}
                          </a>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
              <div>
                Key Subjects:
                {Object.keys(educard.keysubjectslist).map(
                  (subjectslistskey) => (
                    <ul key={subjectslistskey} className="list-disc pl-5">
                      <li>{educard.keysubjectslist[subjectslistskey]}</li>
                    </ul>
                  )
                )}
              </div>

              <br />
              <hr />
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;

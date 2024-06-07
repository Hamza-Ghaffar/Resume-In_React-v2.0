import React from "react";
import styles from "./WorkExperienceCard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const WorkExperienceCard = ({ workexperienceCardData }) => {
  return (
    <div
      className={`${styles.container} mx-auto max-w-6xl bg-white shadow p-10 space-y-2 rounded-md hover:-translate-y-2 duration-300`}
    >
      <div className={` ${styles.educationCard}`}>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-2 text-Black">
            Working Experiences
          </h1>
          {workexperienceCardData.map((workexperiencecard, index) => (
            <div key={index}>
              <div className="mb-2 text-1xl text-Black"></div>
              <div className="mt-">
                <h1 className="mb-3 text-xl ">
                  <mark className=" text-white bg-blue-400 rounded">
                    {workexperiencecard.insitutename}
                  </mark>
                </h1>
              </div>
              <div className="flex justify-between items-start mb-2 text-black">
                <span>{workexperiencecard.postion}</span>
                <span className="ml-4">{workexperiencecard.address}</span>
              </div>
              <p className="mb-2 text-1xl text-Black"></p>
              <div className="flex justify-between items-start mb-2 text-black">
                <span>{workexperiencecard.role} </span>
                <span className="ml-4">{workexperiencecard.date}</span>
              </div>
              <div>
                Key Roles:
                {Object.keys(workexperiencecard.keytasks).map(
                  (tasklistkey, index) => (
                    <ul key={index} className="list-disc pl-5">
                      <li>{workexperiencecard.keytasks[tasklistkey]}</li>
                    </ul>
                  )
                )}
              </div>
              <br />

              {workexperiencecard.skillset && (
                <div>
                  <p>Key Skills:</p>
                  {Object.keys(workexperiencecard.skillset).map(
                    (skillkey, index) => (
                      <ul
                        key={index}
                        className="list-disc pl-5 inline-block mb-3"
                      >
                        <li>{workexperiencecard.skillset[skillkey]}</li>
                      </ul>
                    )
                  )}
                  <br />

                  <div>
                    {Object.keys(workexperiencecard.links).map(
                      (linkkey, index) => (
                        <div
                          className=" inline-block  justify-between"
                          key={index}
                        >
                          <mark className="text-white mx-1 bg-gray-600 rounded  border-1 border-black rounded-start-circle w-1">
                            Profile
                          </mark>
                          <a href={workexperiencecard.links[linkkey]}>
                            {linkkey}
                          </a>
                        </div>
                      )
                    )}{" "}
                    <br />
                    <br />
                    <hr />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCard;

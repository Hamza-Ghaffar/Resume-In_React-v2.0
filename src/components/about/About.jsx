import React from "react";
import styles from "./About.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const About = ({ aboutData }) => {
  return (
    <div className={`${styles.container} `}>
      <article className="mx-auto max-w-6xl bg-gray-900 shadow p-10 space-y-2 rounded-md hover:-translate-y-2 duration-300">
        <h3 className="text-sm md:text-base lg:text-lg xl:text-xl text-white text-justify">
          <span className="hover:font-bold hover:text-orange-400">
            About me
          </span>
        </h3>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl text-white text-justify">
          {aboutData[0].about}
        </p>
      </article>
    </div>
  );
};

export default About;

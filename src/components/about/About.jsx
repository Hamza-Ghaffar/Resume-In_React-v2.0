import React from "react";
import styles from "./About.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className={`${styles.container} `}>
      <article className="mx-auto max-w-6xl bg-gray-900 shadow p-10 space-y-2 rounded-md hover:-translate-y-2 duration-300">
        <h3 className="text-sm md:text-base lg:text-lg xl:text-xl text-white text-justify">
          <span className="hover:font-bold hover:text-orange-400">
            About me
          </span>
        </h3>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl text-white text-justify">
          I am currently pursuing my Master’s degree, which allows me the
          flexibility to work full‑time or part‑time alongside my coursework. I
          can easily relocateasmythesiswillbecompletedremotely.I am committed to
          ongoing learning and the adoption of new technologies and processes. I
          have acquired firsthand knowledge of L1 and L2 methods, which has
          enhanced my understanding of software development and network
          infrastructure with self‑organization, flexibility, and good time
          management skills. Whether it’s a part‑time job or a working student
          position, I am eager to contribute to the versatile field of IT domain
          of data acquisition, post-processing, and visualization with my
          T‑shaped knowledge. <br></br>
          <br></br>I am confident that, once I start, I can quickly earn my
          position and make meaningful contributions across various IT domains,
          as I have successfully done in the past. I understand the application
          process takes time, and I assure you that if given the opportunity, my
          commitment to your organization will be long‑term, unless you decide
          otherwise.
        </p>
        <button className={styles.customButton} type="submit">
          Edit
        </button>
      </article>
    </div>
  );
};

export default About;

import React from "react";
import styles from "./Title.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Title = ({ infoCardValues }) => {
  return (
    <>
      <div className="mt-">
        <h1 className="mb-3 text-xl ">
          <mark className=" text-white bg-blue-600 rounded dark:bg-blue-500">
            {infoCardValues[0].title.toUpperCase()}
          </mark>
        </h1>
      </div>
    </>
  );
};

export default Title;

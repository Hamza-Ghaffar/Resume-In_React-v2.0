import React from "react";
import styles from "./FullName.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const FullName = ({ infoCardValues }) => {
  return (
    <>
      <div className="mt-2">
        <h1 className=" text-4xl text-BLACK ">
          {infoCardValues[0].firstName.toUpperCase()}{" "}
          {infoCardValues[0].lastName.toUpperCase()}
        </h1>
      </div>
    </>
  );
};

export default FullName;

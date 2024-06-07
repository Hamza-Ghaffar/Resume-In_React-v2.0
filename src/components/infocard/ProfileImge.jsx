import React from "react";
import styles from "./ProfileImge.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfileImge = ({ infoCardValues }) => {
  return (
    <>
      <img
        src={infoCardValues[0].imgsrc}
        alt="Profile"
        className={`rounded-full w-32 h-32 object-cover mx-auto ${styles.profileImage}`}
      />
    </>
  );
};

export default ProfileImge;

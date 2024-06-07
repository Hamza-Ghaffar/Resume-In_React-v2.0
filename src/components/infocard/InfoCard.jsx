import React from "react";
import styles from "./InfoCard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./Title";
import FullName from "./FullName";
import ExtraDetails from "./ExtraDetails";
import ProfileImge from "./ProfileImge";

const InfoCard = ({ infoCardValues }) => {
  return (
    <div className={`flex ${styles.container}`}>
      <div className={`flex card ${styles.card}`}>
        <div className={`flex card-body ${styles.body}`}>
          <ProfileImge infoCardValues={infoCardValues} />
          <div className={`flex ${styles.info}`}>
            <div className="mx-10 mt-2 flex flex-col font-bold text-lg md:text-2xl lg:text-3xl">
              <FullName infoCardValues={infoCardValues} />
              <Title infoCardValues={infoCardValues} />
              <ExtraDetails infoCardValues={infoCardValues} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

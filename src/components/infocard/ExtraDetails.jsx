import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ExtraDetails = ({ infoCardValues }) => {
  return (
    <>
      <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700 mx-1 sm:mx-auto p-2 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col pb-3">
          <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
            Email
          </dt>
          <dd className="text-base break-words">{infoCardValues[0].email.p}</dd>
        </div>
        <div className="flex flex-col py-3">
          <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
            Address
          </dt>
          <dd className="text-base break-words">
            {infoCardValues[0].address.city} <br />
            {infoCardValues[0].address.country}
          </dd>
        </div>
        <div className="flex flex-col pt-3">
          <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
            Phone number
          </dt>
          <dd className="text-base font-semibold">
            {infoCardValues[0].contact.primary}
          </dd>
        </div>
      </dl>
    </>
  );
};

export default ExtraDetails;

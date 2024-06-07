import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const LanguagesCard = ({ languagesCardData }) => {
  return (
    <div className="bg-gray-50 mx-auto max-w-6xl shadow-lg p-10 space-y-6 rounded-lg transform hover:-translate-y-2 duration-300 transition-all">
      <h1 className="text-3xl font-bold shadow p-4 bg-white text-black rounded-lg">
        <FaLanguage className="inline-block mr-2" /> Languages
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {languagesCardData.map((eachLanguage) => (
          <div
            key={eachLanguage.id}
            className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center mb-3">
              <AiFillStar className="text-yellow-500 mr-1" />
              <span className="block text-lg font-medium text-gray-800">
                {eachLanguage.title}
              </span>
            </div>
            <div className="relative w-full bg-gray-200 rounded-full h-6 overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full flex items-center justify-end"
                style={{ width: `${eachLanguage.level}%` }}
              >
                <span className="text-xs font-semibold text-white mr-2">
                  {eachLanguage.level}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagesCard;

import React from "react";
import styles from "./ProjectsCard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ProjectsCard = () => {
  return (
    <div
      className={`${styles.container} bg-white  mx-auto max-w-6xl  shadow p-10 space-y-2 rounded-md hover:-translate-y-2 duration-300`}
    >
      <div className="">
        <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-black rounded-lg p-4 shadow-lg text-black">
          FOLIO
        </h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gradient-to-r from-white to-black rounded-lg p-6 shadow-lg text-white">
            <h2 className="text-xl font-semibold mb-2">HTML CSS</h2>
            <p className="text-gray-200">Contenido de la tarjeta 3...</p>
          </div>

          <div className="bg-gradient-to-r from-black to-black rounded-lg p-6 shadow-lg text-white">
            <h2 className="text-xl font-semibold mb-2">REACT</h2>
            <p className="text-gray-200">Contenido de la tarjeta 1...</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg p-6 shadow-lg text-white">
            <h2 className="text-xl font-semibold mb-2">PYTHON</h2>
            <p className="text-gray-200">Contenido de la tarjeta 4...</p>
          </div>
          <div className="bg-gradient-to-r p-6 shadow-lg  from-black to-black text-white">
            <h2 className="text-xl font-semibold mb-2">TABLEAU</h2>
            <p className="text-gray-200">Contenido de la tarjeta 1...</p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg p-6 shadow-lg text-white">
            <h2 className="text-xl font-semibold mb-2">SQL</h2>
            <p className="text-gray-200">Contenido de la tarjeta 2...</p>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-lime-500 rounded-lg p-6 shadow-lg text-white">
            <h2 className="text-xl font-semibold mb-2">LINUX</h2>
            <p className="text-gray-200">Contenido de la tarjeta 3...</p>
          </div>
          <div className="bg-gradient-to-r from-white to-black rounded-lg p-6 shadow-lg text-white">
            <h2 className="text-xl font-semibold mb-2">JAVASCRIPT</h2>
            <p className="text-gray-200">Contenido de la tarjeta 1...</p>
          </div>

          <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg p-6 shadow-lg text-white">
            <h2 className="text-xl font-semibold mb-2">CLOUD</h2>
            <p className="text-gray-200">Contenido de la tarjeta 4...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;

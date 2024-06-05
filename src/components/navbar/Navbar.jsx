import React from "react";
import styles from "./Navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ handleSearch, text, inputRef }) => {
  return (
    <div className={styles.container}>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          boxShadow: "0px 4px 6px rgb(12, 12, 12)",
          backgroundColor: "rgba(211, 163, 4, 0.781)",
          borderRadius: ".5rem",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="./imges/flex.png"
              alt="Logo"
              width="80"
              height="24"
              className="d-inline-block align-text-top"
            />
          </a>
          {/* Input field for searching */}
          <input
            ref={inputRef}
            onKeyDown={handleSearch}
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="d-flex">
            {/* Button to trigger search */}
            <button
              className={styles.customButton}
              type="submit"
              onClick={handleSearch}
            >
              Search
            </button>
            {/* Render buttons dynamically based on the text array */}
            {text.map((buttonval, index) => (
              <button key={index} className={styles.customButton} type="button">
                {buttonval}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

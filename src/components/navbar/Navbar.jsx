import React from "react";
import styles from "./Navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <>
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
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className={styles.customButton} type="submit">
                Search
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

import React, { useState, useRef } from "react";
import Navbar from "../navbar/Navbar";

const Header = () => {
  const [text, setText] = useState([]);
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      let newValue = inputRef.current.value;
      if (newValue.trim()) {
        // Avoid adding empty values
        setText((prevText) => [...prevText, newValue]);
        inputRef.current.value = ""; // Clear input field after adding
      }
    }
  };

  return (
    <div>
      {/* Input field for searching */}
      <input
        ref={inputRef}
        onKeyDown={handleSearch}
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      {/* Passing handleSearch, text, and inputRef as props to Navbar */}
      <Navbar handleSearch={handleSearch} text={text} inputRef={inputRef} />
    </div>
  );
};

export default Header;

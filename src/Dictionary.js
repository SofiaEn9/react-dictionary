import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionart() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <div className="Dictionary-container">
        <h1>Dictionary</h1>
        <form onSubmit={search} className="Dictionary-form">
          <input
            type="search"
            placeholder="Look up a word..."
            onChange={handleKeywordChange}
            className="col-7 Dictionary-search-bar"
            autoFocus="off"
          />
          <input
            type="submit"
            value="Search"
            className="col-3 Dictionary-search-btn"
          />
        </form>
      </div>
    </div>
  );
}

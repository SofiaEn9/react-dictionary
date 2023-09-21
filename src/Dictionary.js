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
      <form onSubmit={search} className="Dictionary-form">
        <input
          type="search"
          placeholder="Look up a word..."
          onChange={handleKeywordChange}
          className="Dictionary-search-bar"
        />
        <input type="submit" value="Search" className="Dictionary-search-btn" />
      </form>
      <p>Hello from Dictionary</p>
    </div>
  );
}

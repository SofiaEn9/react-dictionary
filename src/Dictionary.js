import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // DOCUMENTATION: GOOGLE DICTIONARY API
    // https://api.dictionaryapi.dev/api/v2/entries/en/car
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <div className="Dictionary-container">
        <h1>Dictionary</h1>
        <form
          onSubmit={search}
          className="Dictionary-form"
          id="Dictionary-form"
        >
          <input
            type="search"
            placeholder="Look up a word..."
            onChange={handleKeywordChange}
            autoFocus="off"
            className="col-7 Dictionary-search-bar"
          />
          <input
            type="submit"
            value="Search"
            className="col-3 Dictionary-search-btn"
          />
        </form>
        <Results results={results} />
      </div>
    </div>
  );
}

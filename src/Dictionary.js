import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "de926abe0f35af91c8149b6305ofa34t";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
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

import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionart() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data.meanings[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

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

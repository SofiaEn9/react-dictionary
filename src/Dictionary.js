import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    // DOCUMENTATION: GOOGLE DICTIONARY API
    // https://api.dictionaryapi.dev/api/v2/entries/en/car
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    // DOCUMENTATION https://www.pexels.com/api/documentation/#photos-search
    const pexelsApiKey =
      "4WQWYpxMcQHsRklocLZxvEJc22CN4E7dlWRouLQOg6CBQBCNAeznOdLx";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="row Dictionary">
      <div className="col-sm-6 Dictionary-container">
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
            // defaultValue={props.defaultKeyword}
          />
          <input
            type="submit"
            value="Search"
            className="col-3 Dictionary-search-btn"
          />
        </form>
        <Results results={results} />
      </div>
      <div className="col-sm-6 ">
        <Photos photos={photos} />
      </div>
    </div>
  );
}

import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {/* SHOW ONLY ONE DEFINITION OPTION */}
      <p>
        {props.meaning.definitions[0].definition}
        <br />
        <strong>Example:</strong>
        <em>{props.meaning.definitions[0].example}</em>
      </p>
      <Synonyms synonyms={props.meaning.definitions[0].definition.synonyms} />
    </div>
  );
}

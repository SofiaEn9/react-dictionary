import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        <div>
          <p>{props.meaning.definition}</p>
        </div>
      </div>
    );
  }
}

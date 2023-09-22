import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h3 className="keyword">{props.results.word}</h3>
        <Meaning meaning={props.results.meanings[0]} />
      </div>
    );
  } else {
    return null;
  }
}

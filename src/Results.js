import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="keyword-container">
          <h3 className="keyword">{props.results.word}</h3>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

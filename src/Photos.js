import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img src={photo.src.landscape} className="img-fluid" />
                </a>
              </div>
            );
          })}
        </div>
        <div className="row">
          <footer>
            <a
              href="https://github.com/SofiaEn9"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>{" "}
            by
            <a
              href="https://www.linkedin.com/in/sofia-enriquez-p/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Sofía Enríquez
            </a>
          </footer>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

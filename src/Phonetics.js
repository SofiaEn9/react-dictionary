import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "./Audioplayer.css";
import speaker from "./media/speaker.png";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {/*DOCUMENTATION https://www.npmjs.com/package/react-h5-audio-player#html-audio-tag-native-attributes */}
      <AudioPlayer
        src={props.phonetic.audio}
        preload={false}
        autoPlay={false}
        autoPlayAfterSrcChange={false}
        showJumpControls={false}
        customVolumeControls={[]}
        customAdditionalControls={[]}
        layout="horizontal"
        defaultCurrentTime={[]}
        defaultDuration={[]}
        customIcons={{
          play: <img src={speaker} alt="play" />,
          pause: <img src={speaker} alt="Play" />,
        }}
        onPlay={(e) => console.log("onPlay")}
      />
      <span className="Phonetic-text">{props.phonetic.text}</span>
    </div>
  );
}

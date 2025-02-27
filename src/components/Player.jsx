import React from "react";
import {
  faCirclePlay,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Player = () => {
  return (
    <div className="player">
      <div className="player__controllers">
        <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={faCirclePlay}
        />
        <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
      </div>
      <div className="player__bar"></div>
    </div>
  );
};

export default Player;

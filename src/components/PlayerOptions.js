import React from "react";

function PlayerOptions(props) {
  return (
    <div className="player-options">
      <button
        onClick={() => props.runGame("hand")}
        className="player-btn-1"
      ></button>
      <button
        onClick={() => props.runGame("hand-rock")}
        className="player-btn-2"
      ></button>
      <button
        onClick={() => props.runGame("hand-scissor")}
        className="player-btn-3"
      ></button>
    </div>
  );
}

export default PlayerOptions;

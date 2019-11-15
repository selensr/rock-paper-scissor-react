import React from "react";

function Opponent(props) {
  return (
    <div className="opponent-container">
      <div
        className={` ${
          props.start ? "opponent-card-animated" : "opponent-card"
        }`}
      >
        <div
          className={props.opponentHand === "hand" ? "opponent-card" : ""}
        ></div>
        <div
          className={
            props.opponentHand === "hand-rock" ? "opponent-card-2" : ""
          }
        ></div>
        <div
          className={
            props.opponentHand === "hand-scissor" ? "opponent-card-3" : ""
          }
        ></div>
      </div>
    </div>
  );
}

export default Opponent;

import React from "react";
import "./sass/App.css";
import PlayerOptions from "./components/PlayerOptions";
import Opponent from "./components/Opponent";
import { decideWinner, opponentRandom } from "./utils/Rules";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerHand: "",
      start: false,
      opponentHand: "",
      result: "",
      wins: 0,
      losses: 0,
      draws: 0
    };
  }

  runGame = choice => {
    this.setState({ start: true }, () => {
      setTimeout(() => {
        this.setState({
          start: false,
          playerHand: choice,
          opponentHand: opponentRandom(),
          result: decideWinner(this.state.playerHand, this.state.opponentHand),
          wins: this.state.result === "win" ? (this.state.wins += 1) : null,
          losses:
            this.state.result === "lose" ? (this.state.losses += 1) : null,
          draws: this.state.result === "draw" ? (this.state.draws += 1) : null
        });

        console.log(this.state.draws);
        console.log(this.state.losses);
        console.log(this.state.wins);
        console.log(this.state.opponentHand);
      }, 3000);
    });
  };

  render() {
    return (
      <div className="App">
        <Opponent
          opponentHand={this.state.opponentHand}
          start={this.state.start}
        />
        <div className="reminder">
          <p>Start Game!</p>
        </div>
        <div className="results">
          <p>Wins: {this.state.wins}</p>
          <p>Draws: {this.state.draws}</p>
          <p>Losses: {this.state.losses}</p>
        </div>
        <PlayerOptions runGame={this.runGame} />
      </div>
    );
  }
}

export default App;

///Users/Asus/Desktop/PROJECTS2/react homework/rps/src/img/hand.png"

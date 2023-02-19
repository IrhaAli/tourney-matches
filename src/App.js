import "./App.css";
import PlayerList from "./Components/PlayerList";
import MatchList from "./Components/MatchList";

function App() {
  return (
    <div className="App">
      <h1>
        Tourney Matches{" "}
        <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList />
      <MatchList />
    </div>
  );
}

export default App;

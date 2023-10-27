import { Route, Routes } from "react-router-dom";
import StartPage from "./components/startPage";
import GamePage from "./components/gamePage";

function AppGame(props: any) {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<StartPage setGameStarts={props.setGameStarts}></StartPage>}
        ></Route>
        <Route
          path="/game"
          element={<GamePage setGameStarts={props.setGameStarts}></GamePage>}
        ></Route>
      </Routes>
    </div>
  );
}

export default AppGame;

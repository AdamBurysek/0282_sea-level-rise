import { Route, Routes, useNavigate } from "react-router-dom";
import StartPage from "./components/startPage";
import GamePage from "./components/gamePage";
import places from "./data/places.json";
import { useEffect, useState } from "react";
import "./App.css";

function App(props: any) {
  const [placeInfo, setPlaceInfo] = useState<string[]>([]);

  const navigate = useNavigate();

  const handleCityButtonClick = (event: any) => {
    const placeId = event.target.id;
    const place: any = places.find((place) => place.imageName === placeId);
    if (place) {
      setPlaceInfo([
        place.imageName,
        place.czechName,
        place.englishName,
        place.germanName,
      ]);
      navigate("/game");
      props.setGameStarts(true);
    }
  };

  function gameReset() {
    if (props.isActive === false) {
      navigate("/");
      props.setGameStarts(false);
    }
  }

  useEffect(() => {
    gameReset();
  }, [props.isActive]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <StartPage
              setGameStarts={props.setGameStarts}
              language={props.language}
              handleCityButtonClick={handleCityButtonClick}
            ></StartPage>
          }
        ></Route>
        <Route
          path="/game"
          element={
            <GamePage
              setGameStarts={props.setGameStarts}
              language={props.language}
              placeInfo={placeInfo}
            ></GamePage>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

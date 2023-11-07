import { Route, Routes, useNavigate } from "react-router-dom";
import StartPage from "./components/startPage";
import GamePage from "./components/gamePage";
import places from "./data/places.json";
import { useState } from "react";

function AppGame(props: any) {
  const [placeInfo, setPlaceInfo] = useState<string[]>([]);

  const navigate = useNavigate();

  const handleCityButtonClick = (event) => {
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

export default AppGame;

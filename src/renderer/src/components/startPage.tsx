import { useEffect, useState } from "react";
import WorldMap from "../images/stoupani-mori.png";
import places from "../data/places.json";

interface StartPageProps {
  setGameStarts: (value: boolean) => void;
  language: string;
  handleCityButtonClick: (city: any) => void;
}

const StartPage = (props: StartPageProps) => {
  const [randomCityNumber, setRandomCityNumber] = useState<number | null>(null);
  const maxUpdates = 3;
  let updates = 0;

  const getRandomNumber = (): number => {
    return Math.floor(Math.random() * places.length);
  };

  const updateRandomNumber = () => {
    if (updates < maxUpdates) {
      setRandomCityNumber(getRandomNumber());
      updates++;
    } else {
      setRandomCityNumber(null);
    }
  };

  const restartAnimation = () => {
    updates = 0;
  };

  useEffect(() => {
    const interval = setInterval(updateRandomNumber, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(restartAnimation, 15000);
    return () => {
      clearInterval(interval);
    };
  }, [updates]);

  return (
    <div>
      <div className="world-map_image">
        <img
          src={WorldMap}
          alt="World Map"
        />
      </div>
      {places.map((place, index) => (
        <button
          id={place.imageName}
          key={place.englishName}
          className={
            randomCityNumber === index
              ? "city_button city_button_bigger"
              : "city_button"
          }
          style={{ left: place.latitude, top: place.longitude }}
          onClick={props.handleCityButtonClick}
        />
      ))}
      <div className="main_info-text-box">
        <h3 className="main_info-text">
          {props.language === "cz" && (
            <span>
              Dotykem na <b>červenou</b> tečku zobrazíte požadovanou oblast
            </span>
          )}
          {props.language === "en" && (
            <span>
              By touching the <b>red</b> dot, you will display the desired area.
            </span>
          )}
          {props.language === "de" && (
            <span>
              Durch Berühren des <b>roten</b> Punktes wird der gewünschte
              Bereich angezeigt.
            </span>
          )}
        </h3>
      </div>
    </div>
  );
};

export default StartPage;

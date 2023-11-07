import WorldMap from "../images/stoupani-mori.png";
import places from "../data/places.json";
import { useEffect, useState } from "react";

const StartPage = (props: any) => {
  const [randomNumber, setRandomNumber] = useState<number | null>(null);
  const maxUpdates = 3; // Number of times to update the random number
  let updates = 0;

  const getRandomNumber = (): number => {
    return Math.floor(Math.random() * places.length);
  };

  const updateRandomNumber = () => {
    if (updates < maxUpdates) {
      setRandomNumber(getRandomNumber());
      updates++;
    } else {
      setRandomNumber(null); // Set random number to null after maxUpdates
    }
  };

  useEffect(() => {
    const interval = setInterval(updateRandomNumber, 1000); // Update every 1 second

    return () => {
      clearInterval(interval); // Cleanup to ensure the interval is cleared on unmount
    };
  }, []);

  return (
    <div>
      <div className="world-map_image">
        <img
          src={WorldMap}
          alt=""
        />
      </div>
      {places.map((place, index) => (
        <button
          id={place.imageName}
          key={place.englishName}
          className={
            randomNumber === index
              ? "city_button city_button_bigger"
              : "city_button"
          }
          style={{ left: place.latitude, top: place.longitude }}
          onClick={props.handleCityButtonClick}
        ></button>
      ))}
      <h3 className="main_info-text">
        Dotykem na <b>červenou</b> tečku zobrazíte požadovanou oblast
      </h3>
    </div>
  );
};

export default StartPage;

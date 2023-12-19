import { useEffect, useState } from "react";
import places from "../data/places.json";

interface CityButtons {
  handleCityButtonClick: (city: any) => void;
}

const CityButtons = (props: CityButtons) => {
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
    <>
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
    </>
  );
};

export default CityButtons;

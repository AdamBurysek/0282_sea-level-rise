import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Waves from "../images/vlny.png";
import Buoy from "../images/buoy.png";

interface GamePageProps {
  setGameStarts: (value: boolean) => void;
  language: string;
  placeInfo: any;
}

const WATER_OFFSET: number = -652;

const GamePage = (props: GamePageProps) => {
  const [value, setValue] = useState(0);
  const [thumbPostion, setThumbPostion] = useState(WATER_OFFSET);
  const [wavesAnimate, setWavesAnimate] = useState(false);
  const [buoyAnimation, setBuoyAnimation] = useState(true);

  const navigate = useNavigate();
  const sliderRef = useRef<HTMLInputElement>(null);

  function animationSwitch() {
    setBuoyAnimation(!buoyAnimation);
  }

  const animate = () => {
    setTimeout(animationSwitch, 4000);
  };

  useEffect(() => {
    animate();
  }, [buoyAnimation]);

  useEffect(() => {
    animationSwitch();
    setWavesAnimate(true);
    const intervalId = setInterval(() => {
      setWavesAnimate((prevIsToggled) => !prevIsToggled);
    }, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const onSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let val = parseInt(event.target.value);
    // There is no 8 in the images. This fixing this problem.
    if (val === 8) {
      val = 9;
    }
    setValue(val);

    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.offsetWidth;
      const min = parseInt(sliderRef.current.min);
      const max = parseInt(sliderRef.current.max);
      const val = parseInt(event.target.value);
      const percentage = (val - min) / (max - min);
      const thumbPositionInPx = sliderWidth * percentage - val * 2;
      setThumbPostion(thumbPositionInPx - WATER_OFFSET * -1);
    }
  };

  function handleBackButtonClick() {
    navigate("/");
    props.setGameStarts(false);
  }

  const marks = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

  return (
    <div>
      <h2 className="city_title">
        {props.language === "cz" && props.placeInfo[1]}
        {props.language === "en" && props.placeInfo[2]}
        {props.language === "de" && props.placeInfo[3]}
      </h2>
      <h3 className="game_info-text">
        {props.language === "cz" && "Výška vody:"}
        {props.language === "en" && "Water level:"}
        {props.language === "de" && "Wasserstand:"}
      </h3>
      <h3 className="game_plus-text">{value !== 0 ? "+" : ""}</h3>
      <h3 className="game_units-text">m</h3>
      <div className="slider_box">
        <input
          className="slider"
          type="range"
          value={value}
          onChange={onSliderChange}
          min={0}
          max={8}
          step={1}
          list="marks"
          ref={sliderRef}
        />
        <datalist id="marks">
          {marks.map((mark) => (
            <option
              key={mark}
              value={mark}
            >
              {mark}
            </option>
          ))}
        </datalist>
        <h3>{value}</h3>
      </div>
      <img
        className="game_img"
        src={`./images/mapImages/${props.placeInfo[0]}0${value}.webp`}
        alt={props.placeInfo[2]}
      />
      <div
        className="water"
        style={{
          bottom: thumbPostion,
          boxShadow: `0px 0px ${
            150 - value * 10
          }px 0px rgba(255, 255, 255, 0.6)`,
        }}
      >
        <img
          className={wavesAnimate ? "waves waves_move" : "waves"}
          src={Waves}
        />
      </div>
      <img
        style={{ bottom: thumbPostion + 840 }}
        src={Buoy}
        className={buoyAnimation ? "buoy" : "buoy buoy_move"}
      />
      <button
        className="back_button"
        onClick={handleBackButtonClick}
      >
        {props.language === "cz" && "Zpět"}
        {props.language === "en" && "Back"}
        {props.language === "de" && "Zurück"}
      </button>
    </div>
  );
};

export default GamePage;

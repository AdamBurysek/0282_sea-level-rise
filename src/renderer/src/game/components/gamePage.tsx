import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Waves from "../images/vlny.png";

const GamePage = (props: any) => {
  const navigate = useNavigate();
  const sliderRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(0);
  const [thumbPostion, setThumbPostion] = useState(-693);
  const [wavesAnimate, setWavesAnimate] = useState(false);

  useEffect(() => {
    setWavesAnimate(true);
    const intervalId = setInterval(() => {
      setWavesAnimate((prevIsToggled) => !prevIsToggled);
    }, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let val = parseInt(event.target.value);
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
      setThumbPostion(thumbPositionInPx - 693);
    }
  };

  function testBackButtonClick() {
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
      <h3 className="game_info-text">Výška vody:</h3>
      <h3 className="game_plus-text">{value !== 0 ? "+" : ""}</h3>
      <h3 className="game_units-text">m</h3>
      <div className="slider_box">
        <input
          className="slider"
          type="range"
          value={value}
          onChange={handleChange}
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
          }px 0px rgba(255, 255, 255, 0.5)`,
        }}
      >
        <img
          className={wavesAnimate ? "waves waves_move" : "waves"}
          src={Waves}
        ></img>
      </div>
      <button
        className="back_button"
        onClick={testBackButtonClick}
      >
        Back
      </button>
    </div>
  );
};

export default GamePage;

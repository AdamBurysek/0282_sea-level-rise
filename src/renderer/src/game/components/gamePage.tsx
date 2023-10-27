import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Waves from "../images/vlny.png";

const GamePage = (props: any) => {
  const navigate = useNavigate();
  const sliderRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(0);
  const [thumbPostion, setThumbPostion] = useState(-635);
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
      const thumbPositionInPx = sliderWidth * percentage - value * 1.9;
      setThumbPostion(thumbPositionInPx - 635);
    }
  };

  function testBackButtonClick() {
    navigate("/");
    props.setGameStarts(false);
  }

  const marks = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  return (
    <div>
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
        src={`../../../images/mapImages/Banglades0${value}.png`}
        alt="Bangladesh Map"
      />
      <div
        className="water"
        style={{ bottom: thumbPostion }}
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

import { useEffect, useState } from "react";
import WavesImage from "../images/vlny.png";

const Waves = () => {
  const [wavesAnimate, setWavesAnimate] = useState<boolean>(false);

  useEffect(() => {
    setWavesAnimate(true);
    const intervalId = setInterval(() => {
      setWavesAnimate((prevIsToggled) => !prevIsToggled);
    }, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <img
      className={wavesAnimate ? "waves waves_move" : "waves"}
      src={WavesImage}
    />
  );
};

export default Waves;

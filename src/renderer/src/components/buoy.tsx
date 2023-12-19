import { useEffect, useState } from "react";
import BuoyImage from "../images/buoy.png";

interface BuoyProps {
  thumbPostion: number;
}

const Buoy = (props: BuoyProps) => {
  const [buoyAnimation, setBuoyAnimation] = useState(true);

  useEffect(() => {
    animationSwitch();
  }, []);

  useEffect(() => {
    animate();
  }, [buoyAnimation]);
  function animationSwitch() {
    setBuoyAnimation(!buoyAnimation);
  }

  const animate = () => {
    setTimeout(animationSwitch, 4000);
  };
  return (
    <img
      style={{ bottom: props.thumbPostion + 840 }}
      src={BuoyImage}
      className={buoyAnimation ? "buoy" : "buoy buoy_move"}
    />
  );
};

export default Buoy;

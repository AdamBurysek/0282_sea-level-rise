import { useNavigate } from "react-router-dom";
import WorldMap from "../images/stoupani mori.png";

const StartPage = (props: any) => {
  const navigate = useNavigate();

  function testButtonClick() {
    navigate("/game");
    props.setGameStarts(true);
  }
  return (
    <div className="world-map_image">
      <img
        src={WorldMap}
        alt=""
      />
      <button
        className="test_button"
        onClick={testButtonClick}
      >
        GAME
      </button>
    </div>
  );
};

export default StartPage;

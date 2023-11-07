import { useNavigate } from "react-router-dom";
import WorldMap from "../images/stoupani-mori.png";

const StartPage = (props: any) => {
  const navigate = useNavigate();

  function testButtonClick() {
    navigate("/game");
    props.setGameStarts(true);
  }
  return (
    <div>
      <div className="world-map_image">
        <img
          src={WorldMap}
          alt=""
        />
      </div>
      <button
        className="test_button"
        onClick={testButtonClick}
      >
        GAME
      </button>
      <h3 className="main_info-text">
        Dotykem na <b>červenou</b> tečku zobrazíte požadovanou oblast
      </h3>
    </div>
  );
};

export default StartPage;

import WorldMap from "../images/stoupani-mori.png";
import CityButtons from "./cityButtons";

interface StartPageProps {
  setGameStarts: (value: boolean) => void;
  language: string;
  handleCityButtonClick: (city: any) => void;
}

const StartPage = (props: StartPageProps) => {
  return (
    <div>
      <div className="world-map_image">
        <img
          src={WorldMap}
          alt="World Map"
        />
      </div>
      <CityButtons handleCityButtonClick={props.handleCityButtonClick} />
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

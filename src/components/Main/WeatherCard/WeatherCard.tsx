import "./WeatherCard.css";
import SunImg from "../../../assets/images/icon-sunny.webp";
//import WeatherPh from "./WeatherPh.png";
import "../WeatherCard/WeatherCard.css";
export default function WeatherCard() {
  return (
    <div className="wc-page">
      <div className="wc-wrap">
        <div className="wc-city">Berlin, Germany</div>
        <div className="wc-date">Tuesday, Aug 5, 2025</div>
        <div className="wc-weather-row">
          <img className="wc-sun" src={SunImg} alt="Sunny" />
          <div className="wc-temp">20°</div>
        </div>
      </div>
    </div>
  );
}

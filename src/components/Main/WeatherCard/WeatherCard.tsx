import "./WeatherCard.css";
import SunImg from "../../../assets/images/icon-sunny.webp";
export default function WeatherCard() {
  return (
    <div className="wc-page">
      <div className="wc-wrap">
        <div className="wc-content">
          <div className="wc-info">
            <div className="wc-city">Berlin, Germany</div>
            <div className="wc-date">Tuesday, Aug 5, 2025</div>
          </div>
          <div className="wc-weather">
            <img className="wc-sun" src={SunImg} alt="Sunny" />
            <div className="wc-temp">20°</div>
          </div>
        </div>
      </div>
    </div>
  );
}

import "./WeatherCard.css";
import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../../../api/weather";

import Sunny from "../../../assets/images/icon-sunny.webp";
import PartlyCloudy from "../../../assets/images/icon-partly-cloudy.webp";
import Overcast from "../../../assets/images/icon-overcast.webp";
import Drizzle from "../../../assets/images/icon-drizzle.webp";
import Rain from "../../../assets/images/icon-rain.webp";
import Snow from "../../../assets/images/icon-snow.webp";
import Storm from "../../../assets/images/icon-storm.webp";
import Fog from "../../../assets/images/icon-fog.webp";

const weatherIcons: Record<string, string> = {
  "01d": Sunny,
  "01n": Sunny,
  "02d": PartlyCloudy,
  "02n": PartlyCloudy,
  "03d": Overcast,
  "03n": Overcast,
  "04d": Overcast,
  "04n": Overcast,
  "09d": Drizzle,
  "09n": Drizzle,
  "10d": Rain,
  "10n": Rain,
  "11d": Storm,
  "11n": Storm,
  "13d": Snow,
  "13n": Snow,
  "50d": Fog,
  "50n": Fog,
};

interface WeatherCardProps {
  city: string;
}

export default function WeatherCard({ city }: WeatherCardProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city),
    enabled: !!city,
  });

  if (!city) return null;
  if (isLoading) return <div>Завантаження...</div>;
  if (isError) return <div>Місто не знайдено!</div>;

  const icon = weatherIcons[data.weather[0].icon] ?? Sunny;

  return (
    <div className="wc-page">
      <div className="wc-wrap">
        <div className="wc-content">
          <div className="wc-info">
            <div className="wc-city">{data.name}, {data.sys.country}</div>
            <div className="wc-date">{new Date().toDateString()}</div>
          </div>
          <div className="wc-weather">
            <img className="wc-sun" src={icon} alt={data.weather[0].description} />
            <div className="wc-temp">{Math.round(data.main.temp)}°</div>
          </div>
        </div>
      </div>
    </div>
  );
}
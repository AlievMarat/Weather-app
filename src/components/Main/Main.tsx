import WeatherCard from "./WeatherCard/WeatherCard";
import HourlyForecast from "./WeatherCard/HourlyForecast";

interface MainProps {
  city: string;
}

export default function Main({ city }: MainProps) {
  return (
    <main className="main">
      <WeatherCard city={city} />
      <HourlyForecast city={city} />
    </main>
  );
}
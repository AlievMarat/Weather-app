import WeatherCard from "./WeatherCard/WeatherCard";
import HourlyForecast from "./WeatherCard/HourlyForecast";
export default function Main() {
  return (
    <main className="main">
      <WeatherCard />
      <HourlyForecast />
    </main>
  );
}

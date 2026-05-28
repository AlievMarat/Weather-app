const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function fetchWeather(city: string) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!res.ok) throw new Error("Місто не знайдено");
  return res.json();
}

export async function fetchForecast(city: string) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!res.ok) throw new Error("Місто не знайдено");
  return res.json();
}
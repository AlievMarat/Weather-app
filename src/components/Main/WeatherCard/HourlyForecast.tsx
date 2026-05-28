import "./hourly-forecast.css";
import Text from "./HourlyTitle";
import HourlyItem from "./HourlyItem";
import DropDownBtn from "../../../UI/DropDownBtn/DropDownBtn";
import IconDropdown from "../../../assets/images/icon-dropdown.svg";
import IconSunny from "../../../assets/images/icon-sunny.webp";
import IconDrizzle from "../../../assets/images/icon-drizzle.webp";
import IconRain from "../../../assets/images/icon-rain.webp";
import IconStorm from "../../../assets/images/icon-storm.webp";
import IconPartlyCloudy from "../../../assets/images/icon-partly-cloudy.webp";
import IconOvercast from "../../../assets/images/icon-overcast.webp";
import IconFog from "../../../assets/images/icon-fog.webp";
import IconSnow from "../../../assets/images/icon-snow.webp";
import { useQuery } from "@tanstack/react-query";
import { fetchForecast } from "../../../api/weather";

interface HourlyForecastProps {
  city: string;
  title?: string;
  dropdownTitle?: string;
}

const weatherIcons: Record<string, string> = {
  "01d": IconSunny,        
  "01n": IconSunny,        
  "02d": IconPartlyCloudy, 
  "02n": IconPartlyCloudy, 
  "03d": IconOvercast,    
  "03n": IconOvercast,     
  "04d": IconOvercast,    
  "04n": IconOvercast,    
  "09d": IconDrizzle,     
  "09n": IconDrizzle,      
  "10d": IconRain,         
  "10n": IconRain,         
  "11d": IconStorm,        
  "11n": IconStorm,        
  "13d": IconSnow,         
  "13n": IconSnow,         
  "50d": IconFog,          
  "50n": IconFog,          
};

const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

export default function HourlyForecast({
  city,
  title = "Hourly forecast",
  dropdownTitle = today,
}: HourlyForecastProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["forecast", city],
    queryFn: () => fetchForecast(city),
    enabled: !!city,
  });

  if (!city) return null;
  if (isLoading) return <div>Завантаження...</div>;
  if (isError) return <div>Місто не знайдено!</div>;

  const items = data.list.slice(0, 8).map((item: any) => ({
    time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    temp: `${Math.round(item.main.temp)}°`,
    icon: weatherIcons[item.weather[0].icon] || IconSunny,
  }));

  return (
    <div className="hourly-forecast">
      <div className="hourly-header">
        <Text text={title} />
        <DropDownBtn
          title={dropdownTitle}
          img={IconDropdown}
          className="hourly-dropdown-btn"
          reverse
          hideImg
        />
      </div>
      {items.map((item: any) => (
        <HourlyItem
          key={item.time}
          time={item.time}
          temp={item.temp}
          icon={item.icon}
        />
      ))}
    </div>
  );
}
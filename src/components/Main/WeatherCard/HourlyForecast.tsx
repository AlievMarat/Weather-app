import "./hourly-forecast.css";
import Text from "./HourlyTitle";
import HourlyItem from "./HourlyItem";
import DropDownBtn from "../../../UI/DropDownBtn/DropDownBtn";
import IconDropdown from "../../../assets/images/icon-dropdown.svg";
import IconSunny from "../../../assets/images/icon-sunny.webp";
import IconPartlyCloudy from "../../../assets/images/icon-partly-cloudy.webp";
import IconOvercast from "../../../assets/images/icon-overcast.webp";
import IconFog from "../../../assets/images/icon-fog.webp";
import IconSnow from "../../../assets/images/icon-snow.webp";

interface HourlyForecastProps {
  title?: string;
  dropdownTitle?: string;
}

const hourlyItems = [
  { time: "3 PM", temp: "20°", icon: IconOvercast },
  { time: "4 PM", temp: "20°", icon: IconPartlyCloudy },
  { time: "5 PM", temp: "20°", icon: IconSunny },
  { time: "6 PM", temp: "19°", icon: IconOvercast },
  { time: "7 PM", temp: "18°", icon: IconSnow },
  { time: "8 PM", temp: "18°", icon: IconFog },
  { time: "9 PM", temp: "17°", icon: IconSnow },
  { time: "10 PM", temp: "17°", icon: IconOvercast },
];

export default function HourlyForecast({
  title = "Hourly forecast",
  dropdownTitle = "Tuesday",
}: HourlyForecastProps) {
  return (
    <div className="hourly-forecast">
      <div className="hourly-header">
        <Text text={title} />
        <DropDownBtn
          title={dropdownTitle}
          img={IconDropdown}
          className="hourly-dropdown-btn"
          reverse
        />
      </div>
      {hourlyItems.map((item) => (
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

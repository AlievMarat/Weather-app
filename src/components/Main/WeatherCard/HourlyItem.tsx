import "./hourly-item.css";

interface HourlyItemProps {
  time: string;
  temp: string;
  icon: string;
}

export default function HourlyItem({ time, temp, icon }: HourlyItemProps) {
  return (
    <div className="hourly-item">
      <div className="hourly-item__left">
        <img src={icon} alt={time} className="hourly-item__icon" />
        <span className="hourly-item__time">{time}</span>
      </div>
      <span className="hourly-item__temp">{temp}</span>
    </div>
  );
}

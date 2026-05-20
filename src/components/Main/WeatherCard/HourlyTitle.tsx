import "./hourly-title.css";

interface HourlyTitleProps {
  text: string;
}

export default function Text({ text }: HourlyTitleProps) {
  return <h3 className="hourly-title">{text}</h3>;
}

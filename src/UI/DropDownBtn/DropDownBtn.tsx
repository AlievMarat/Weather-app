import "./drop-down.css";
interface DropDownBtnProps {
  title: string;
  img: string;
  className?: string;
  reverse?: boolean;
}
export default function DropDownBtn({
  title,
  img,
  className = "",
  reverse = false,
}: DropDownBtnProps) {
  return (
    <div className={`drop-down-btn ${className}`.trim()}>
      {reverse ? title : <img src={img} className="drop-down-btn__icon" />}
      {reverse ? <img src={img} className="drop-down-btn__icon" /> : title}
    </div>
  );
}

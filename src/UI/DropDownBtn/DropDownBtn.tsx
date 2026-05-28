import "./drop-down.css";
interface DropDownBtnProps {
  title: string;
  img: string;
  className?: string;
  reverse?: boolean;
  hideImg?: boolean;
}
export default function DropDownBtn({
  title,
  img,
  className = "",
  reverse = false,
  hideImg = false,
}: DropDownBtnProps) {
  return (
    <div className={`drop-down-btn ${className}`.trim()}>
      {reverse ? title : (!hideImg && <img src={img} className="drop-down-btn__icon" />)}
      {reverse ? (!hideImg && <img src={img} className="drop-down-btn__icon" />) : title}
    </div>
  );
}
import React from "react";
import "./drop-down.css";
interface DropDownBtnProps {
  title: string;
  img: string;
}
export default function DropDownBtn({ title, img }: DropDownBtnProps) {
  return (
    <div className="drop-down-btn">
      <img src={img} className="drop-down-btn__icon" />
      {title}
    </div>
  );
}

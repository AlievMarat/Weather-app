import React from "react";
import "./button.css";
interface IButton {
  title: string;
}
export default function Button({ title }: IButton) {
  return <button className="button">{title}</button>;
}

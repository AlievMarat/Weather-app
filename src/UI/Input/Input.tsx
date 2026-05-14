import React from "react";
import IconSearch from "../../assets/images/icon-search.svg";
import "./input.css";
export default function Input() {
  return (
    <div className="input-container">
      <div className="input-wrapper">
        <img src={IconSearch} className="input__icon" />
        <input
          type="text"
          placeholder="Search for a place..."
          className="input"
        />
      </div>
    </div>
  );
}

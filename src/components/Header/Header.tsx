import React from "react";
import HeaderLogo from "../../assets/images/logo.svg";
import DropDownBtn from "../../UI/DropDownBtn/DropDownBtn";
import IconUnits from "../../assets/images/icon-units.svg";
import "./header.css";
import Title from "../Title/Title";
export default function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={HeaderLogo} alt="Logo" />
      <DropDownBtn title="Units" img={IconUnits} />
    </div>
  );
}

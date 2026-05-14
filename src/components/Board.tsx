import React from "react";
import Header from "./Header/Header";
import "./board.css";
import Title from "./Title/Title";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
export default function Board() {
  return (
    <div className="board">
      <Header />
      <Title />
      <section className="search-section">
        <Input />
        <Button title="Search" />
      </section>
    </div>
  );
}

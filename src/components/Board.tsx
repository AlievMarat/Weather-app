import { useState } from "react";
import Header from "./Header/Header";
import "./board.css";
import Title from "./Title/Title";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Main from "./Main/Main";

export default function Board() {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");

  const handleSearch = () => {
  setSearch(city);
  setCity("");
}

  return (
    <div className="board">
      <Header />
      <Title />
      <section className="search-section">
        <Input value={city} onChange={(e) => setCity(e.target.value)} onSearch={handleSearch} />
        <Button title="Search" onClick={handleSearch} />
      </section>
      <Main city={search} />
    </div>
  );
}
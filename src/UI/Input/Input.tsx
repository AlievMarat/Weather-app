import IconSearch from "../../assets/images/icon-search.svg";
import "./input.css";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

export default function Input({ value, onChange, onSearch }: InputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className="input-container">
      <div className="input-wrapper">
        <img src={IconSearch} className="input__icon" />
        <input
          type="text"
          placeholder="Search for a place..."
          className="input"
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}
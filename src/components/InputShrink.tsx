import { useState } from "react";
import "../styles/components/InputShrink.sass";

type InputShrinkProps = {
  id: string;
  placeholder: string;
  required: boolean;
  disabled?: boolean;
  bigger?: boolean;
};

export default function InputShrink({
  id,
  placeholder,
  required,
  disabled,
  bigger,
}: InputShrinkProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={`input-container ${bigger ? "bigger" : ""}`}>
      <label
        htmlFor={id}
        className={`input-label ${isFocused ? "focused" : ""} ${
          isFocused || value ? "shrink" : ""
        } ${disabled ? "disabled" : ""}`}
      >
        {placeholder}
      </label>
      <input
        type="text"
        id={id}
        name={id}
        required={required}
        disabled={disabled || false}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`input-field${bigger ? " bigger" : ""}${
          disabled ? " disabled-bg" : ""
        }`}
      />
    </div>
  );
}

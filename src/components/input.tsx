import { InputHTMLAttributes } from "react";
import Button from "./button";

type InputProps = {
  handleSend: (message: string) => void;
  inputValue: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ inputValue, handleSend, ...props }: InputProps) => {
  return (
    <div className="input">
      <input className="input__text" {...props} />
      <Button onClick={() => handleSend(inputValue)} text="Send" />
    </div>
  );
};

export default Input;

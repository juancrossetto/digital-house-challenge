import React, { ButtonHTMLAttributes, FC } from "react";
import "./Button.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ ...props }) => {
  return (
    <button {...props} className={`${props.className} btn`}>
      {props.children}
    </button>
  );
};

export default Button;

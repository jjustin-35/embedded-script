import React from "react";

import { ButtonType } from "../../constants/types";

import { Wrapper } from "./styled";

const Button = ({
  text,
  id,
  btnTheme = "default",
  btnColor,
  round = "normal",
  size = "medium",
  isDisabled = false,
  onClick,
  t,
}: ButtonType) => {
  const btnText = t ? t(text) : text;
  return (
    <Wrapper
      btnTheme={btnTheme}
      btnColor={btnColor}
      size={size}
      round={round}
      onClick={onClick}
      disabled={isDisabled}
      id={id}
    >
      <p>{btnText}</p>
    </Wrapper>
  );
};

export default Button;

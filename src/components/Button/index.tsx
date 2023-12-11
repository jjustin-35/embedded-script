import { MouseEvent } from 'react';

import { TFunctionType } from '../../constants/types';
import { ButtonStyleType } from './styled';

import { Wrapper } from './styled';

export type ButtonComponentType = ButtonStyleType & {
  text: string;
  id?: string;
  onClick?: (e?: MouseEvent | MouseEvent) => void;
  t?: TFunctionType;
};

const Button = ({
  text,
  id,
  btnTheme = 'default',
  btnColor,
  round = 'normal',
  size = 'medium',
  isDisabled = false,
  onClick,
  t,
}: ButtonComponentType) => {
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

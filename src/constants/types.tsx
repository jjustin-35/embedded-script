import React from "react";

export type TFunctionType = (key: string, options?: Record<string, string>) => string;

export type ImageType = {
  src: string;
  alt: string;
};

export type LangType = 'en' | 'ja' | 'zh-tw' | 'zh-cn' | 'ko' | 'es';

export type ButtonColorType = {
  bgColor?: string;
  color?: string;
  borderColor?: string;
  hoverBgColor?: string;
  hoverBorderColor?: string;
  hoverColor?: string;
  disabledBgColor?: string;
  disabledBorderColor?: string;
  disabledColor?: string;
  activeBgColor?: string;
  activeBorderColor?: string;
  activeColor?: string;
};

export type ButtonThemeType =
  | 'default'
  | 'klaviyo'

export type ButtonStyleType = {
  btnTheme?: ButtonThemeType;
  btnColor?: ButtonColorType;
  round?: 'normal' | 'pill';
  size?: 'large' | 'medium' | 'small';
  isDisabled?: boolean;
};

export type ButtonType = ButtonStyleType & {
  text: string;
  id?: string;
  onClick?: (e?: React.MouseEvent | React.MouseEvent) => void;
  t?: TFunctionType;
};

export type PopupType =
  | 'klaviyo_existed'
  | 'klaviyo_register'
  | 'klaviyo_failed'
  | 'klaviyo_done'
  | 'none'

export type PopupContentType = {
  size?: 'large' | 'small';
  button?: ButtonType;
  cancelButton?: Pick<ButtonType, 'btnColor'>;
  backgroundColor?: string;
  dividerColor?: string;
  backgroundImage?: string;
  fontColor?: string;
  image?: ImageType;
  title?: string;
  subtitle?: string;
  desc?: string;
  variant?: 'message' | 'event';
  href?: string;
  isExternal?: boolean;
  target?: '_blank' | '_self';
  id?: string;
};

export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
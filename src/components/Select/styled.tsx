import styled, { css } from "styled-components";
import { colors as commonColors } from "../../constants/commonStyle";

type LabelProps = {
  isDisabled?: boolean;
  variant?: string;
};

type SelectWrapperProps = {
  isActive?: boolean;
  isDisabled?: boolean;
  variant?: string;
};

type SelectMenuProps = {
  isOpen?: boolean;
};

type OptionProps = {
  isActive?: boolean;
};

type SelectIconProps = {
  isOpen: boolean;
  isReverse?: boolean;
};

const colors = {
  common: {
    border: "#969696",
    checkboxBorder: "#7d7d7d",
    active: "#007aff",
    disabled: "#c8c8c8",
    placeholder: "#c8c8c8",
    disabledBackground: "#e1e1e1",
    normal: "#000000",
    error: "#f25858",
  },
};

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  position: relative;
  min-width: 164px;
`;

export const Label = styled.label<LabelProps>`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;

  span {
    font-size: 14px;
    color: ${commonColors.common.brand};
    margin-left: 4px;
  }

  ${({ isDisabled, variant }) =>
    isDisabled &&
    css`
      color: ${colors[variant]?.disabled || colors.common.disabled};
    `}
`;

export const ErrorMessage = styled.p`
  color: ${colors.common.error};
  font-size: 12px;
  line-height: 1.5;
  margin-top: 4px;
`;

export const HiddenInput = styled.input`
  position: absolute;
  inset: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: pointer;
`;

export const SelectWrapper = styled.div<SelectWrapperProps>`
  position: relative;
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #ffffff;
  color: ${colors.common.normal};

  ${({ isActive, variant }) =>
    isActive
      ? css`
          border-color: ${colors[variant]?.active || colors.common.active};
        `
      : css`
          border: 1px solid ${colors[variant]?.border || colors.common.border};
        `}

  ${({ isDisabled, variant }) =>
    isDisabled &&
    css`
      border-color: ${colors[variant]?.disabled || colors.common.disabled};
      color: ${colors[variant]?.disabled || colors.common.disabled};
      background-color: ${colors[variant]?.disabledBackground ||
      colors.common.disabledBackground};
    `}
`;

export const SelectValue = styled.div`
  width: 100%;
  font-size: 14px;
`;

export const SelectIcon = styled.img<SelectIconProps>`
  width: 20px;
  height: 20px;
  transition: transform 0.1s linear;

  ${({ isReverse }) =>
    isReverse &&
    css`
      transform: rotate(180deg);
    `}

  ${({ isOpen, isReverse }) =>
    (isOpen &&
      isReverse &&
      css`
        transform: rotate(0deg);
      `) ||
    (isOpen &&
      css`
        transform: rotate(180deg);
      `)}
`;

export const SelectMenu = styled.div<SelectMenuProps>`
  background-color: #ffffff;
  box-shadow: 0 0 16px 0 rgba(175, 175, 175, 0.2);
  border-radius: 4px;
  overflow-y: hidden;
  position: absolute;
  z-index: 5;
  bottom: 100%;
  left: 0;
  width: 100%;
  max-height: 0;
  ${({ isOpen }) =>
    isOpen &&
    css`
      max-height: fit-content;
    `}
`;

export const Option = styled.div<OptionProps>`
  padding: 12px 20px;
  font-size: 14px;
  cursor: pointer;
  color: ${colors.common.normal};

  :hover {
    background-color: ${colors.common.disabledBackground};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${colors.common.disabledBackground};
    `}
`;

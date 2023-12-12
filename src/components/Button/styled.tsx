import styled, { css } from "styled-components";
import {
  ButtonStyleType,
  ButtonThemeType,
  ButtonColorType,
} from "../../constants/types";
import { device, colors } from "../../constants/commonStyle";

type BtnColorsType = Record<ButtonThemeType, ButtonColorType>;

export const btnColors: BtnColorsType = {
  default: {
    bgColor: "#000000",
    color: "#ffffff",
    hoverBgColor: colors.common.grey_dark,
    hoverColor: "#ffffff",
    disabledBgColor: "rgba(0, 0, 0, 0.7)",
    disabledColor: "rgba(255, 255, 255, 0.7)",
    activeBgColor: "rgba(0, 0, 0, 0.8)",
    activeColor: "rgba(255, 255, 255, 0.8)",
  },
  klaviyo: {
    bgColor: colors.common.white,
    color: colors.common.black,
  },
};

export const Wrapper = styled.button<ButtonStyleType>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  text-align: center;
  line-height: 1.5;

  ${({ size }) =>
    (size === "large" &&
      css`
        font-size: 22px;

        @media screen and (${device.tablet}) {
          font-size: 16px;
        }
      `) ||
    (size === "medium" &&
      css`
        font-size: 16px;
      `) ||
    (size === "small" &&
      css`
        font-size: 12px;
      `)}

  ${({ round }) =>
    (round === "normal" &&
      css`
        border-radius: 4px;
      `) ||
    (round === "pill" &&
      css`
        border-radius: 30px;
      `)}

  ${({ btnTheme, btnColor }) => {
    return css`
      background-color: ${btnColors[btnTheme]?.bgColor ||
      btnColors.default.bgColor};
      color: ${btnColors[btnTheme]?.color || btnColors.default.color};
      border: 1.5px solid
        ${btnColors[btnTheme]?.borderColor ||
        btnColors.default.borderColor};

      :hover {
        border-color: ${btnColors[btnTheme]?.hoverBorderColor ||
        btnColors.default.hoverBorderColor ||
        "unset"};
        background-color: ${btnColors[btnTheme]?.hoverBgColor ||
        btnColors.default.hoverBgColor};
        color: ${btnColors[btnTheme]?.hoverColor ||
        btnColors.default.hoverColor};
      }

      :disabled {
        cursor: unset;
        border-color: ${btnColors[btnTheme]?.disabledBorderColor ||
        btnColors.default.disabledBorderColor ||
        "unset"};
        background-color: ${btnColors[btnTheme]?.disabledBgColor ||
        btnColors.default.disabledBgColor};
        color: ${btnColors[btnTheme]?.disabledColor ||
        btnColors.default.disabledColor};
      }

      :active {
        border-color: ${btnColors[btnTheme]?.activeBorderColor ||
        btnColors.default.activeBorderColor ||
        "unset"};
        background-color: ${btnColors[btnTheme]?.activeBgColor ||
        btnColors.default.activeBgColor};
        color: ${btnColors[btnTheme]?.activeColor ||
        btnColors.default.activeColor};
      }
    `;
  }};
`;

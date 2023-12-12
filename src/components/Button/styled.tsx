import styled, { css } from 'styled-components';
import { ButtonStyleType, ButtonThemeType, ButtonColorType } from '../../constants/types';
import { device, colors } from '../../constants/commonStyle';

type BtnColorsType = Record<ButtonThemeType, ButtonColorType>;

export const btnColors: BtnColorsType = {
  default: {
    bgColor: '#000000',
    color: '#ffffff',
    hoverBgColor: colors.common.grey_dark,
    hoverColor: '#ffffff',
    disabledBgColor: 'rgba(0, 0, 0, 0.7)',
    disabledColor: 'rgba(255, 255, 255, 0.7)',
    activeBgColor: 'rgba(0, 0, 0, 0.8)',
    activeColor: 'rgba(255, 255, 255, 0.8)',
  },
  kdan_office_contact: {
    bgColor: '#ffffff',
    color: colors.common.dark,
    borderColor: colors.common.dark,
    hoverBgColor: '#afafaf',
    hoverColor: '#000000',
    disabledBgColor: '#ffffff',
    disabledColor: '#afafaf',
    disabledBorderColor: '#afafaf',
    activeBgColor: '#e1e1e1',
    activeColor: '#000000',
  },
  kdan_office_cta: {
    bgColor: '#ffffff',
    borderColor: 'ffffff',
    color: '#000000',
    hoverBgColor: '#000000',
    hoverColor: '#ffffff',
    disabledBgColor: '#c8c8c8',
    disabledColor: '#7d7d7d',
    activeBgColor: '#c8c8c8',
    activeColor: '#000000',
  },
  kdan_office_cta_transparent: {
    bgColor: 'transparent',
    color: '#ffffff',
    borderColor: '#ffffff',
    hoverBgColor: '#000000',
    hoverBorderColor: '#000000',
    hoverColor: '#ffffff',
    disabledBgColor: 'transparent',
    disabledColor: '#afafaf',
    disabledBorderColor: '#afafaf',
    activeBgColor: '#c8c8c8',
    activeColor: '#000000',
  },
  kdan_office_free_trial: {
    bgColor: '#000d23',
    color: '#ffffff',
    hoverBgColor: '#afafaf',
    hoverColor: '#000000',
    disabledBgColor: '#e1e1e1',
    disabledColor: '#afafaf',
    activeBgColor: '#e1e1e1',
    activeColor: '#000000',
  },
  pdf_blue: {
    color: '#ffffff',
    bgColor: '#007aff',
    hoverBgColor: '#dd2c00',
  },
  pdf_blue_transparent: {
    color: '#007aff',
    bgColor: 'transparent',
    borderColor: '#007aff',
    hoverBgColor: '#dd2c00',
    hoverBorderColor: '#dd2c00',
    hoverColor: '#ffffff',
  },
  custom: {},
  custom_transparent: {},
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
    (size === 'large' &&
      css`
        font-size: 22px;

        @media screen and (${device.tablet}) {
          font-size: 16px;
        }
      `) ||
    (size === 'medium' &&
      css`
        font-size: 16px;
      `) ||
    (size === 'small' &&
      css`
        font-size: 12px;
      `)}

  ${({ round }) =>
    (round === 'normal' &&
      css`
        border-radius: 4px;
      `) ||
    (round === 'pill' &&
      css`
        border-radius: 30px;
      `)}

  ${({ btnTheme, btnColor }) => {
    const customColors = {
      color: btnColor?.color || btnColors.default.color,
      bgColor: btnColor?.bgColor || btnColors.default.bgColor,
      borderColor: btnColor?.borderColor || btnColors.default.borderColor,
      hoverBgColor: btnColor?.hoverBgColor || btnColors.default.hoverBgColor,
      hoverBorderColor: btnColor?.hoverBorderColor || btnColors.default.hoverBorderColor,
    };

    const customTransparentColors = {
      bgColor: 'transparent',
      color: btnColor?.color || btnColors.default.bgColor,
      borderColor: btnColor?.borderColor || btnColors.default.bgColor,
      hoverBgColor: btnColor?.hoverBgColor || btnColors.default.bgColor,
      hoverColor: btnColor?.hoverColor || btnColors.default.color,
    };

    const buttonColors: BtnColorsType = {
      ...btnColors,
      custom: customColors,
      custom_transparent: customTransparentColors,
    };

    return css`
      background-color: ${buttonColors[btnTheme]?.bgColor || buttonColors.default.bgColor};
      color: ${buttonColors[btnTheme]?.color || buttonColors.default.color};
      border: 1.5px solid ${buttonColors[btnTheme]?.borderColor || buttonColors.default.borderColor};

      :hover {
        border-color: ${buttonColors[btnTheme]?.hoverBorderColor || buttonColors.default.hoverBorderColor || 'unset'};
        background-color: ${buttonColors[btnTheme]?.hoverBgColor || buttonColors.default.hoverBgColor};
        color: ${buttonColors[btnTheme]?.hoverColor || buttonColors.default.hoverColor};
      }

      :disabled {
        cursor: unset;
        border-color: ${buttonColors[btnTheme]?.disabledBorderColor ||
        buttonColors.default.disabledBorderColor ||
        'unset'};
        background-color: ${buttonColors[btnTheme]?.disabledBgColor || buttonColors.default.disabledBgColor};
        color: ${buttonColors[btnTheme]?.disabledColor || buttonColors.default.disabledColor};
      }

      :active {
        border-color: ${buttonColors[btnTheme]?.activeBorderColor || buttonColors.default.activeBorderColor || 'unset'};
        background-color: ${buttonColors[btnTheme]?.activeBgColor || buttonColors.default.activeBgColor};
        color: ${buttonColors[btnTheme]?.activeColor || buttonColors.default.activeColor};
      }
    `;
  }};
`;

import styled, { css } from 'styled-components';
import { colors, device } from '../../constants/commonStyle';

type VariantType = 'message' | 'event';

type OuterProps = {
  size: 'large' | 'small';
  variant: VariantType;
  backgroundColor?: string;
  backgroundImage?: string;
};

export const Back = styled.div<{ variant: VariantType }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;

  ${({ variant }) =>
    variant === 'event' &&
    css`
      display: none;
    `}
`;
export const Outer = styled.div<OuterProps>`
  border-radius: 8px;
  overflow: hidden;
  position: fixed;
  z-index: 20000;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
  width: ${({ size }) => (size === 'large' ? '800px' : '576px')};
  background-color: ${colors.common.white};

  ${({ variant }) =>
    variant === 'event' &&
    css`
      bottom: 40px;
      left: 40px;
      transform: none;
    `}

  ${({ backgroundColor, backgroundImage }) =>
    (backgroundImage &&
      css`
        background-image: url(${backgroundImage});
        background-size: cover;
        background-position: center;
      `) ||
    (backgroundColor &&
      css`
        background-color: ${backgroundColor};
      `)}

  @media screen and (${device.tablet}) {
    width: ${({ size }) => (size === 'large' ? '688px' : '288px')};
    min-width: 288px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Title = styled.h3`
  font-size: 22px;
  margin: 0;
  line-height: normal;
  max-height: 60px;
  overflow: hidden;
`;

export const Content = styled.div<{ fontColor?: string }>`
  padding: 48px 24px 24px;
  display: inline-flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: ${({ fontColor }) => fontColor || colors.common.black};
`;

export const Desc = styled.p`
  font-size: 14px;
  line-height: 1.43;
  max-height: 140px;
  overflow: hidden;
  a {
    color: ${colors.common.brand};
  }
`;

export const ButtonWrapper = styled.div<{ borderColor?: string }>`
  padding: 24px;
  gap: 8px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  border-top: 1px solid;
  border-top-color: ${({ borderColor }) => borderColor || colors.common.shadow_dark};

  button:first-child {
    flex: 0 0 auto;
  }

  p {
    max-height: 22px;
    overflow: hidden;
  }
`;

export const Image = styled.img`
  max-width: 288px;
  max-height: 384px;
  width: 100%;

  @media screen and (${device.tablet}) {
    display: none;
  }
`;

import styled, { css } from 'styled-components';

type WrapperProps = {
  maxWidth?: number;
  isTop?: boolean;
  type?: string;
  isColumn?: boolean;
  isCenter?: boolean;
  isBtm?: boolean;
  isNumber?: boolean;
};

export const colors = {
  common: {
    white: '#ffffff',
    black: '#000000',
    grey: '#8a8a8a',
    brand: '#00a89b',
    aqua: '#007aff',
    dark: '#000d23',
    red: '#f25858',
    blue: '#007aff',
    shadow: '#afafaf80',
    shadow_dark: '#afafaf',
    grey_01: '#7d7d7d',
    grey_02: '#c8c8c8',
    grey_dark: '#414141',
  },
  eSign: '#5a6eed',
  pdf: '#ff7272',
  solution: '#0077e9',
};

export const breakpoints = {
  largeDesktop: 1919,
  desktop: 1439,
  laptop: 1279,
  tablet: 1023,
  mobile: 767,
  smallMobile: 580,
};

export const device = {
  largeDesktop: `max-width: ${breakpoints.largeDesktop}px`,
  desktop: `max-width: ${breakpoints.desktop}px`,
  laptop: `max-width: ${breakpoints.laptop}px`,
  tablet: `max-width: ${breakpoints.tablet}px`,
  mobile: `max-width: ${breakpoints.mobile}px`,
  smallMobile: `max-width: ${breakpoints.smallMobile}px`,
};

export const Container = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;

  @media (${device.laptop}) {
    max-width: 944px;
  }
  @media (${device.tablet}) {
    max-width: 688px;
    margin: 0 auto;
  }
  @media (${device.mobile}) {
    max-width: 540px;
    padding: 0 16px;
    margin: 0 auto;
  }
`;

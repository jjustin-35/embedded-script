import styled, { css } from 'styled-components';
import { device } from '../../constants/commonStyle';

type HeaderWrapperProps = {
  isScrolldown: boolean;
  isEventbar?: boolean;
};

type BurgerProps = {
  isOpen: boolean;
};
type MenuProps = {
  isOpen: boolean;
};

type ArrowIconType = {
  isOpen: boolean;
};

export const Wrapper = styled.header<HeaderWrapperProps>`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  z-index: 10;
  transition: box-shadow 0.3s ease;
  ${({ isScrolldown }) =>
    isScrolldown &&
    css`
      box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    `};
`;

export const Logo = styled.img`
  width: 100%;
`;

export const HeaderContainer = styled.div`
  max-width: 1920px;
  padding: 0 100px;
  margin: 0 auto;

  @media screen and (${device.laptop}) {
    padding: 0 40px;
  }
  @media screen and (${device.mobile}) {
    padding: 0 16px;
  }
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

export const ItemWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;

  svg {
    pointer-events: none;
  }
`;

export const Brand = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`;

export const Burger = styled.a<BurgerProps>`
  display: none;
  width: 40px;
  height: 24px;
  cursor: pointer;
  position: relative;
  span {
    position: absolute;
    width: 24px;
    height: 4px;
    border-radius: 2px;
    background-color: #000;
    transition: all 0.2s;
    left: 50%;
    transform: translateX(-50%);

    &:first-child {
      top: 0;
    }
    &:nth-child(2) {
      top: 50%;
      transform: translate(-50%, -50%);
    }
    &:last-child {
      bottom: 0;
    }

    ${({ isOpen }) =>
      isOpen &&
      css`
        width: 30px;
        &:first-child {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:last-child {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
        }
      `}
  }

  @media screen and (${device.tablet}) {
    display: block;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  gap: 48px;
  align-items: center;
`;

export const Menus = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media screen and (${device.tablet}) {
    display: none;
  }
`;

export const MobileMenuOuter = styled.div`
  position: relative;
`;

export const MobileMenuWrapper = styled.div<MenuProps>`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  z-index: 5;
  background-color: #ffffff;
  transition: all 0.3s linear;
  overflow-y: hidden;
  height: 0;
  overflow-y: scroll;

  ${({ isOpen }) =>
    isOpen &&
    css`
      height: 100vh;
    `}
`;

export const MobileMenuInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 40px;

  @media screen and (${device.mobile}) {
    margin: 16px;
  }
`;

export const Link = styled.a`
  padding: 8px 10px;
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  transition: color 0.3s linear;
  cursor: pointer;
  :hover {
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const ButtonWrapper = styled.div`
  margin-left: 24px;

  @media screen and (${device.tablet}) {
    margin-left: 0;
    margin-right: 24px;
  }
  @media screen and (${device.mobile}) {
    display: none;
  }
`;

export const ArrowIcon = styled.img<ArrowIconType>`
  width: 16px;
  height: 16px;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

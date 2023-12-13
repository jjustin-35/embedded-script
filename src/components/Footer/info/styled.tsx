import styled, { css, keyframes } from 'styled-components';
import { device } from '../../../constants/commonStyle';

type TitleType = {
  opened: boolean;
};

type ListType = {
  opened: boolean;
};

const open = keyframes`
  0% {
    opacity: 0;
		max-height: 0px;
  }
  100% {
    opacity: 1;
		max-height: 500px;
  }
`;
const close = keyframes`
  0% {
    opacity: 1;
		max-height: 500px;
  }
  100% {
    opacity: 0;
		max-height: 0px;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  min-height: 50px;
  padding: 30px 0px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (${device.tablet}) {
    padding: 30px 20%;
    justify-content: flex-start;
  }
  @media screen and (${device.mobile}) {
    padding: 30px 6%;
  }
  @media screen and (max-width: 480px) {
    padding: 0 0 20px;
  }
`;

export const InfoBlocks = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 220px;

  @media screen and (${device.tablet}) {
    width: 40%;
    margin-left: 10%;
  }
  @media screen and (${device.mobile}) {
    width: 36%;
    margin-left: 14%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    margin-left: 0;
    min-height: auto;
  }
`;

export const Title = styled.p<TitleType>`
  font-size: 18px;
  color: #c7c8c8;
  font-weight: 400;
  text-align: left;
  width: 100%;
  padding: 18px 0;

  @media screen and (max-width: 480px) {
    :after {
      content: '\\3009';
      position: absolute;
      top: 0;
      right: 0;
      transform-origin: center;
      transform: ${({ opened }) => (opened ? 'translateY(12px) rotate(-90deg)' : 'translateY(20px) rotate(90deg)')};
    }
  }
`;

export const List = styled.div<ListType>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  transition: all 0.6s ease-in-out;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    padding-left: 18px;

    ${(props) =>
      props.opened
        ? css`
            animation: ${open} 0.6s forwards;
          `
        : css`
            animation: ${close} 0.6s forwards;
          `}
  }

  a {
    margin-bottom: 8px;
    font-size: 1.2em;
    color: #c8cdce;
    line-height: 17px;

    @media screen and (max-width: 480px) {
      margin-bottom: 0;
      width: 100%;
      height: 44px;
      line-height: 42px;
    }
  }
`;

export const Divider = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  width: 100%;
  height: 1px;
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
  }
`;

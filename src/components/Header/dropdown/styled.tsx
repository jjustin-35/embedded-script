import styled, { css } from 'styled-components';
import { device, colors } from '../../../constants/commonStyle';

type OuterProps = {
  isSmall?: boolean;
};

type ContainerProps = {
  isBtn?: boolean;
};

type ContentProps = {
  isTitleOnly?: boolean;
};

type DropdownInnerProps = {
  isOpen: boolean;
  maxHeight?: number;
};

export const Outer = styled.div<OuterProps>`
  display: flex;
  padding: 30px 20px;
  border: solid 2px #000000;
  background-color: #fff;

  ${({ isSmall }) =>
    isSmall &&
    css`
      padding: 15px 0px 5px 20px;
    `}

  @media (${device.tablet}) {
    margin-top: 0;
    padding: 20px 0 20px 20px;
    border: none;
  }
`;
export const Icon = styled.div`
  margin-right: 20px;
  width: 30px;
  height: 30px;

  img {
    width: 30px;
    height: 30px;
  }
`;
export const Containers = styled.div``;
export const Container = styled.div<ContainerProps>`
  display: flex;
  ${({ isBtn }) =>
    isBtn &&
    css`
      position: relative;
      margin-top: 20px;
      padding-top: 20px;
      :after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #c5c5c5;
      }
      a {
        margin-right: 20px;
      }
    `}
  @media (${device.tablet}) {
    flex-direction: column;
    a {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;
export const CompWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (${device.tablet}) {
    :first-child {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
`;
export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  cursor: pointer;
  max-width: 200px;

  :hover {
    color: ${colors.common.brand};
    transition: 0.2s;
  }
  ${({ isTitleOnly }) =>
    isTitleOnly &&
    css`
      margin: 0 0 15px;
    `}

  @media (${device.tablet}) {
    margin: 8px 0 10px;
    max-width: unset;
  }
`;

export const ContentTitle = styled.p`
  color: #000000;

  :hover {
    color: ${colors.common.brand};
  }

  @media (${device.tablet}) {
    font-size: 14px;
  }
`;

export const ContentDesc = styled.p`
  font-size: 12px;
  color: ${colors.common.grey};
`;

export const Row = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 32px;

  a {
    display: block;
  }
`;

export const DropdownOuter = styled.div``;

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const DropdownInner = styled.div<DropdownInnerProps>`
  position: absolute;
  top: 30px;
  left: 0;
  z-index: 1;
  width: max-content;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 300ms cubic-bezier(0.4, 0, 0.2, 1) 50ms, opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${({ isOpen, maxHeight }) =>
    isOpen &&
    css`
      max-height: ${maxHeight}px;
      opacity: 1;
    `}
`;

export const BtmLink = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 20px;
  color: ${colors.common.brand};
  line-height: 1.1;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  :hover {
    opacity: 0.7;
  }
`;

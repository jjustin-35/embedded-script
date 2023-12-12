import styled from 'styled-components';
import { device } from '../../../constants/commonStyle';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: center;

  @media (${device.laptop}) {
    text-align: center;
  }
`;

export const Col = styled.div`
  position: relative;
  width: 50%;
  padding: 10px 120px 30px;

  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (${device.laptop}) {
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 40px 25%;
  }
  @media (${device.tablet}) {
    padding: 30px 20px;
  }

  &:not(:last-child) {
    @media (${device.laptop}) {
      border-bottom: 1px solid #979797;
    }
  }
  &:last-child {
    border-right: 1px solid #979797;

    @media (${device.laptop}) {
      border-right: none;
    }
  }
`;
export const Title = styled.h3`
  position: relative;
  width: 100%;
  color: #c8cdce;
`;
export const Subtitle = styled.div`
  position: relative;
  width: 100%;

  color: #9c9d9e;
  font-size: 14px;
  min-height: 40px;
  margin-bottom: 20px;

  @media (${device.laptop}) {
    min-height: auto;
  }
`;

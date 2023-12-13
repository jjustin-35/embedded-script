import styled from 'styled-components';
import { device } from '../../constants/commonStyle';

export const FooterOuter = styled.footer`
  background: #202020;
  position: relative;
  width: 100%;
  font-size: 12px;
  z-index: 5;
  color: #fff;
  line-height: 16px;

  padding: 30px 0;

  @media (${device.laptop}) {
    padding: 0 0 30px;
  }
`;
export const FooterWrapper = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;

  hr {
    width: 100%;
    height: 1px;
    border: none;
    text-align: center;
    background-color: #9d9e9e;
    margin: 0px auto 10px;
  }
`;

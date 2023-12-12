import styled from 'styled-components';
import { device } from '@/constants/commonStyle';
import breakpoints from '@kdanmobile/kdan-ui/dist/themes/breakpoints';

export const LangBarWrapper = styled.div`
  width: 100%;

  @media ${breakpoints.down('md')} {
    width: 70%;
    margin: 0 auto;
  }

  @media ${breakpoints.down('sm')} {
    width: 100%;
  }

  a {
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    color: #9d9e9e;
    transition: color 0.3s;

    &:hover {
      color: #fff;
    }
  }

  p {
    display: block;
    font-size: 12px;
    color: #9d9e9e;
    text-align: center;
    line-height: 1.5;
  }

  span {
    color: #9d9e9e;
  }
`;
export const UpperLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: fit-content;
  margin: 0 auto 25px;

  a {
    margin: auto;
  }
  @media ${breakpoints.down('md')} {
    flex-direction: column;
    margin: 0 auto 15px;
  }
`;

export const LinkGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  width: fit-content;

  margin-right: 20px;
  @media screen and (${device.mobile}) {
    margin-right: 0;
    margin-bottom: 32px;
  }
`;

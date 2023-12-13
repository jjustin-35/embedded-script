import styled from 'styled-components';
import { device, colors } from '../../../../constants/commonStyle';

export const Wrapper = styled.div`
  input {
    width: 250px;
    height: 40px;
    border-radius: 4px;
    border: none;
    background-color: #363636;
    color: ${colors.common.white};
    font-size: 16px;
    padding: 5px 15px;
    margin-right: 10px;

    @media (${device.mobile}) {
      width: 90%;
      max-width: 250px;
      font-size: 14px;
    }

    &::placeholder {
      color: #dadada;
    }
  }
`;

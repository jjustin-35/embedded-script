import styled from 'styled-components';
import { device } from '../../../constants/commonStyle';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;

  form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (${device.tablet}) {
      justify-content: center;
    }
  }

  button {
    max-width: 124px;
  }
`;

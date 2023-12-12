import styled from 'styled-components';
import { device } from '@/constants/commonStyle';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media (${device.laptop}) {
    justify-content: center;
  }

  a {
    padding: 0 20px;
    :first-child {
      padding: 0 20px 0 5px;
    }

    img {
      width: 32px;
      height: 32px;

      @media screen and (max-width: 480px) {
        width: 27px;
        height: 27px;
      }
    }
  }
`;

export default Wrapper;

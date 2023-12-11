import { TFunctionType } from "../../constants/types";
import { DataType } from "../../containers/Header/data";

import Button from "../Button";
import Menu from "./menu";
import MobileMenu from "./menu/mobileMenu";
import {
  MenuWrapper,
  Wrapper,
  HeaderContainer,
  Inner,
  Burger,
  Brand,
  Logo,
} from "./styled";
interface Props {
  data: DataType;
  type: string;
  t: TFunctionType;
  onTrigger: () => void;
  isScrolldown: boolean;
  isOpen: boolean;
  isMobile: boolean;
}

const BurgerMenu = ({ onTrigger, isOpen }) => (
  <Burger onClick={onTrigger} isOpen={isOpen}>
    {[...Array(3)].map((_, idx) => (
      <span key={idx} />
    ))}
  </Burger>
);

const Header = ({
  data,
  type,
  t,
  onTrigger,
  isScrolldown,
  isOpen,
  isMobile,
}: Props) => (
  <Wrapper isScrolldown={isScrolldown} isEventbar>
    <HeaderContainer>
      <Inner>
        <MenuWrapper>
          <Brand href="/">
            <Logo {...data.logo} />
          </Brand>
          {!isMobile && <Menu t={t} data={data} />}
        </MenuWrapper>
        {!isMobile && data.btns[type] && (
          <a href={data.btns[type].href}>
            <Button {...data.btns[type]} t={t} />
          </a>
        )}
        {isMobile && <BurgerMenu isOpen={isOpen} onTrigger={onTrigger} />}
      </Inner>
    </HeaderContainer>
    {isMobile && <MobileMenu t={t} data={data} isOpen={isOpen} />}
  </Wrapper>
);

export default Header;

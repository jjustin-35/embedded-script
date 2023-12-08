import Link from 'next/link';

import { TFunctionType } from '@/constants/types/global';
import { DataType } from '@/containers/header/data';

import EventBar from '@/containers/EventBar';
import Button from '../buttonComponent';
import Menu from './menu';
import MobileMenu from './menu/mobileMenu';
import { MenuWrapper, Wrapper, HeaderContainer, Inner, Burger, Brand, Logo } from './styled';
interface Props {
  data: DataType;
  type: string;
  t: TFunctionType;
  onTrigger: () => void;
  isScrolldown: boolean;
  isOpen: boolean;
  isMobile: boolean;
  isErrorPage: boolean;
  isCampaign: boolean;
}

const BurgerMenu = ({ onTrigger, isOpen }) => (
  <Burger onClick={onTrigger} isOpen={isOpen}>
    {[...Array(3)].map((_, idx) => (
      <span key={idx} />
    ))}
  </Burger>
);

const Header = ({ data, type, t, onTrigger, isScrolldown, isOpen, isMobile, isErrorPage, isCampaign }: Props) => {
  return (
    <>
      {!isErrorPage && !isCampaign && <EventBar />}
      <Wrapper isScrolldown={isScrolldown} isEventbar>
        <HeaderContainer>
          <Inner>
            <MenuWrapper>
              <Brand href="/" passHref>
                <a>
                  <Logo {...data.logo} />
                </a>
              </Brand>
              {!isMobile && <Menu t={t} data={data} />}
            </MenuWrapper>
            {!isMobile && data.btns[type] && (
              <Link href={data.btns[type].href}>
                <Button {...data.btns[type]} t={t} />
              </Link>
            )}
            {isMobile && <BurgerMenu isOpen={isOpen} onTrigger={onTrigger} />}
          </Inner>
        </HeaderContainer>
        {isMobile && <MobileMenu t={t} data={data} isOpen={isOpen} />}
      </Wrapper>
    </>
  );
};

export default Header;

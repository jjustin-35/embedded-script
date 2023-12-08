import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { bool } from 'prop-types';

import { breakpoints } from '@/constants/commonStyle';
import Header from '../../components/header';
import data, { BtnsType } from './data';

type Props = {
  type?: BtnsType;
  isErrorPage?: boolean;
  isCampaign?: boolean;
};

const HeaderContainer = ({ type = 'default', isErrorPage, isCampaign }: Props) => {
  const [isScrolldown, setIsScrolldown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(['common', 'link', 'campaign']);

  const scrollHandler = () => {
    if (window.scrollY > 70) {
      setIsScrolldown(true);
    } else {
      setIsScrolldown(false);
    }
  };

  const triggerHandler = () => {
    setIsOpen(!isOpen);
  };

  const resetHeader = () => {
    if (window.innerWidth <= breakpoints.tablet) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, isMobile]);

  useEffect(() => {
    resetHeader();
    window.addEventListener('resize', resetHeader);

    return () => {
      window.removeEventListener('resize', resetHeader);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <Header
      data={data}
      t={t}
      isScrolldown={isScrolldown}
      onTrigger={triggerHandler}
      isOpen={isOpen}
      isMobile={isMobile}
      type={type}
      isErrorPage={isErrorPage}
      isCampaign={isCampaign}
    />
  );
};

HeaderContainer.propTypes = {
  hasEventBar: bool,
};

export default HeaderContainer;

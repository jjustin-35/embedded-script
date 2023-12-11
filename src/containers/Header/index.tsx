// import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';

import { breakpoints } from '../../constants/commonStyle';
import Header from '../../components/Header';
import data from './data';

const HeaderContainer = () => {
  const [isScrolldown, setIsScrolldown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = { t: (text: string) => text};

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
      type="default"
    />
  );
};

export default HeaderContainer;

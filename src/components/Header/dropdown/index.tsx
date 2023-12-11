import { useState, useEffect, useRef } from 'react';

import { TFunctionType } from '../../../constants/types';
import { MenuType } from '../../../containers/Header/data';

import DropdownComponent from './component';
import { DropdownOuter, DropdownWrapper, DropdownInner } from './styled';
import { ItemWrapper, ArrowIcon } from '../styled';

interface Props {
  data: MenuType;
  t: TFunctionType;
  indx?: number;
  isMobile?: boolean;
}

interface TriggerType {
  text: string;
  isOpen: boolean;
}

const Trigger = ({ text, isOpen }: TriggerType) => (
  <ItemWrapper>
    {text}
    <ArrowIcon src="/images/icons/ic-down-arrow.svg" alt="ic-down-arrow" isOpen={isOpen} />
  </ItemWrapper>
);

const Dropdown = ({ data, t, indx, isMobile }: Props) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);

  const handleBlur = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const node = outerRef.current;
    const handleEvent = (event: MouseEvent) => {
      const isNodeChild = node?.contains(event.target as Node);
      if (isNodeChild) return;
      handleBlur();
    };

    document.addEventListener('click', handleEvent);
    document.addEventListener('scroll', handleBlur);

    return () => {
      document.removeEventListener('click', handleEvent);
      document.removeEventListener('scroll', handleBlur);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      const maxHeight = innerRef.current?.scrollHeight || 0;
      setMaxHeight(maxHeight);
      return;
    }
    setMaxHeight(0);
  }, [isOpen]);

  return (
    <DropdownOuter ref={outerRef}>
      <div onClick={handleClick}>
        <Trigger text={t(data.text)} isOpen={isOpen} />
      </div>
      <DropdownWrapper>
        <DropdownInner ref={innerRef} maxHeight={maxHeight} isOpen={isOpen}>
          <DropdownComponent data={data} t={t} indx={indx} isMobile={isMobile} />
        </DropdownInner>
      </DropdownWrapper>
    </DropdownOuter>
  );
};

export default Dropdown;

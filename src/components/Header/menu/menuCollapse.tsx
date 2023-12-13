import React, { useState } from 'react';

import { MenuType } from '../../../containers/Header/data';
import { TFunctionType } from '../../../constants/types';

import Collapse from '../../Collapse';
import DropdownComponent from '../dropdown/component';
import { ItemWrapper, ArrowIcon } from '../styled';

import downArrowIcon from '../../../images/icons/ic-down-arrow.svg';

interface Props {
  menu: MenuType;
  t: TFunctionType;
  idx?: number;
}

interface TriggerType {
  text: string;
  isOpen: boolean;
}
const Trigger = ({ text, isOpen }: TriggerType) => (
  <ItemWrapper>
    {text}
    <ArrowIcon src={downArrowIcon} alt="ic-down-arrow" isOpen={isOpen} />
  </ItemWrapper>
);

const MenuCollapse = ({ menu, t, idx }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const triggerHandler = (isOpen: boolean) => setOpen(isOpen);

  return (
    <Collapse key={menu.key} trigger={<Trigger text={t(menu.text)} isOpen={isOpen} />} triggerHandler={triggerHandler}>
      <DropdownComponent isMobile data={menu} t={t} indx={idx} />
    </Collapse>
  );
};

export default MenuCollapse;

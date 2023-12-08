import { useState } from 'react';

import { MenuType } from '@/containers/header/data';
import { TFunctionType } from '@/constants/types/global';

import Collapse from '@/components/collapse';
import DropdownComponent from '../dropdown/component';
import { ItemWrapper, ArrowIcon } from '../styled';

interface Props {
  menu: MenuType;
  t: TFunctionType;
  idx?: number;
}

interface TrggerType {
  text: string;
  isOpen: boolean;
}
const Trigger = ({ text, isOpen }: TrggerType) => (
  <ItemWrapper>
    {text}
    <ArrowIcon src="/images/icons/ic-down-arrow.svg" alt="ic-down-arrow" isOpen={isOpen} />
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

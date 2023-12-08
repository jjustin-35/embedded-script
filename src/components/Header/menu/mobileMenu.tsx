import { TFunctionType } from '@/constants/types/global';
import { DataType } from '@/containers/header/data';
import MenuCollapse from './menuCollapse';
import { MobileMenuWrapper, MobileMenuOuter, MobileMenuInner } from '../styled';
interface Props {
  t: TFunctionType;
  data: DataType;
  isOpen: boolean;
}

const MobileMenu = ({ t, data, isOpen }: Props) => (
  <MobileMenuOuter>
    <MobileMenuWrapper isOpen={isOpen}>
      <MobileMenuInner>
        {data.menus.map((menu, idx) => (
          <MenuCollapse key={idx} menu={menu} t={t} idx={idx} />
        ))}
      </MobileMenuInner>
    </MobileMenuWrapper>
  </MobileMenuOuter>
);

export default MobileMenu;

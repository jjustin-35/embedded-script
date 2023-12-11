import { TFunctionType } from '../../../constants/types';
import { DataType } from '../../../containers/Header/data';
import Dropdown from '../dropdown';
import { Menus } from '../styled';
interface Props {
  t: TFunctionType;
  data: DataType;
}

const Menu = ({ t, data }: Props) => {
  return (
    <Menus>
      {data.menus.map((menu, idx) => (
        <Dropdown key={idx} data={menu} t={t} />
      ))}
    </Menus>
  );
};

export default Menu;

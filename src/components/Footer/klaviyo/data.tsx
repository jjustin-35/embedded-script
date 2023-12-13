import { ButtonType } from '../../../constants/types';

export type DataType = {
  placeholder: string;
  btn: ButtonType;
};

const data: DataType = {
  placeholder: 'klaviyo-placeholder',

  btn: {
    btnTheme: 'klaviyo',
    text: 'klaviyo-btn',
    size: 'medium',
  },
};

export default data;

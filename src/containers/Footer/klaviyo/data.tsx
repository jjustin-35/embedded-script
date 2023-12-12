import { ButtonType } from '../../../constants/types';

export type DataType = {
  placeholder: string;
  btn: ButtonType;
};

const data: DataType = {
  placeholder: 'klaviyo-placeholder',

  btn: {
    color: 'N100',
    backgroundColor: '#ffffff',
    variant: 'contained',
    text: 'klaviyo-btn',
    size: 'medium',
  },
};

export default data;

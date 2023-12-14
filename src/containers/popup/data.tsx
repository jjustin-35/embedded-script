import configs from '../../config';
import { PopupType, PopupContentType, ButtonType } from '../../constants/types';

type DataType = Record<PopupType, PopupContentType>;

export const button: ButtonType = {
  text: 'OK',
  btnTheme: 'default',
  round: 'normal',
  size: 'medium',
  isDisabled: false,
};


const data: DataType = {
  // klaviyo
  klaviyo_existed: {
    size: 'large',
    desc: 'klaviyo-existed',
    variant: 'message',
  },

  klaviyo_register: {
    size: 'large',
    desc: 'klaviyo-register',
    variant: 'message',
  },
  klaviyo_failed: {
    size: 'large',
    desc: 'klaviyo-failed',
    variant: 'message',
  },

  klaviyo_done: {
    size: 'large',
    desc: 'klaviyo-done',
    variant: 'message',
  },
  none: null,
};

export default data;

import { useTranslation } from 'react-i18next';
import { PopupType } from '../../constants/types';

import Popup from '../../components/popup';
import dataset, { button } from './data';

type Props = {
  popupType: PopupType;
  updatePopupType: (type: PopupType) => void;
};

const PopupContainer = ({ popupType, updatePopupType }: Props) => {
  const { t } = useTranslation(['popup', 'contact']);

  const type = popupType || 'none';
  if (type === 'none') return null;

  const data = dataset[type];

  const { title, desc } = data;
  const hasContent = title || desc;
  if (!hasContent) return null;

  const closeWindow = () => {
    updatePopupType('none');
  };

  return (
    <Popup {...data} button={button} closeWindow={closeWindow} t={t} />
  );
};

export default PopupContainer;

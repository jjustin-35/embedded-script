import { useState } from 'react';
import { i18n } from 'react-i18next';

import { TFunctionType, LangType } from '../../../constants/types';
import { DataType } from '../../../components/Footer/data';

import langViewable from '../../../helpers/langViewable';
import Info from '../../../components/Footer/info';

interface Props {
  t: TFunctionType;
  type: 'pdf-reader' | 'pdf-reader-other' | 'normal';
  dataset: DataType;
}

const InfoContainer = ({ t, type, dataset }: Props) => {
  let data = dataset.info[type];

  const lng = i18n.language as LangType;

  const isNotEnAndJa = !langViewable(lng, ['en', 'ja']);

  if (type === 'pdf-reader' && lng === 'ja') {
    data = dataset.info.normal;
  } else if (type === 'pdf-reader' && lng !== 'en') {
    data = dataset.info['pdf-reader-other'];
  }

  const [activeItem, setActiveItem] = useState<string>('');

  const handleClick = (id: string) => {
    setActiveItem(id === activeItem ? '' : id);
  };

  return <Info t={t} data={data} handleClick={handleClick} activeItem={activeItem} isNotEnAndJa={isNotEnAndJa} />;
};

export default InfoContainer;

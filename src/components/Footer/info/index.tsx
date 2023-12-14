import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { TFunctionType, LangType } from '../../../constants/types';
import language from '../../../constants/language';
import langViewable from '../../../helpers/langViewable';
import { DataType } from '../data';

import { InfoWrapper, InfoBlocks, Title, List, Divider } from './styled';

interface Props {
  t: TFunctionType;
  type: 'normal';
  dataset: DataType;
}

const Info = ({ t, type, dataset }: Props) => {
  let data = dataset.info[type];
  const { i18n } = useTranslation();

  const lng = i18n.language as LangType;

  const isNotEnAndJa = !langViewable(lng, [language.EN, language.JA]);

  const [activeItem, setActiveItem] = useState<string>('');

  const handleClick = (id: string) => {
    setActiveItem(id === activeItem ? '' : id);
  };
  return (
    <InfoWrapper>
      {data.map((el) => (
        <InfoBlocks key={`footer_block_${el.title}`}>
          <Title onClick={() => handleClick(el.id)} opened={activeItem === el.id}>
            {t(el.title)}
          </Title>
          <List opened={activeItem === el.id}>
            {el.items.map((linkItem) => {
              const isHidden = linkItem.isTemplate && isNotEnAndJa;

              if (isHidden) return null;

              return (
                <a
                  href={linkItem.hrefs[lng] || linkItem.hrefs[language.EN]}
                  target={linkItem.target || '_self'}
                  key={`footer_link_${linkItem.text}`}
                >
                  {t(linkItem.text)}
                </a>
              );
            })}
          </List>
          <Divider />
        </InfoBlocks>
      ))}
    </InfoWrapper>
  );
};

export default Info;

import { TFunctionType } from '../../../constants/types';
import { InfoMenuType } from '../data';

import { InfoWrapper, InfoBlocks, Title, List, Divider } from './styled';

interface Props {
  t: TFunctionType;
  data: InfoMenuType[];
  handleClick: (id: string) => void;
  activeItem: string;
  isNotEnAndJa: boolean;
}

const Info = ({ t, data, handleClick, activeItem, isNotEnAndJa }: Props) => {
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
                  href={t(`link:${linkItem.href}`, { ...(linkItem.localeParam && linkItem.localeParam) })}
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

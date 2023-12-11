import React from 'react';
import { TFunctionType } from '../../../constants/types';
import { ColumnType, ColumnItemType } from '../../../containers/Header/data';
import { CompWrapper, Content, Col, ContentTitle } from './styled';

type ChildProps = {
  t: TFunctionType;
  data: ColumnType;
  item: ColumnItemType;
};

type Props = {
  data: ColumnType;
  t: TFunctionType;
};

const Cell = ({ t, data, item }: ChildProps) => {
  const href = t(item.link.href, { ...item.link?.localeParam });
  return (
    <a {...item.link} href={href}>
      <Content isTitleOnly={!data.title}>
        <ContentTitle>{t(item.title)}</ContentTitle>
      </Content>
    </a>
  );
};

const MobileComponent = ({ data, t }: Props) => (
  <CompWrapper>
    {data.title && (
      <p>
        {t(data.title)}
      </p>
    )}
    <Col>
      {data.items.map((item) => (
        <Cell t={t} data={data} item={item} key={`nav_link_${item.title}`} />
      ))}
    </Col>
  </CompWrapper>
);

export default MobileComponent;

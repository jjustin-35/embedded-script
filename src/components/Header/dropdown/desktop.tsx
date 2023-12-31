import React from "react";
import { ColumnType, ColumnItemType } from "../../../containers/Header/data";

import {
  CompWrapper,
  Content,
  ContentTitle,
  ContentDesc,
  Row,
  Col,
} from "./styled";
import { TFunctionType } from "../../../constants/types";

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
    <a target={item.link.target} href={href}>
      <Content isTitleOnly={!data.title}>
        <ContentTitle>{t(item.title)}</ContentTitle>
        {item.desc && (
          <ContentDesc dangerouslySetInnerHTML={{ __html: t(item.desc) }} />
        )}
      </Content>
    </a>
  );
};

const Contents = ({ data, t }: Props) => {
  const items = data.items;
  const groupAmout = Math.ceil(items.length / 4);
  const group = [...Array(groupAmout)].map((_, idx) =>
    items.slice(idx * 4, (idx + 1) * 4)
  );
  return (
    <Row>
      {group.map((items, idx) => (
        <Col key={idx}>
          {items.map((item, idx) => (
            <Cell key={idx} t={t} data={data} item={item} />
          ))}
        </Col>
      ))}
    </Row>
  );
};

const Component = ({ data, t }: Props) => (
  <CompWrapper>
    {data.title && (
      <p>
        {t(data.title)}
      </p>
    )}
    <Contents data={data} t={t} />
  </CompWrapper>
);

export default Component;

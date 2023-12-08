import Typography from '@kdanmobile/kdan-ui/dist/Typography';

import LinkWrapper from '@/components/link';
import { TFunctionType } from '@/constants/types/global';
import { ColumnType, ColumnItemType } from '@/containers/header/data';
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
    <LinkWrapper {...item.link} href={href}>
      <Content isTitleOnly={!data.title}>
        <ContentTitle>{t(item.title)}</ContentTitle>
      </Content>
    </LinkWrapper>
  );
};

const MobileComponent = ({ data, t }: Props) => (
  <CompWrapper>
    {data.title && (
      <Typography variant="b2" color="N25">
        {t(data.title)}
      </Typography>
    )}
    <Col>
      {data.items.map((item) => (
        <Cell t={t} data={data} item={item} key={`nav_link_${item.title}`} />
      ))}
    </Col>
  </CompWrapper>
);

export default MobileComponent;

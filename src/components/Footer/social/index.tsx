import { TFunctionType } from '@/constants/types/global';
import KlaviyoForm from 'containers/Footer/klaviyo';
import SocialMedia from '../socialMedia';

import { Wrapper, Col, Title, Subtitle } from './styled';

interface Props {
  t: TFunctionType;
}

const Social = ({ t }: Props) => (
  <Wrapper>
    <Col>
      <Title>{t('news-title')}</Title>
      <Subtitle dangerouslySetInnerHTML={{ __html: t('news-subtitle') }} />
      <KlaviyoForm t={t} />
    </Col>
    <Col>
      <Title>{t('social-title')}</Title>
      <Subtitle dangerouslySetInnerHTML={{ __html: t('social-subtitle') }} />
      <SocialMedia t={t} />
    </Col>
  </Wrapper>
);

export default Social;

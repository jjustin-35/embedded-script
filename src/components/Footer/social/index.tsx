import React from 'react';
import { TFunctionType, PopupType } from '../../../constants/types';
import Klaviyo from '../klaviyo';
import SocialMedia from '../socialMedia';

import { Wrapper, Col, Title, Subtitle } from './styled';

interface Props {
  t: TFunctionType;
  updatePopupType: (type: PopupType) => void;
}

const Social = ({ t, updatePopupType }: Props) => (
  <Wrapper>
    <Col>
      <Title>{t('news-title')}</Title>
      <Subtitle dangerouslySetInnerHTML={{ __html: t('news-subtitle') }} />
      <Klaviyo t={t} updatePopupType={updatePopupType} />
    </Col>
    <Col>
      <Title>{t('social-title')}</Title>
      <Subtitle dangerouslySetInnerHTML={{ __html: t('social-subtitle') }} />
      <SocialMedia t={t} />
    </Col>
  </Wrapper>
);

export default Social;

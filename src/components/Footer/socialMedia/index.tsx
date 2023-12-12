import { TFunctionType } from '../../../constants/types';

import Wrapper from './styled';
import data from '../data';

interface Props {
  t: TFunctionType;
}

const SocialMedia = ({ t }: Props) => (
  <Wrapper>
    {data.socialMedia.media.map((social, indx) => (
      <a key={indx} href={t(`link:${social.linkSrc}`)} target="_blank" rel="noopener noreferrer">
        <img src={social.imgSrc} alt={social.name} />
      </a>
    ))}
  </Wrapper>
);

export default SocialMedia;

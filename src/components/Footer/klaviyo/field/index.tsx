import { Wrapper } from './styled';

interface Props {
  placeholder: string;
  name: string;
}

const renderField = ({ name, placeholder = '' }: Props) => (
  <Wrapper>
    <input name={name} type="text" placeholder={placeholder} />
  </Wrapper>
);

export default renderField;

import { Wrapper } from './styled';

interface Props {
  placeholder: string;
  input: any;
}

const renderField = ({ placeholder = '', input = {} }: Props) => (
  <Wrapper>
    <input {...input} type="text" placeholder={placeholder} />
  </Wrapper>
);

export default renderField;

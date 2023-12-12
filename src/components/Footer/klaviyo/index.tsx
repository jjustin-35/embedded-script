import { Field } from 'redux-form';
import { Element } from 'react-scroll';

import { TFunctionType } from '../../../constants/types';
import { DataType } from '../../../containers/Footer/klaviyo/data';

import Button from '../../Button';
import RenderField from './field';

import { Wrapper } from './styled';

interface Props {
  handleSubmit: any;
  onFormClick: (formData: any) => void;
  data: DataType;
  t: TFunctionType;
}

const RenderForm = ({ handleSubmit, onFormClick, data, t }: Props) => (
  <Element name="klaviyoElement">
    <Wrapper>
      <form onSubmit={handleSubmit(onFormClick)}>
        <Field name="email" placeholder={t(data.placeholder)} component={RenderField} />
        <Button id="form-btn-klaviyo" {...data.btn} fullWidth>
          {t(data.btn.text)}
        </Button>
      </form>
    </Wrapper>
  </Element>
);

export default RenderForm;

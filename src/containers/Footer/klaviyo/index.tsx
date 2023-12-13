import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { scroller } from 'react-scroll';
import { reduxForm } from 'redux-form';

import { TFunctionType } from '@/constants/types/global';

import { check as klaviyoCheck } from 'redux/actions/klaviyoActions';
import validate from './validate';

import Klaviyo from '../../../components/Footer/klaviyo';
import data from './data';

interface Props {
  handleSubmit: any;
  t: TFunctionType;
}

const KlaviyoContainer = ({ handleSubmit, t }: Props) => {
  if (!data) return;
  const dispatch = useDispatch();
  const queryString = window.location.search;
  const query = new URLSearchParams(queryString);

  useEffect(() => {
    if (query.get('targetElement') === 'form-btn-klaviyo') {
      setTimeout(() => {
        scroller.scrollTo('klaviyoElement', {
          duration: 1000,
          delay: 2000,
        });
      }, 1000);
    }
  });

  const onFormSend = (formData: any) => {
    dispatch(klaviyoCheck(formData));
  };

  const onFormClick = (formData: any) => {
    onFormSend(formData);
  };

  return <Klaviyo handleSubmit={handleSubmit} onFormClick={onFormClick} data={data} t={t} />;
};

const formComponent = reduxForm({
  form: 'klaviyoForm',
  validate,
})(KlaviyoContainer);

export default formComponent;

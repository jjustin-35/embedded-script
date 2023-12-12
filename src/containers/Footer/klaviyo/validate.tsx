type ErrorType = {
  email?: string;
};

const validate = (values: any) => {
  const errors: ErrorType = {};

  if (!values.email) {
    errors.email = 'no email';
  } else if (!/^.+@.+$/i.test(values.email)) {
    errors.email = 'email error';
  }

  return errors;
};

export default validate;

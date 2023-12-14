type ErrorType = {
  email?: string;
};

const validate = (email: string) => {
  const errors: ErrorType = {};

  if (!email) {
    errors.email = 'no email';
  } else if (!/^.+@.+$/i.test(email)) {
    errors.email = 'email error';
  }

  return errors;
};

export default validate;

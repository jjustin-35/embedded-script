import React from "react";

import { TFunctionType } from "../../../constants/types";
import { DataType } from "./data";
import validate from "./validate";

import Button from "../../Button";
import Field from "./field";

import { Wrapper } from "./styled";
import data from "./data";

interface Props {
  t: TFunctionType;
}

const Klaviyo = ({ t }: Props) => {
  if (!data) return;
  // const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const email = formData.get('email') as string;
    const isValid = validate(email);
    console.log(email, isValid);
  };

  return (
  <Wrapper>
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        placeholder={t(data.placeholder)}
      />
      <Button id="form-btn-klaviyo" {...data.btn} />
    </form>
  </Wrapper>
)};

export default Klaviyo;

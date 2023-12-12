import React from "react";

import { TFunctionType } from "../../../constants/types";
import { DataType } from "../../../containers/Footer/klaviyo/data";

import Button from "../../Button";
import Field from "./field";

import { Wrapper } from "./styled";

interface Props {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  data: DataType;
  t: TFunctionType;
}

const Form = ({ handleSubmit, data, t }: Props) => (
  <Wrapper>
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        placeholder={t(data.placeholder)}
      />
      <Button id="form-btn-klaviyo" {...data.btn} />
    </form>
  </Wrapper>
);

export default Form;

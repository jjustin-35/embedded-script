import React, { useState } from "react";

import { TFunctionType } from "../../../constants/types";
import validate from "./validate";

import Button from "../../Button";
import Field from "./field";

import { Wrapper } from "./styled";
import data from "./data";

interface Props {
  t: TFunctionType;
}

const Klaviyo = ({ t }: Props) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const email = formData.get("email") as string;
    const isInValid = !!validate(email).email;
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Field name="email" placeholder={t(data.placeholder)} />
        <Button id="form-btn-klaviyo" {...data.btn} text={t(data.btn.text)} />
      </form>
    </Wrapper>
  );
};

export default Klaviyo;

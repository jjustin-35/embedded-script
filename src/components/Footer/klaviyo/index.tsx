import React from "react";

import { TFunctionType, PopupType } from "../../../constants/types";
import validate from "./validate";
import sendKlaviyo from "../../../apis/sendKlaviyo";

import Button from "../../Button";
import Field from "./field";

import { Wrapper } from "./styled";
import data from "./data";

interface Props {
  t: TFunctionType;
  updatePopupType: (type: PopupType) => void;
}

const Klaviyo = ({ t, updatePopupType }: Props) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const email = formData.get("email") as string;
    const isInValid = !!validate(email).email;
    if (isInValid) return;

    (async () => {
      const res = await sendKlaviyo(email);
      if (res.error_code) {
        updatePopupType('klaviyo_failed');
        return;
      }
      if (res.body?.length > 0) {
        updatePopupType('klaviyo_existed');
        return;
      }
      updatePopupType("klaviyo_register");
    })()
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

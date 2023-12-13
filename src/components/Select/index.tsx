import React, { useState } from "react";
import { TFunctionType } from "../../constants/types";

import {
  InputWrapper,
  Label,
  ErrorMessage,
  HiddenInput,
  SelectWrapper,
  SelectValue,
  SelectIcon,
  SelectMenu,
  Option,
} from "./styled";

export type OptionType = {
  key?: string;
  value: string;
  id?: string;
};

interface SelectTriggerProps {
  selectedValue: string;
  isDisabled?: boolean;
  isOpen: boolean;
  onClick: () => void;
  t: TFunctionType;
}

interface Props {
  label?: string;
  name?: string;
  id?: string;
  value?: string;
  activeOption?: OptionType;
  placeholder?: string;
  options?: OptionType[];
  errorMessage?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isError?: boolean;
  onChange?: (item?: OptionType) => void;
  onBlur?: (e?: React.FocusEvent) => void;
  t: TFunctionType;
}

const selectIcon = {
  src: "/images/icons/ic-black-arrow-down.svg",
  alt: "ic-down",
};

const SelectBar = ({
  selectedValue,
  isDisabled,
  isOpen,
  onClick,
  t,
}: SelectTriggerProps) => (
  <SelectWrapper isDisabled={isDisabled} tabIndex={0} onClick={onClick}>
    <SelectValue>{t(selectedValue)}</SelectValue>
    <SelectIcon {...selectIcon} isOpen={isOpen} isReverse />
  </SelectWrapper>
);

const SelectField = ({
  label,
  name,
  id,
  isRequired,
  activeOption,
  errorMessage,
  options,
  isDisabled,
  isError,
  onChange,
  onBlur,
  t,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const changeHandler = (option: { key?: string; value: string }) => {
    onChange(option);
    setIsOpen(false);
  };

  const clickHandler = () => {
    setIsOpen((current) => !current);
  };

  const blurHandler = (e: React.FocusEvent) => {
    const parentElement = e.currentTarget;
    const relatedTarget = e.relatedTarget;
    if (parentElement.contains(relatedTarget)) return;
    if (onBlur) onBlur(e);
    setIsOpen(false);
  };

  return (
    <InputWrapper id={id} tabIndex={0} onBlur={blurHandler}>
      <Label>{t(label)}</Label>
      <HiddenInput
        type="text"
        name={name}
        value={activeOption.key}
        required={isRequired}
        onChange={() => {}}
      />
      <SelectBar
        selectedValue={activeOption.value}
        isDisabled={isDisabled}
        isOpen={isOpen}
        t={t}
        onClick={clickHandler}
      />
      <SelectMenu isOpen={isOpen}>
        {options?.map((option) => {
          const isActive = option.key === activeOption.key;
          return (
            <Option
              key={option.key}
              onClick={() => changeHandler(option)}
              id={option.id}
              isActive={isActive}
            >
              {t(option.value)}
            </Option>
          );
        })}
      </SelectMenu>
      {isError && errorMessage && (
        <ErrorMessage>{t(errorMessage)}</ErrorMessage>
      )}
    </InputWrapper>
  );
};

export default SelectField;

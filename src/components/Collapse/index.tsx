import React, { useRef, useState, useEffect } from "react";

import { ContentWrapper, Inner, Wrapper, TriggerWrapper } from "./styled";
export interface CollapseProps {
  defaultOpen?: boolean;
  triggerHandler?: (isOpen?: boolean) => void;
  onBlur?: (e?: React.FocusEvent) => void;
  trigger: React.ReactNode;
  children: React.ReactNode;
}

const Collapse = ({
  defaultOpen = false,
  triggerHandler,
  onBlur,
  trigger,
  children,
}: CollapseProps) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);

  const handleClick = () => {
    setOpen((current) => !current);
    if (triggerHandler) triggerHandler(!isOpen);
  };

  const handleBlur = (e: React.FocusEvent) => {
    if (onBlur) onBlur(e);
    setOpen(false);
  };

  useEffect(() => {
    setOpen(defaultOpen);
    if (triggerHandler) triggerHandler(defaultOpen);
  }, [defaultOpen]);

  useEffect(() => {
    if (isOpen) {
      const maxHeight = innerRef.current?.clientHeight || 0;
      setMaxHeight(maxHeight);
      return;
    }
    setMaxHeight(0);
  }, [isOpen]);

  return (
    <Wrapper onBlur={handleBlur}>
      <TriggerWrapper onClick={handleClick}>{trigger}</TriggerWrapper>
      <ContentWrapper maxHeight={maxHeight}>
        <Inner ref={innerRef}>{children}</Inner>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Collapse;

import {
  TFunctionType,
  ButtonType,
  PopupContentType,
} from "../../constants/types";

import Button from "../Button";
import {
  Back,
  Outer,
  Image,
  Content,
  Title,
  Wrapper,
  Inner,
  Desc,
  ButtonWrapper,
} from "./styled";

interface Props extends PopupContentType {
  closeWindow?: () => void;
  t?: TFunctionType;
}

const Popup = ({
  size,
  button,
  backgroundColor,
  backgroundImage,
  fontColor,
  dividerColor,
  image,
  title,
  subtitle,
  desc,
  variant,
  href,
  target,
  id,
  closeWindow,
  t,
}: Props) => {
  const btnId = id && `Success_${id}`;
  if (!title && !subtitle && !desc) return null;

  return (
    <>
      <Back data-testid="modal" variant={variant} />
      <Outer
        size={size}
        variant={variant}
        backgroundColor={backgroundColor}
        backgroundImage={backgroundImage}
      >
        <Wrapper>
          {image && <Image {...image} />}
          <Inner>
            <Content fontColor={fontColor}>
              {title && (
                <Title
                  dangerouslySetInnerHTML={{
                    __html: t(title),
                  }}
                />
              )}
              {subtitle && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: t(subtitle),
                  }}
                />
              )}
              {desc && <Desc dangerouslySetInnerHTML={{ __html: t(desc) }} />}
            </Content>
            <ButtonWrapper borderColor={dividerColor}>
              <a href={href} target={target}>
                <Button {...button} id={btnId} onClick={closeWindow} />
              </a>
            </ButtonWrapper>
          </Inner>
        </Wrapper>
      </Outer>
    </>
  );
};

export default Popup;

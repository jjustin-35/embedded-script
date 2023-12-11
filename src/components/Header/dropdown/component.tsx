import React, { Fragment } from "react";

import { TFunctionType } from "../../../constants/types";
import { BottomItemType, MenuType } from "../../../containers/Header/data";

import LinkImg from "../../GeneralLink";
import DesktopComponent from "./desktop";
import MobileComponent from "./mobile";
import { Outer, Icon, Containers, Container, BtmLink } from "./styled";

interface ChildProps {
  t: TFunctionType;
  item: BottomItemType;
}
interface Props {
  data: MenuType;
  t: TFunctionType;
  indx: number;
  isMobile: boolean;
}

const BtmItem = ({ t, item }: ChildProps) => (
  <a href={item.href} target={item.target || "_blank"} rel="noopener">
    <BtmLink>
      {t(item.text)}
      <LinkImg />
    </BtmLink>
  </a>
);

const DropdownComponent = ({ data, t, indx, isMobile }: Props) => (
  <Outer isSmall={indx > 1}>
    <Icon>
      <img {...data.images} />
    </Icon>
    <Containers>
      <Container>
        {data.cols.map((col) => (
          <Fragment key={col.key}>
            {isMobile ? (
              <MobileComponent data={col} t={t} />
            ) : (
              <DesktopComponent data={col} t={t} />
            )}
          </Fragment>
        ))}
      </Container>
      {data.btm && (
        <Container isBtn>
          {data.btm.map((item) => (
            <BtmItem t={t} item={item} key={item.key} />
          ))}
        </Container>
      )}
    </Containers>
  </Outer>
);

export default DropdownComponent;

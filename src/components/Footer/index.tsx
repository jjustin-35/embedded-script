import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { PopupType } from "../../constants/types";
import LangBar from "../../components/FooterLangBar";
import Social from "./social";
import Info from "./info";
import Popup from "../../containers/Popup";

import { FooterOuter, FooterWrapper } from "./styled";
import dataset from "./data";

const Footer = () => {
  const { t } = useTranslation(["common", "link"]);
  const [popupType, updatePopupType] = useState<PopupType>("none");

  return (
    <FooterOuter>
      <FooterWrapper>
        <Social t={t} updatePopupType={updatePopupType} />
        <hr />
        <Info t={t} dataset={dataset} type="normal" />
        <LangBar t={t} />
      </FooterWrapper>
      <Popup popupType={popupType} updatePopupType={updatePopupType} />
    </FooterOuter>
  );
};

export default Footer;

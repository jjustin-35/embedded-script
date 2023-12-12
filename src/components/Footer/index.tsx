import { useTranslation } from "react-i18next";

import LangBar from "../../components/FooterLangBar";
import Social from "./social";
import Info from "../../containers/Footer/info";

import { FooterOuter, FooterWrapper } from "./styled";
import dataset from "./data";

const Footer = () => {
  const { t } = useTranslation(["common", "link"]);

  return (
    <FooterOuter>
      <FooterWrapper>
        <Social t={t} />
        <hr />
        <Info t={t} dataset={dataset} type="normal" />
        <LangBar />
      </FooterWrapper>
    </FooterOuter>
  );
};

export default Footer;

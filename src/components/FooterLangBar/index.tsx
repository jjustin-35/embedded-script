import LangSelect from "../../containers/LangSelect";

import { LangBarWrapper, UpperLink, LinkGroup } from "./styled";
import { footerLinks } from "./data";

const langBar = ({ t, noLang, copyright, isCampaign }) => (
  <LangBarWrapper>
    <UpperLink>
      <LinkGroup>
        {footerLinks.map((link, idx) => {
          return (
            <a key={`footer-${idx}`} href={t(link.linkSrc)}>
              {t(link.text)}
            </a>
          );
        })}
      </LinkGroup>
      {!noLang && <LangSelect isCampaign={isCampaign} />}
    </UpperLink>
    {copyright ? (
      <p dangerouslySetInnerHTML={{ __html: copyright }} />
    ) : (
      <p>{`© 2009-${new Date().getFullYear()} Kdan Mobile Software Ltd. All Rights Reserved.`}</p>
    )}
  </LangBarWrapper>
);

export default langBar;

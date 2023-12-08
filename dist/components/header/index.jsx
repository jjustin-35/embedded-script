"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const EventBar_1 = __importDefault(require("@/containers/EventBar"));
const buttonComponent_1 = __importDefault(require("../buttonComponent"));
const menu_1 = __importDefault(require("./menu"));
const mobileMenu_1 = __importDefault(require("./menu/mobileMenu"));
const styled_1 = require("./styled");
const BurgerMenu = ({ onTrigger, isOpen }) => (<styled_1.Burger onClick={onTrigger} isOpen={isOpen}>
    {[...Array(3)].map((_, idx) => (<span key={idx}/>))}
  </styled_1.Burger>);
const Header = ({ data, type, t, onTrigger, isScrolldown, isOpen, isMobile, isErrorPage, isCampaign }) => {
    return (<>
      {!isErrorPage && !isCampaign && <EventBar_1.default />}
      <styled_1.Wrapper isScrolldown={isScrolldown} isEventbar>
        <styled_1.HeaderContainer>
          <styled_1.Inner>
            <styled_1.MenuWrapper>
              <styled_1.Brand href="/" passHref>
                <a>
                  <styled_1.Logo {...data.logo}/>
                </a>
              </styled_1.Brand>
              {!isMobile && <menu_1.default t={t} data={data}/>}
            </styled_1.MenuWrapper>
            {!isMobile && data.btns[type] && (<link_1.default href={data.btns[type].href}>
                <buttonComponent_1.default {...data.btns[type]} t={t}/>
              </link_1.default>)}
            {isMobile && <BurgerMenu isOpen={isOpen} onTrigger={onTrigger}/>}
          </styled_1.Inner>
        </styled_1.HeaderContainer>
        {isMobile && <mobileMenu_1.default t={t} data={data} isOpen={isOpen}/>}
      </styled_1.Wrapper>
    </>);
};
exports.default = Header;

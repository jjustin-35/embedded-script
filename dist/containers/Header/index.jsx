"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_i18next_1 = require("next-i18next");
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const commonStyle_1 = require("@/constants/commonStyle");
const header_1 = __importDefault(require("../../components/header"));
const data_1 = __importDefault(require("./data"));
const HeaderContainer = ({ type = 'default', isErrorPage, isCampaign }) => {
    const [isScrolldown, setIsScrolldown] = (0, react_1.useState)(false);
    const [isMobile, setIsMobile] = (0, react_1.useState)(false);
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const { t } = (0, next_i18next_1.useTranslation)(['common', 'link', 'campaign']);
    const scrollHandler = () => {
        if (window.scrollY > 70) {
            setIsScrolldown(true);
        }
        else {
            setIsScrolldown(false);
        }
    };
    const triggerHandler = () => {
        setIsOpen(!isOpen);
    };
    const resetHeader = () => {
        if (window.innerWidth <= commonStyle_1.breakpoints.tablet) {
            setIsMobile(true);
        }
        else {
            setIsMobile(false);
        }
    };
    (0, react_1.useEffect)(() => {
        if (isMobile && isOpen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen, isMobile]);
    (0, react_1.useEffect)(() => {
        resetHeader();
        window.addEventListener('resize', resetHeader);
        return () => {
            window.removeEventListener('resize', resetHeader);
        };
    }, []);
    (0, react_1.useEffect)(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);
    return (<header_1.default data={data_1.default} t={t} isScrolldown={isScrolldown} onTrigger={triggerHandler} isOpen={isOpen} isMobile={isMobile} type={type} isErrorPage={isErrorPage} isCampaign={isCampaign}/>);
};
HeaderContainer.propTypes = {
    hasEventBar: prop_types_1.bool,
};
exports.default = HeaderContainer;

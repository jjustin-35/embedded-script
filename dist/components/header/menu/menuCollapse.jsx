"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const collapse_1 = __importDefault(require("@/components/collapse"));
const component_1 = __importDefault(require("../dropdown/component"));
const styled_1 = require("../styled");
const Trigger = ({ text, isOpen }) => (<styled_1.ItemWrapper>
    {text}
    <styled_1.ArrowIcon src="/images/icons/ic-down-arrow.svg" alt="ic-down-arrow" isOpen={isOpen}/>
  </styled_1.ItemWrapper>);
const MenuCollapse = ({ menu, t, idx }) => {
    const [isOpen, setOpen] = (0, react_1.useState)(false);
    const triggerHandler = (isOpen) => setOpen(isOpen);
    return (<collapse_1.default key={menu.key} trigger={<Trigger text={t(menu.text)} isOpen={isOpen}/>} triggerHandler={triggerHandler}>
      <component_1.default isMobile data={menu} t={t} indx={idx}/>
    </collapse_1.default>);
};
exports.default = MenuCollapse;

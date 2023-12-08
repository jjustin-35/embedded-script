"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const menuCollapse_1 = __importDefault(require("./menuCollapse"));
const styled_1 = require("../styled");
const MobileMenu = ({ t, data, isOpen }) => (<styled_1.MobileMenuOuter>
    <styled_1.MobileMenuWrapper isOpen={isOpen}>
      <styled_1.MobileMenuInner>
        {data.menus.map((menu, idx) => (<menuCollapse_1.default key={idx} menu={menu} t={t} idx={idx}/>))}
      </styled_1.MobileMenuInner>
    </styled_1.MobileMenuWrapper>
  </styled_1.MobileMenuOuter>);
exports.default = MobileMenu;

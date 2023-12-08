"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dropdown_1 = __importDefault(require("../dropdown"));
const styled_1 = require("../styled");
const Menu = ({ t, data }) => {
    return (<styled_1.Menus>
      {data.menus.map((menu, idx) => (<dropdown_1.default key={idx} data={menu} t={t}/>))}
    </styled_1.Menus>);
};
exports.default = Menu;

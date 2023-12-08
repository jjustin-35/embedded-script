"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("./styled");
const data_1 = __importDefault(require("./data"));
const Link = () => (<styled_1.Arrow>
    <img {...data_1.default['arrow-link']}/>
  </styled_1.Arrow>);
exports.default = Link;

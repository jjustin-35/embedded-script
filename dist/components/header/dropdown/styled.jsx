"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BtmLink = exports.DropdownInner = exports.DropdownWrapper = exports.DropdownOuter = exports.Col = exports.Row = exports.ContentDesc = exports.ContentTitle = exports.Content = exports.CompWrapper = exports.Container = exports.Containers = exports.Icon = exports.Outer = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const commonStyle_1 = require("@/constants/commonStyle");
exports.Outer = styled_components_1.default.div `
  display: flex;
  padding: 30px 20px;
  border: solid 2px #000000;
  background-color: #fff;

  ${({ isSmall }) => isSmall &&
    (0, styled_components_1.css) `
      padding: 15px 0px 5px 20px;
    `}

  @media (${commonStyle_1.device.tablet}) {
    margin-top: 0;
    padding: 20px 0 20px 20px;
    border: none;
  }
`;
exports.Icon = styled_components_1.default.div `
  margin-right: 20px;
  width: 30px;
  height: 30px;

  img {
    width: 30px;
    height: 30px;
  }
`;
exports.Containers = styled_components_1.default.div ``;
exports.Container = styled_components_1.default.div `
  display: flex;
  ${({ isBtn }) => isBtn &&
    (0, styled_components_1.css) `
      position: relative;
      margin-top: 20px;
      padding-top: 20px;
      :after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #c5c5c5;
      }
      a {
        margin-right: 20px;
      }
    `}
  @media (${commonStyle_1.device.tablet}) {
    flex-direction: column;
    a {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;
exports.CompWrapper = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (${commonStyle_1.device.tablet}) {
    :first-child {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
`;
exports.Content = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  cursor: pointer;
  max-width: 200px;

  :hover {
    color: ${commonStyle_1.colors.common.brand};
    transition: 0.2s;
  }
  ${({ isTitleOnly }) => isTitleOnly &&
    (0, styled_components_1.css) `
      margin: 0 0 15px;
    `}

  @media (${commonStyle_1.device.tablet}) {
    margin: 8px 0 10px;
    max-width: unset;
  }
`;
exports.ContentTitle = styled_components_1.default.p `
  color: #000000;

  :hover {
    color: ${commonStyle_1.colors.common.brand};
  }

  @media (${commonStyle_1.device.tablet}) {
    font-size: 14px;
  }
`;
exports.ContentDesc = styled_components_1.default.p `
  font-size: 12px;
  color: ${commonStyle_1.colors.common.grey};
`;
exports.Row = styled_components_1.default.div `
  display: flex;
  margin-top: 10px;
`;
exports.Col = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  margin-right: 32px;

  a {
    display: block;
  }
`;
exports.DropdownOuter = styled_components_1.default.div ``;
exports.DropdownWrapper = styled_components_1.default.div `
  position: relative;
`;
exports.DropdownInner = styled_components_1.default.div `
  position: absolute;
  top: 30px;
  left: 0;
  z-index: 1;
  width: max-content;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 300ms cubic-bezier(0.4, 0, 0.2, 1) 50ms, opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${({ isOpen, maxHeight }) => isOpen &&
    (0, styled_components_1.css) `
      max-height: ${maxHeight}px;
      opacity: 1;
    `}
`;
exports.BtmLink = styled_components_1.default.span `
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 20px;
  color: ${commonStyle_1.colors.common.brand};
  line-height: 1.1;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  :hover {
    opacity: 0.7;
  }
`;

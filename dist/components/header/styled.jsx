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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowIcon = exports.ButtonWrapper = exports.Link = exports.MobileMenuInner = exports.MobileMenuWrapper = exports.MobileMenuOuter = exports.Menus = exports.MenuWrapper = exports.Burger = exports.Brand = exports.ItemWrapper = exports.Inner = exports.HeaderContainer = exports.Logo = exports.Wrapper = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const commonStyle_1 = require("@/constants/commonStyle");
const link_1 = __importDefault(require("next/link"));
exports.Wrapper = styled_components_1.default.header `
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  z-index: 10;
  transition: box-shadow 0.3s ease;
  ${({ isScrolldown }) => isScrolldown &&
    (0, styled_components_1.css) `
      box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    `};
`;
exports.Logo = styled_components_1.default.img `
  width: 100%;
`;
exports.HeaderContainer = styled_components_1.default.div `
  max-width: 1920px;
  padding: 0 100px;
  margin: 0 auto;

  @media screen and (${commonStyle_1.device.laptop}) {
    padding: 0 40px;
  }
  @media screen and (${commonStyle_1.device.mobile}) {
    padding: 0 16px;
  }
`;
exports.Inner = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;
exports.ItemWrapper = styled_components_1.default.a `
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;

  svg {
    pointer-events: none;
  }
`;
exports.Brand = (0, styled_components_1.default)(link_1.default) `
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`;
exports.Burger = styled_components_1.default.a `
  display: none;
  width: 40px;
  height: 24px;
  cursor: pointer;
  position: relative;
  span {
    position: absolute;
    width: 24px;
    height: 4px;
    border-radius: 2px;
    background-color: #000;
    transition: all 0.2s;
    left: 50%;
    transform: translateX(-50%);

    &:first-child {
      top: 0;
    }
    &:nth-child(2) {
      top: 50%;
      transform: translate(-50%, -50%);
    }
    &:last-child {
      bottom: 0;
    }

    ${({ isOpen }) => isOpen &&
    (0, styled_components_1.css) `
        width: 30px;
        &:first-child {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:last-child {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
        }
      `}
  }

  @media screen and (${commonStyle_1.device.tablet}) {
    display: block;
  }
`;
exports.MenuWrapper = styled_components_1.default.div `
  display: flex;
  gap: 48px;
  align-items: center;
`;
exports.Menus = styled_components_1.default.div `
  display: flex;
  align-items: center;
  gap: 20px;
  @media screen and (${commonStyle_1.device.tablet}) {
    display: none;
  }
`;
exports.MobileMenuOuter = styled_components_1.default.div `
  position: relative;
`;
exports.MobileMenuWrapper = styled_components_1.default.div `
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  z-index: 5;
  background-color: #ffffff;
  transition: all 0.3s linear;
  overflow-y: hidden;
  height: 0;
  overflow-y: scroll;

  ${({ isOpen }) => isOpen &&
    (0, styled_components_1.css) `
      height: 100vh;
    `}
`;
exports.MobileMenuInner = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 40px;

  @media screen and (${commonStyle_1.device.mobile}) {
    margin: 16px;
  }
`;
exports.Link = (0, styled_components_1.default)(link_1.default) `
  padding: 8px 10px;
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  transition: color 0.3s linear;
  cursor: pointer;
  :hover {
    color: rgba(0, 0, 0, 0.6);
  }
`;
exports.ButtonWrapper = styled_components_1.default.div `
  margin-left: 24px;

  @media screen and (${commonStyle_1.device.tablet}) {
    margin-left: 0;
    margin-right: 24px;
  }
  @media screen and (${commonStyle_1.device.mobile}) {
    display: none;
  }
`;
exports.ArrowIcon = styled_components_1.default.img `
  width: 16px;
  height: 16px;

  ${({ isOpen }) => isOpen &&
    (0, styled_components_1.css) `
      transform: rotate(180deg);
    `}
`;

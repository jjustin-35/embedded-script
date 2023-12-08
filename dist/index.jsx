"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = require("react-dom/client");
const Footer_1 = __importDefault(require("./components/Footer"));
const footerNode = document.createElement("div");
const footerRoot = (0, client_1.createRoot)(footerNode);
footerRoot.render(<Footer_1.default />);
document.body.appendChild(footerNode);

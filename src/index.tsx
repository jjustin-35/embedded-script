import React from "react";
import { createRoot } from "react-dom/client";
import "./config/i18n";
import fontFamily from "./constants/fontFamily";
import GlobalStyle from "./constants/globalStyle";
import Footer from "./components/Footer";

const { ClearSans, NotoSansTC, NotoSansSC, NotoSansJP } = fontFamily;

const FontLinks = () => (
  <>
    <link href={ClearSans} rel="stylesheet" />
    <link href={NotoSansTC} rel="stylesheet" />
    <link href={NotoSansSC} rel="stylesheet" />
    <link href={NotoSansJP} rel="stylesheet" />
  </>
);

const headNode = document.createElement("div");
const headRoot = createRoot(headNode);
headRoot.render(<FontLinks />);
document.head.appendChild(headNode);

const footerNode = document.createElement("div");
const footerRoot = createRoot(footerNode);
footerRoot.render(
  <>
    <GlobalStyle />
    <Footer />
  </>
);
document.body.appendChild(footerNode);

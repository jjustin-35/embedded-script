import React from "react";
import { createRoot } from "react-dom/client";
import "./config/i18n";
import GlobalStyle from "./constants/globalStyle";
import Header from "./containers/Header";
import Footer from "./components/Footer";

const headerNode = document.createElement("div");
const headerRoot = createRoot(headerNode);
headerRoot.render(
  <>
    <GlobalStyle />
    <Header />
  </>
);

const firstChild = document.body.firstChild;
if (firstChild) {
  document.body.insertBefore(headerNode, firstChild);
} else {
  document.body.appendChild(headerNode);
}

const footerNode = document.createElement("div");
const footerRoot = createRoot(footerNode);
footerRoot.render(
  <>
    <GlobalStyle />
    <Footer />
  </>
);
document.body.appendChild(footerNode);

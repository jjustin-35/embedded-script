import React from "react";
import { createRoot } from "react-dom/client";
import "./config/i18n";
import GlobalStyle from "./constants/globalStyle";
import Footer from "./components/Footer";

const footerNode = document.createElement("div");
const footerRoot = createRoot(footerNode);
footerRoot.render(
  <>
    <GlobalStyle />
    <Footer />
  </>
);
document.body.appendChild(footerNode);

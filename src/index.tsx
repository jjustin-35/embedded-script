import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./containers/Header";
import Footer from "./components/Footer";

const headerNode = document.createElement("div");
const headerRoot = createRoot(headerNode);
headerRoot.render(<Header />);

const firstChild = document.body.firstChild;
if (firstChild) {
  document.body.insertBefore(headerNode, firstChild);
} else {
  document.body.appendChild(headerNode);
}

// const footerNode = document.createElement("div");
// const footerRoot = createRoot(footerNode);
// footerRoot.render(<Footer />);
// document.body.appendChild(footerNode);
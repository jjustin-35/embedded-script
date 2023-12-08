import { createRoot } from "react-dom/client";
import Footer from "./src/components/Footer";

const footerNode = document.createElement("div");
const footerRoot = createRoot(footerNode);
footerRoot.render(Footer());
document.body.appendChild(footerNode);
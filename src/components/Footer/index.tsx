import { useState } from "react";

const Footer = () => {
  const [text, setText] = useState("Footer");
  return <div>{text}</div>;
};

export default Footer;

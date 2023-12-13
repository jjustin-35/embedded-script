import { createGlobalStyle } from "styled-components";
import { device } from "./commonStyle";

const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
  scroll-behavior: smooth;
}

body {
  min-height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  display: none;
}
* {
  outline: none;
  outline-width: 0;

  box-sizing: border-box;
}
*:focus {
  outline: none;
  outline-width: 0;
}

*:lang(en) {
  font-family: 'Clear Sans', sans-serif;
}
*:lang(es) {
  font-family: 'Clear Sans', sans-serif;
}
*:lang(zh-tw) {
  font-family: 'Noto Sans TC', sans-serif;
}
*:lang(zh-cn) {
  font-family: 'Noto Sans SC', sans-serif;
}
*:lang(ja) {
  font-family: 'Noto Sans JP', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
button {
  margin-top: 0;
  padding: 0;
  margin: 0;
  padding-right: 0;
  padding-left: 0;
}

h1 {
  font-size: 48px;
  line-height: 1.2;
  margin-bottom: 30px;
}
h2 {
  font-size: 36px;
  line-height: 1.15;
  margin-bottom: 30px;
}
h3 {
  font-size: 26px;
  line-height: 1.15;
  margin-bottom: 20px;
}
h4 {
  font-size: 14px;
  line-height: 1.15;
  margin-bottom: 10px;
}
a {
  text-decoration: none;
}

@media screen and (max-width: 990px) {
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 24px;
  }
  h3 {
    font-size: 16px;
  }
}

@media screen and (${device.mobile}) {
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 22px;
  }
  h3 {
    font-size: 20px;
  }
}

#launcher {
  display: none;
}

#ot-sdk-btn-floating {
  display: none;
}
`;

export default GlobalStyle;
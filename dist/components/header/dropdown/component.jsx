"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const GeneralLink_1 = __importDefault(require("../../GeneralLink"));
const desktop_1 = __importDefault(require("./desktop"));
const mobile_1 = __importDefault(require("./mobile"));
const styled_1 = require("./styled");
const BtmItem = ({ t, item }) => (<a {...item}>
    <styled_1.BtmLink>
      {t(item.text)}
      <GeneralLink_1.default />
    </styled_1.BtmLink>
  </a>);
const DropdownComponent = ({ data, t, indx, isMobile }) => (<styled_1.Outer isSmall={indx > 1}>
    <styled_1.Icon>
      <img {...data.images}/>
    </styled_1.Icon>
    <styled_1.Containers>
      <styled_1.Container>
        {data.cols.map((col) => (<react_1.Fragment key={col.key}>
            {isMobile ? (<mobile_1.default data={col} t={t}/>) : (<desktop_1.default data={col} t={t}/>)}
          </react_1.Fragment>))}
      </styled_1.Container>
      {data.btm && (<styled_1.Container isBtn>
          {data.btm.map((item) => (<BtmItem t={t} item={item} key={item.key}/>))}
        </styled_1.Container>)}
    </styled_1.Containers>
  </styled_1.Outer>);
exports.default = DropdownComponent;

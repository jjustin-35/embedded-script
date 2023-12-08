"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Typography_1 = __importDefault(require("@kdanmobile/kdan-ui/dist/Typography"));
const link_1 = __importDefault(require("@/components/link"));
const styled_1 = require("./styled");
const Cell = ({ t, data, item }) => {
    const href = t(item.link.href, { ...item.link?.localeParam });
    return (<link_1.default {...item.link} href={href}>
      <styled_1.Content isTitleOnly={!data.title}>
        <styled_1.ContentTitle>{t(item.title)}</styled_1.ContentTitle>
      </styled_1.Content>
    </link_1.default>);
};
const MobileComponent = ({ data, t }) => (<styled_1.CompWrapper>
    {data.title && (<Typography_1.default variant="b2" color="N25">
        {t(data.title)}
      </Typography_1.default>)}
    <styled_1.Col>
      {data.items.map((item) => (<Cell t={t} data={data} item={item} key={`nav_link_${item.title}`}/>))}
    </styled_1.Col>
  </styled_1.CompWrapper>);
exports.default = MobileComponent;

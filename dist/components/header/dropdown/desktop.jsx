"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("@/components/link"));
const Typography_1 = __importDefault(require("@kdanmobile/kdan-ui/dist/Typography"));
const styled_1 = require("./styled");
const Cell = ({ t, data, item }) => {
    const href = t(item.link.href, { ...item.link?.localeParam });
    return (<link_1.default {...item.link} href={href}>
      <styled_1.Content isTitleOnly={!data.title}>
        <styled_1.ContentTitle>{t(item.title)}</styled_1.ContentTitle>
        {item.desc && <styled_1.ContentDesc dangerouslySetInnerHTML={{ __html: t(item.desc) }}/>}
      </styled_1.Content>
    </link_1.default>);
};
const Contents = ({ data, t }) => {
    const items = data.items;
    const groupAmout = Math.ceil(items.length / 4);
    const group = [...Array(groupAmout)].map((_, idx) => items.slice(idx * 4, (idx + 1) * 4));
    return (<styled_1.Row>
      {group.map((items, idx) => (<styled_1.Col key={idx}>
          {items.map((item, idx) => (<Cell key={idx} t={t} data={data} item={item}/>))}
        </styled_1.Col>))}
    </styled_1.Row>);
};
const Component = ({ data, t }) => (<styled_1.CompWrapper>
    {data.title && (<Typography_1.default variant="b2" color="N25">
        {t(data.title)}
      </Typography_1.default>)}
    <Contents data={data} t={t}/>
  </styled_1.CompWrapper>);
exports.default = Component;

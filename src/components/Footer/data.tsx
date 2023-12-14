import config from "../../config";
import { LangType } from "../../constants/types";
import language from "../../constants/language";

type MediaItemType = {
  name: string;
  imgSrc: string;
  linkSrc: string;
};

type SocialMediaType = {
  title: string;
  subtitle: string;
  media: MediaItemType[];
};

type NewsLetterType = {
  title: string;
  subtitle: string;
};

type InfoMenuItemsType = {
  text: string;
  hrefs: Record<string, string>;
  isExternal?: boolean;
  target?: string;
  rel?: string;
  localeParam?: Record<string, string>;
  isTemplate?: boolean;
  id?: string;
};

export type InfoMenuType = {
  id: string;
  title: string;
  items: InfoMenuItemsType[];
};

type InfoType = {
  normal: InfoMenuType[];
};

export type DataType = {
  socialMedia: SocialMediaType;
  newslatter: NewsLetterType;
  info: InfoType;
};

const {
  KDAN_WEBSITE,
  CREATIVE_STORE,
  DOTTEDSIGN,
  DOTTEDSIGN_CN,
  KDAN_CLOUD,
  MARK_UP,
  ANIZONE,
  ANIZONE_CN,
  INSPOD,
  ADNEX,
  SUPPORT_CENTER,
} = config;

const { EN, JA, ZH_TW, ZH_CN, KO, ES } = language;

const data: DataType = {
  socialMedia: {
    title: "Connect with Kdan Mobile",
    subtitle: "Follow us to receive all latest updates and promotions.",
    media: [
      {
        name: "facebook",
        imgSrc: "images/footer/btn_fb01.svg",
        linkSrc: "social-media-facebook-link",
      },
      {
        name: "twitter",
        imgSrc: "images/footer/btn_twitter01.svg",
        linkSrc: "social-media-twitter-link",
      },
      {
        name: "linkedin",
        imgSrc: "images/footer/btn_in01.svg",
        linkSrc: "social-media-linkedin-link",
      },
      {
        name: "youtube",
        imgSrc: "images/footer/btn_youtube01.svg",
        linkSrc: "social-media-youtube-link",
      },
      {
        name: "weibo",
        imgSrc: "images/footer/btn_weibo01.svg",
        linkSrc: "social-media-weibo-link",
      },
    ],
  },

  newslatter: {
    title: "Get News, Offers & Tips",
    subtitle:
      "Subscribe to our newsletter to receive special offers, creative content, and productivity tips!",
  },

  info: {
    normal: [
      {
        id: "kdan",
        title: "Kdan Mobile",
        items: [
          {
            text: "About Us",
            hrefs: {
              [EN]: `${KDAN_WEBSITE}/about`,
              [JA]: `${KDAN_WEBSITE}/ja/about`,
              [ZH_TW]: `${KDAN_WEBSITE}/zh-tw/about`,
              [ZH_CN]: `${KDAN_WEBSITE}/zh-cn/about`,
              [KO]: `${KDAN_WEBSITE}/ko/about`,
              [ES]: `${KDAN_WEBSITE}/es/about`,
            },
          },
          {
            text: "Leadership",
            hrefs: {
              [EN]: `${KDAN_WEBSITE}/leadership`,
              [JA]: `${KDAN_WEBSITE}/ja/leadership`,
              [ZH_TW]: `${KDAN_WEBSITE}/zh-tw/leadership`,
              [ZH_CN]: `${KDAN_WEBSITE}/zh-cn/leadership`,
              [KO]: `${KDAN_WEBSITE}/ko/leadership`,
              [ES]: `${KDAN_WEBSITE}/es/leadership`,
            },
          },
          {
            text: "Career",
            hrefs: {
              [EN]: `${KDAN_WEBSITE}/career`,
              [JA]: `${KDAN_WEBSITE}/ja/career`,
              [ZH_TW]: `${KDAN_WEBSITE}/zh-tw/career`,
              [ZH_CN]: `${KDAN_WEBSITE}/zh-cn/career`,
              [KO]: `${KDAN_WEBSITE}/ko/career`,
              [ES]: `${KDAN_WEBSITE}/es/career`,
            },
          },
          {
            text: "Contact Us",
            hrefs: {
              [EN]: `${KDAN_WEBSITE}/contact`,
              [JA]: `${KDAN_WEBSITE}/ja/contact`,
              [ZH_TW]: `${KDAN_WEBSITE}/zh-tw/contact`,
              [ZH_CN]: `${KDAN_WEBSITE}/zh-cn/contact`,
              [KO]: `${KDAN_WEBSITE}/ko/contact`,
              [ES]: `${KDAN_WEBSITE}/es/contact`,
            },
          },
          {
            text: "Press Center",
            hrefs: {
              [EN]: `${KDAN_WEBSITE}/press`,
              [JA]: `${KDAN_WEBSITE}/ja/press`,
              [ZH_TW]: `${KDAN_WEBSITE}/zh-tw/press`,
              [ZH_CN]: `${KDAN_WEBSITE}/zh-cn/press`,
              [KO]: `${KDAN_WEBSITE}/ko/press`,
              [ES]: `${KDAN_WEBSITE}/es/press`,
            },
          },
          {
            text: "gdpr-page",
            hrefs: {
              [EN]: `${KDAN_WEBSITE}/trust/gdpr`,
              [JA]: `${KDAN_WEBSITE}/ja/trust/gdpr`,
              [ZH_TW]: `${KDAN_WEBSITE}/zh-tw/trust/gdpr`,
              [ZH_CN]: `${KDAN_WEBSITE}/zh-cn/trust/gdpr`,
              [KO]: `${KDAN_WEBSITE}/ko/trust/gdpr`,
              [ES]: `${KDAN_WEBSITE}/es/trust/gdpr`,
            },
          },
        ],
      },
      {
        id: "creativity",
        title: "Creativity",
        items: [
          {
            text: "Animation Desk",
            hrefs: {
              [EN]: `${KDAN_WEBSITE}/animation-desk`,
              [JA]: `${KDAN_WEBSITE}/ja/animation-desk`,
              [ZH_TW]: `${KDAN_WEBSITE}/zh-tw/animation-desk`,
              [ZH_CN]: `${KDAN_WEBSITE}/zh-cn/animation-desk`,
              [KO]: `${KDAN_WEBSITE}/ko/animation-desk`,
              [ES]: `${KDAN_WEBSITE}/es/animation-desk`,
            },
          },
          {
            text: "Markup",
            hrefs: {
              [EN]: MARK_UP,
              [JA]: `${MARK_UP}/ja`,
              [ZH_TW]: `${MARK_UP}/zh-tw`,
              [ZH_CN]: `${MARK_UP}/zh-cn`,
              [KO]: `${MARK_UP}/ko`,
              [ES]: `${MARK_UP}/es`,
            },
            rel: "noreferrer noopener",
          },
          {
            text: "NoteLedge",
            hrefs: {
              [EN]: `${KDAN_WEBSITE}/noteledge`,
              [JA]: `${KDAN_WEBSITE}/ja/noteledge`,
              [ZH_TW]: `${KDAN_WEBSITE}/zh-tw/noteledge`,
              [ZH_CN]: `${KDAN_WEBSITE}/zh-cn/noteledge`,
              [KO]: `${KDAN_WEBSITE}/ko/noteledge`,
              [ES]: `${KDAN_WEBSITE}/es/noteledge`,
            },
          },
          {
            text: "Write-on Video",
            hrefs: {
              [EN]: `${KDAN_WEBSITE}/write-on-video`,
              [JA]: `${KDAN_WEBSITE}/ja/write-on-video`,
              [ZH_TW]: `${KDAN_WEBSITE}/zh-tw/write-on-video`,
              [ZH_CN]: `${KDAN_WEBSITE}/zh-cn/write-on-video`,
              [KO]: `${KDAN_WEBSITE}/ko/write-on-video`,
              [ES]: `${KDAN_WEBSITE}/es/write-on-video`,
            },
          },
          {
            text: "Inspod",
            hrefs: {
              [EN]: INSPOD,
              [JA]: `${INSPOD}/ja`,
              [ZH_TW]: `${INSPOD}/zh-tw`,
              [ZH_CN]: `${INSPOD}/zh-cn`,
              [KO]: `${INSPOD}/ko`,
              [ES]: `${INSPOD}/es`,
            },
            rel: "noreferrer noopener",
          },
          {
            text: "AniZone",
            hrefs: {
              [EN]: ANIZONE,
              [JA]: `${ANIZONE}/ja`,
              [ZH_TW]: `${ANIZONE}/zh-tw`,
              [ZH_CN]: `${ANIZONE}/zh-cn`,
              [KO]: `${ANIZONE}/ko`,
              [ES]: `${ANIZONE}/es`,
            },
            rel: "noreferrer noopener",
          },
        ],
      },
      {
        id: "document",
        title: "Document",
        items: [
          {
            text: "PDF Reader",
            hrefs: {
              [EN]: `${KDAN_WEBSITE}/pdf-reader`,
              [JA]: `${KDAN_WEBSITE}/ja/pdf-reader`,
              [ZH_TW]: `${KDAN_WEBSITE}/zh-tw/pdf-reader`,
              [ZH_CN]: `${KDAN_WEBSITE}/zh-cn/pdf-reader`,
              [KO]: `${KDAN_WEBSITE}/ko/pdf-reader`,
              [ES]: `${KDAN_WEBSITE}/es/pdf-reader`,
            },
          },
          {
            text: "Kdan Office",
            hrefs: {
              [EN]: `${KDAN_WEBSITE}/kdan-office`,
              [JA]: `${KDAN_WEBSITE}/ja/kdan-office`,
              [ZH_TW]: `${KDAN_WEBSITE}/zh-tw/kdan-office`,
              [ZH_CN]: `${KDAN_WEBSITE}/zh-cn/kdan-office`,
              [KO]: `${KDAN_WEBSITE}/ko/kdan-office`,
              [ES]: `${KDAN_WEBSITE}/es/kdan-office`,
            },
          },
          {
            text: "Pocket Scanner",
            hrefs: {
              [EN]: `${KDAN_WEBSITE}/pocket-scanner`,
              [JA]: `${KDAN_WEBSITE}/ja/pocket-scanner`,
              [ZH_TW]: `${KDAN_WEBSITE}/zh-tw/pocket-scanner`,
              [ZH_CN]: `${KDAN_WEBSITE}/zh-cn/pocket-scanner`,
              [KO]: `${KDAN_WEBSITE}/ko/pocket-scanner`,
              [ES]: `${KDAN_WEBSITE}/es/pocket-scanner`,
            },
          },
          {
            text: "title-sdk",
            hrefs: {
              [EN]: `${KDAN_WEBSITE}/pdf-sdk`,
              [JA]: `${KDAN_WEBSITE}/ja/pdf-sdk`,
              [ZH_TW]: `${KDAN_WEBSITE}/zh-tw/pdf-sdk`,
              [ZH_CN]: `${KDAN_WEBSITE}/zh-cn/pdf-sdk`,
              [KO]: `${KDAN_WEBSITE}/ko/pdf-sdk`,
              [ES]: `${KDAN_WEBSITE}/es/pdf-sdk`,
            },
          },
          {
            text: "PDF Converter SDK",
            hrefs: {
              [EN]: `${KDAN_WEBSITE}/pdf-converter-sdk`,
              [JA]: `${KDAN_WEBSITE}/ja/pdf-converter-sdk`,
              [ZH_TW]: `${KDAN_WEBSITE}/zh-tw/pdf-converter-sdk`,
              [ZH_CN]: `${KDAN_WEBSITE}/zh-cn/pdf-converter-sdk`,
              [KO]: `${KDAN_WEBSITE}/ko/pdf-converter-sdk`,
              [ES]: `${KDAN_WEBSITE}/es/pdf-converter-sdk`,
            },
          },
          {
            text: "PDF Templates",
            hrefs: {
              [EN]: `${KDAN_WEBSITE}/pdf-templates`,
              [JA]: `${KDAN_WEBSITE}/ja/pdf-templates`,
              [ZH_TW]: `${KDAN_WEBSITE}/zh-tw/pdf-templates`,
              [ZH_CN]: `${KDAN_WEBSITE}/zh-cn/pdf-templates`,
              [KO]: `${KDAN_WEBSITE}/ko/pdf-templates`,
              [ES]: `${KDAN_WEBSITE}/es/pdf-templates`,
            },
            isTemplate: true,
            id: "BtnClick_Explore_PDFtemplates",
          },
        ],
      },
      {
        id: "business",
        title: "Business",
        items: [
          {
            text: "DottedSign",
            hrefs: {
              [EN]: DOTTEDSIGN,
              [JA]: `${DOTTEDSIGN}/ja`,
              [ZH_TW]: `${DOTTEDSIGN}/zh-tw`,
              [ZH_CN]: `${DOTTEDSIGN}/zh-cn`,
              [KO]: `${DOTTEDSIGN}/ko`,
              [ES]: `${DOTTEDSIGN}/es`,
            },
            rel: "noreferrer noopener",
          },
          {
            text: "DottedSignAPI",
            hrefs: {
              [EN]: `${KDAN_WEBSITE}/esignature-api`,
              [JA]: `${KDAN_WEBSITE}/ja/esignature-api`,
              [ZH_TW]: `${KDAN_WEBSITE}/zh-tw/esignature-api`,
              [ZH_CN]: `${KDAN_WEBSITE}/zh-cn/esignature-api`,
              [KO]: `${KDAN_WEBSITE}/ko/esignature-api`,
              [ES]: `${KDAN_WEBSITE}/es/esignature-api`,
            },
          },
        ],
      },
      {
        id: "solutions",
        title: "Solutions",
        items: [
          {
            text: "bus-1-title",
            hrefs: {
              [EN]: `${KDAN_WEBSITE}/esign-digital-transformation`,
              [JA]: `${KDAN_WEBSITE}/ja/esign-digital-transformation`,
              [ZH_TW]: `${KDAN_WEBSITE}/zh-tw/esign-digital-transformation`,
              [ZH_CN]: `${KDAN_WEBSITE}/zh-cn/esign-digital-transformation`,
              [KO]: `${KDAN_WEBSITE}/ko/esign-digital-transformation`,
              [ES]: `${KDAN_WEBSITE}/es/esign-digital-transformation`,
            },
          },
          {
            text: "bus-4-title",
            hrefs: {
              [EN]: `${ADNEX}/en`,
              [ZH_TW]: `${ADNEX}/zh-tw`,
            },
          },
          {
            text: "bus-3-title",
            hrefs: {
              [EN]: `${KDAN_WEBSITE}/document-ai-solution`,
              [JA]: `${KDAN_WEBSITE}/ja/document-ai-solution`,
              [ZH_TW]: `${KDAN_WEBSITE}/zh-tw/document-ai-solution`,
              [ZH_CN]: `${KDAN_WEBSITE}/zh-cn/document-ai-solution`,
              [KO]: `${KDAN_WEBSITE}/ko/document-ai-solution`,
              [ES]: `${KDAN_WEBSITE}/es/document-ai-solution`,
            },
          },
          {
            text: "bus-2-title",
            hrefs: {
              [EN]: `${KDAN_WEBSITE}/creative-solution`,
              [JA]: `${KDAN_WEBSITE}/ja/creative-solution`,
              [ZH_TW]: `${KDAN_WEBSITE}/zh-tw/creative-solution`,
              [ZH_CN]: `${KDAN_WEBSITE}/zh-cn/creative-solution`,
              [KO]: `${KDAN_WEBSITE}/ko/creative-solution`,
              [ES]: `${KDAN_WEBSITE}/es/creative-solution`,
            },
          },
        ],
      },
      {
        id: "resources",
        title: "Resources",
        items: [
          {
            text: "Kdan Blog",
            hrefs: {
              [EN]: `${KDAN_WEBSITE}/blog`,
            },
            rel: "noreferrer noopener",
          },
          {
            text: "Kdan Cloud",
            hrefs: {
              [EN]: KDAN_CLOUD,
              [JA]: `${KDAN_CLOUD}/ja`,
              [ZH_TW]: `${KDAN_CLOUD}/zh-tw`,
              [ZH_CN]: `${KDAN_CLOUD}/zh-cn`,
            },
            isExternal: true,
            rel: "noreferrer noopener",
          },
          {
            text: "FAQ",
            hrefs: {
              [EN]: `${SUPPORT_CENTER}/en-us`,
              [JA]: `${SUPPORT_CENTER}/ja`,
              [ZH_TW]: `${SUPPORT_CENTER}/zh-tw`,
              [ZH_CN]: `${SUPPORT_CENTER}/zh-cn`,
            },
            rel: "noreferrer noopener",
          },
          {
            text: "All Products & Services",
            hrefs: {
              [EN]: `${KDAN_WEBSITE}/products`,
              [JA]: `${KDAN_WEBSITE}/ja/products`,
              [ZH_TW]: `${KDAN_WEBSITE}/zh-tw/products`,
              [ZH_CN]: `${KDAN_WEBSITE}/zh-cn/products`,
              [KO]: `${KDAN_WEBSITE}/ko/products`,
              [ES]: `${KDAN_WEBSITE}/es/products`,
            },
          },
          {
            text: "All Plans & Pricing",
            hrefs: {
              [EN]: CREATIVE_STORE,
              [JA]: `${CREATIVE_STORE}/ja`,
              [ZH_TW]: `${CREATIVE_STORE}/zh-tw`,
              [ZH_CN]: `${CREATIVE_STORE}/zh-cn`,
              [KO]: `${CREATIVE_STORE}/ko`,
              [ES]: `${CREATIVE_STORE}/es`,
            },
            rel: "noreferrer noopener",
          },
        ],
      },
    ],
  },
};

export default data;

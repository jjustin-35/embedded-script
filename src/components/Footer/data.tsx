import config from "../../config";

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
  href: string;
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
  CREATIVE_STORE_CN,
  DOTTEDSIGN,
  DOTTEDSIGN_CN,
  KDAN_CLOUD,
  KDAN_CLOUD_CN,
  MARK_UP,
  ANIZONE,
  ANIZONE_CN,
  INSPOD,
  ADNEX,
  SUPPORT_CENTER,
} = config;

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
            href: `${KDAN_WEBSITE}/aboutus`,
          },
          {
            text: "Leadership",
            href: `${KDAN_WEBSITE}/leadership`,
          },
          {
            text: "Career",
            href: `${KDAN_WEBSITE}/career`,
          },
          {
            text: "Contact Us",
            href: `${KDAN_WEBSITE}/contact`,
          },
          {
            text: "Press Center",
            href: `${KDAN_WEBSITE}/press`,
          },
          {
            text: "gdpr-page",
            href: `${KDAN_WEBSITE}/trust/gdpr`,
          },
        ],
      },
      {
        id: "creativity",
        title: "Creativity",
        items: [
          {
            text: "Animation Desk",
            href: `${KDAN_WEBSITE}/animation-desk`,
          },
          {
            text: "Markup",
            href: "markups-link",
            isExternal: true,
            rel: "noreferrer noopener",
            localeParam: {
              MARK_UP,
            },
          },
          {
            text: "NoteLedge",
            href: `${KDAN_WEBSITE}/noteledge`,
          },
          {
            text: "Write-on Video",
            href: `${KDAN_WEBSITE}/writeon-video`,
          },
          {
            text: "Inspod",
            href: INSPOD,
            isExternal: true,
            rel: "noreferrer noopener",
            localeParam: {
              INSPOD,
            },
          },
          {
            text: "AniZone",
            href: ANIZONE,
            isExternal: true,
            rel: "noreferrer noopener",
            localeParam: {
              ANIZONE,
              ANIZONE_CN,
            },
          },
        ],
      },
      {
        id: "document",
        title: "Document",
        items: [
          {
            text: "PDF Reader",
            href: `${KDAN_WEBSITE}/pdf-reader`,
          },
          {
            text: "Kdan Office",
            href: `${KDAN_WEBSITE}/kdan-office`,
          },
          {
            text: "Pocket Scanner",
            href: `${KDAN_WEBSITE}/pocket-scanner`,
          },
          {
            text: "title-sdk",
            href: `${KDAN_WEBSITE}/pdf-sdk`,
          },
          {
            text: "PDF Converter SDK",
            href: `${KDAN_WEBSITE}/pdf-converter-sdk`,
          },
          {
            text: "PDF Templates",
            href: `${KDAN_WEBSITE}/pdf-templates`,
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
            href: DOTTEDSIGN,
            isExternal: true,
            rel: "noreferrer noopener",
            localeParam: {
              DOTTEDSIGN,
              DOTTEDSIGN_CN,
            },
          },
          {
            text: "DottedSignAPI",
            href: `${KDAN_WEBSITE}/esignature-api`,
          },
        ],
      },
      {
        id: "solutions",
        title: "Solutions",
        items: [
          {
            text: "bus-1-title",
            href: `${KDAN_WEBSITE}/esign-digital-transformation`,
          },
          {
            text: "bus-4-title",
            href: "adnex-link",
            isExternal: true,
            localeParam: {
              ADNEX,
            },
          },
          {
            text: "bus-3-title",
            href: `${KDAN_WEBSITE}/document-ai-solution`,
          },
          {
            text: "bus-2-title",
            href: `${KDAN_WEBSITE}/creative-solution`,
          },
        ],
      },
      {
        id: "resources",
        title: "Resources",
        items: [
          {
            text: "Kdan Blog",
            href: "",
            isExternal: true,
            rel: "noreferrer noopener",
          },
          {
            text: "Kdan Cloud",
            href: KDAN_CLOUD,
            isExternal: true,
            rel: "noreferrer noopener",
            localeParam: {
              KDAN_CLOUD,
              KDAN_CLOUD_CN,
            },
          },
          {
            text: "FAQ",
            href: SUPPORT_CENTER,
            isExternal: true,
            rel: "noreferrer noopener",
          },
          {
            text: "All Products & Services",
            href: `${KDAN_WEBSITE}/products`,
          },
          {
            text: "All Plans & Pricing",
            href: CREATIVE_STORE,
            isExternal: true,
            rel: "noreferrer noopener",
            localeParam: {
              CREATIVE_STORE,
              CREATIVE_STORE_CN,
            },
          },
        ],
      },
    ],
  },
};

export default data;

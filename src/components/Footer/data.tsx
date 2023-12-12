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
  "pdf-reader": InfoMenuType[];
  "pdf-reader-other": InfoMenuType[];
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
} = config;

const data: DataType = {
  socialMedia: {
    title: "Connect with Kdan Mobile",
    subtitle: "Follow us to receive all latest updates and promotions.",
    media: [
      {
        name: "facebook",
        imgSrc: "/images/footer/btn_fb01.svg",
        linkSrc: "social-media-facebook-link",
      },
      {
        name: "twitter",
        imgSrc: "/images/footer/btn_twitter01.svg",
        linkSrc: "social-media-twitter-link",
      },
      {
        name: "linkedin",
        imgSrc: "/images/footer/btn_in01.svg",
        linkSrc: "social-media-linkedin-link",
      },
      {
        name: "youtube",
        imgSrc: "/images/footer/btn_youtube01.svg",
        linkSrc: "social-media-youtube-link",
      },
      {
        name: "weibo",
        imgSrc: "/images/footer/btn_weibo01.svg",
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
            href: "/animation-desk",
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
            href: "/noteledge",
          },
          {
            text: "Write-on Video",
            href: "/writeon-video",
          },
          {
            text: "Inspod",
            href: "inspod-link",
            isExternal: true,
            rel: "noreferrer noopener",
            localeParam: {
              INSPOD,
            },
          },
          {
            text: "AniZone",
            href: "community-anizone-link",
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
            href: "/pdf-reader",
          },
          {
            text: "Kdan Office",
            href: "/kdan-office",
          },
          {
            text: "Pocket Scanner",
            href: "/pocket-scanner",
          },
          {
            text: "title-sdk",
            href: "/pdf-sdk",
          },
          {
            text: "PDF Converter SDK",
            href: "/pdf-converter-sdk",
          },
          {
            text: "PDF Templates",
            href: "/pdf-templates",
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
            href: "dottedsign-link",
            isExternal: true,
            rel: "noreferrer noopener",
            localeParam: {
              DOTTEDSIGN,
              DOTTEDSIGN_CN,
            },
          },
          {
            text: "DottedSignAPI",
            href: "/esignature-api",
          },
        ],
      },
      {
        id: "solutions",
        title: "Solutions",
        items: [
          {
            text: "bus-1-title",
            href: "/esign-digital-transformation",
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
            href: "/document-ai-solution",
          },
          {
            text: "bus-2-title",
            href: "/creative-solution",
          },
        ],
      },
      {
        id: "resources",
        title: "Resources",
        items: [
          {
            text: "Kdan Blog",
            href: "blog-link",
            isExternal: true,
            rel: "noreferrer noopener",
          },
          {
            text: "Kdan Cloud",
            href: "kdan-cloud-link",
            isExternal: true,
            rel: "noreferrer noopener",
            localeParam: {
              KDAN_CLOUD,
              KDAN_CLOUD_CN,
            },
          },
          {
            text: "FAQ",
            href: "support-link",
            isExternal: true,
            rel: "noreferrer noopener",
          },
          {
            text: "All Products & Services",
            href: "/products",
          },
          {
            text: "All Plans & Pricing",
            href: "creativestore-link",
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
    "pdf-reader": [
      {
        id: "pdf-reader",
        title: "PDF Reader",
        items: [
          {
            text: "title-desktop",
            href: "/pdf-reader",
          },
          {
            text: "title-mobile",
            href: "/pdf-reader-app",
          },
          {
            text: "Document 365",
            href: "pdf-document365-individual-link",
            isExternal: true,
            rel: "noreferrer noopener",
            localeParam: {
              CREATIVE_STORE,
              CREATIVE_STORE_CN,
            },
          },
          {
            text: "PDF Education",
            href: "/pdf-reader/education",
          },
          {
            text: "title-sdk",
            href: "/pdf-sdk",
          },
          {
            text: "PDF Converter SDK",
            href: "/pdf-converter-sdk",
          },
          {
            text: "PDF Templates",
            href: "/pdf-templates",
            isTemplate: true,
            id: "BtnClick_Explore_PDFtemplates",
          },
        ],
      },
      {
        id: "sign-and-secure",
        title: "Sign & Secure",
        items: [
          {
            text: "Sign PDF",
            href: "/pdf-reader/sign-pdf",
          },
          {
            text: "Assign Signers",
            href: "dottedsign-product-tour-link",
            isExternal: true,
            rel: "noreferrer noopener",
            localeParam: {
              DOTTEDSIGN,
              DOTTEDSIGN_CN,
            },
          },
          {
            text: "Encrypt PDF",
            href: "/pdf-reader/how-to-encrypt-a-pdf",
          },
          {
            text: "Unlock PDF",
            href: "/pdf-reader/unlock-pdf",
          },
        ],
      },
      {
        id: "edit-and-convert",
        title: "Edit & Convert",
        items: [
          {
            text: "Edit PDF",
            href: "/pdf-reader/edit-pdf",
          },
          {
            text: "Convert to PDF",
            href: "/pdf-reader/convert-to-pdf",
          },
          {
            text: "Merge PDFs",
            href: "/pdf-reader/merge-pdf",
          },
          {
            text: "Split PDF",
            href: "/pdf-reader/split-pdf",
          },
          {
            text: "Compress PDF",
            href: "/pdf-reader/compress-pdf",
          },
          {
            text: "Image to PDF",
            href: "/pdf-reader/convert-image-to-pdf",
          },
        ],
      },
      {
        id: "view-and-annotate",
        title: "View & Annotate",
        items: [
          {
            text: "Annotate PDF",
            href: "/pdf-reader/annotate-pdf",
          },
          {
            text: "Highlight PDF",
            href: "/pdf-reader/highlight-pdf",
          },
          {
            text: "Write on PDF",
            href: "/pdf-reader/write-on-pdf",
          },
          {
            text: "Fill in PDF",
            href: "/pdf-reader/fill-in-pdf",
          },
          {
            text: "Search PDF",
            href: "/pdf-reader/search-pdf",
          },
          {
            text: "Slideshow Mode",
            href: "/pdf-reader/pdf-slideshow",
          },
        ],
      },
      {
        id: "manage-files-and-pages",
        title: "Manage Files & Pages",
        items: [
          {
            text: "Rotate PDF",
            href: "/pdf-reader/rotate-pdf",
          },
          {
            text: "Rearrange PDF",
            href: "/pdf-reader/rearrange-pdf-pages",
          },
          {
            text: "Add Pages to PDF",
            href: "/pdf-reader/add-pages-to-pdf",
          },
          {
            text: "Delete PDF Pages",
            href: "/pdf-reader/delete-pages-from-pdf",
          },
          {
            text: "Add Image to PDF",
            href: "/pdf-reader/add-image-to-pdf",
          },
          {
            text: "Add hyperlink to PDF",
            href: "/pdf-reader/add-hyperlink-to-pdf",
          },
          {
            text: "Create PDF",
            href: "/pdf-reader/create-pdf",
          },
        ],
      },
      {
        id: "license",
        title: "License",
        items: [
          {
            text: "Buy Software",
            href: "/pdf-reader/license",
          },
          {
            text: "License Retrieval",
            href: "/pdf-reader/retrieve-license",
          },
        ],
      },
      {
        id: "kdan",
        title: "Kdan Mobile",
        items: [
          {
            text: "About Us",
            href: "/aboutus",
          },
          {
            text: "Blog",
            href: "blog-link",
            isExternal: true,
            rel: "noreferrer noopener",
          },
          {
            text: "Press Center",
            href: "/press",
          },
          {
            text: "gdpr-page",
            href: "/trust/gdpr",
          },
          {
            text: "Kdan Cloud",
            href: "kdan-cloud-link",
            isExternal: true,
            rel: "noreferrer noopener",
            localeParam: {
              KDAN_CLOUD,
              KDAN_CLOUD_CN,
            },
          },
          {
            text: "Creative Store",
            href: "creativestore-link",
            isExternal: true,
            rel: "noreferrer noopener",
            localeParam: {
              CREATIVE_STORE,
              CREATIVE_STORE_CN,
            },
          },
          {
            text: "Contact Us",
            href: "/contact",
          },
          {
            text: "FAQ",
            href: "support-link",
            isExternal: true,
            rel: "noreferrer noopener",
          },
        ],
      },
    ],
    "pdf-reader-other": [
      {
        id: "pdf-reader",
        title: "PDF Reader",
        items: [
          {
            text: "title-desktop",
            href: "/pdf-reader",
          },
          {
            text: "title-mobile",
            href: "/pdf-reader-app",
          },
          {
            text: "PDF Education",
            href: "/pdf-reader/education",
          },
          {
            text: "PDF Templates",
            href: "/pdf-templates",
            isTemplate: true,
            id: "BtnClick_Explore_PDFtemplates",
          },
        ],
      },
      {
        id: "document-365",
        title: "Document 365",
        items: [
          {
            text: "Individual",
            href: "pdf-document365-individual-link",
            isExternal: true,
            rel: "noreferrer noopener",
            localeParam: {
              CREATIVE_STORE,
              CREATIVE_STORE_CN,
            },
          },
          {
            text: "Business",
            href: "pdf-document365-business-link",
            isExternal: true,
            rel: "noreferrer noopener",
            localeParam: {
              CREATIVE_STORE,
              CREATIVE_STORE_CN,
            },
          },
          {
            text: "title-sdk",
            href: "/pdf-sdk",
          },
          {
            text: "PDF Converter SDK",
            href: "/pdf-converter-sdk",
          },
        ],
      },
      {
        id: "how-to",
        title: "subMenu-how-to",
        items: [
          {
            text: "Sign PDF",
            href: "/pdf-reader/sign-pdf",
          },
          {
            text: "Merge PDFs",
            href: "/pdf-reader/merge-pdf",
          },
          {
            text: "Edit PDF",
            href: "/pdf-reader/edit-pdf",
          },
          {
            text: "Encrypt PDF",
            href: "/pdf-reader/how-to-encrypt-a-pdf",
          },
          {
            text: "Convert to PDF",
            href: "/pdf-reader/convert-to-pdf",
          },
          {
            text: "Split PDF",
            href: "/pdf-reader/split-pdf",
          },
        ],
      },
      {
        id: "license",
        title: "License",
        items: [
          {
            text: "Buy Software",
            href: "/pdf-reader/license",
          },
          {
            text: "License Retrieval",
            href: "/pdf-reader/retrieve-license",
          },
          {
            text: "Dealer",
            href: "dealer-link",
            isExternal: true,
            target: "_blank",
            rel: "noreferrer noopener",
          },
        ],
      },
      {
        id: "kdan",
        title: "Kdan Mobile",
        items: [
          {
            text: "About Us",
            href: "/aboutus",
          },
          {
            text: "Blog",
            href: "blog-link",
            isExternal: true,
            rel: "noreferrer noopener",
          },
          {
            text: "Press Center",
            href: "/press",
          },
          {
            text: "Kdan Cloud",
            href: "kdan-cloud-link",
            isExternal: true,
            rel: "noreferrer noopener",
            localeParam: {
              KDAN_CLOUD,
              KDAN_CLOUD_CN,
            },
          },
          {
            text: "Creative Store",
            href: "creativestore-link",
            isExternal: true,
            rel: "noreferrer noopener",
            localeParam: {
              CREATIVE_STORE,
              CREATIVE_STORE_CN,
            },
          },
          {
            text: "Contact Us",
            href: "/contact",
          },
          {
            text: "FAQ",
            href: "support-link",
            isExternal: true,
            rel: "noreferrer noopener",
          },
        ],
      },
    ],
  },
};

export default data;

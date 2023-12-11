import configs from '../../config';
import { ImageType } from '../../constants/types';
import { ButtonComponentType } from '../../components/Button';

const { CREATIVE_STORE, DOTTEDSIGN, KDAN_CLOUD, MARK_UP, INSPOD, ADNEX } = configs;

type LinkType = {
  href: string;
  isExternal?: boolean;
  target?: string;
  localeParam?: Record<string, string>;
};
export type ColumnItemType = {
  title?: string;
  desc?: string;
  link?: LinkType;
  key?: string;
};

export type BottomItemType = {
  color: string;
  variant: 'contained' | 'outlined' | 'text';
  href: string;
  isExternal?: boolean;
  target?: string;
  isAnchor: boolean;
  text: string;
  key: string;
};

export type ColumnType = {
  title?: string;
  key: string;
  items: ColumnItemType[];
};

export type MenuType = {
  text: string;
  key: string;
  images: ImageType;
  cols: ColumnType[];
  btm?: BottomItemType[];
};

export type BtnsType = 'default' | 'eSign' | 'creative' | 'eSign-api' | 'documentAI' | 'contactSales';

export type DataType = {
  logo: ImageType;
  menus: MenuType[];
  btns: Record<BtnsType, ButtonComponentType & LinkType>;
};

const data: DataType = {
  logo: {
    src: '../images//company/img-logomark.svg',
    alt: 'kdan-mobile-logo',
  },

  menus: [
    {
      text: 'Products',
      key: 'nav-products',
      images: {
        src: '../images//menu/icon-products.svg',
        alt: 'ic-products',
      },
      cols: [
        {
          title: 'PRODUCTS',
          key: 'products',
          items: [
            {
              title: 'Animation Desk',
              desc: 'ad-desc',
              link: {
                href: '/animation-desk',
              },
            },
            {
              title: 'Write-on Video',
              desc: 'wo-desc',
              link: {
                href: '/writeon-video',
              },
            },
            {
              title: 'NoteLedge',
              desc: 'nl-desc',
              link: {
                href: '/noteledge',
              },
            },
            {
              title: 'Markup',
              desc: 'mkup-desc',
              link: {
                href: MARK_UP,
                isExternal: true,
                target: '_self',
              },
            },
            {
              title: 'PDF Reader',
              desc: 'pdf-desc',
              link: {
                href: '/pdf-reader',
              },
            },
            {
              title: 'Kdan Office',
              desc: 'kdan-office-desc',
              link: {
                href: '/kdan-office',
              },
            },
            {
              title: 'Pocket Scanner',
              desc: 'ps-desc',
              link: {
                href: '/pocket-scanner',
              },
            },
          ],
        },
        {
          title: 'SERVICES',
          key: 'services',
          items: [
            {
              title: 'DottedSign',
              desc: 'ds-desc',
              link: {
                href: DOTTEDSIGN,
                isExternal: true,
                target: '_self',
              },
            },
            {
              title: 'Kdan Cloud',
              desc: 'kc-desc',
              link: {
                href: KDAN_CLOUD,
                isExternal: true,
                target: '_self',
              },
            },
            {
              title: 'Inspod',
              desc: 'inspod-desc',
              link: {
                href: INSPOD,
                isExternal: true,
                target: '_self',
              },
            },
          ],
        },
      ],
      btm: [
        {
          color: 'brand',
          variant: 'text',
          href: '/products',
          isAnchor: true,
          text: 'all-products',
          key: 'all-products',
        },
        {
          color: 'brand',
          variant: 'text',
          href: CREATIVE_STORE,
          isExternal: true,
          target: '_self',
          isAnchor: true,
          text: 'all-plans',
          key: 'all-plans',
        },
      ],
    },
    {
      text: 'Solutions',
      key: 'nav-solutions',
      images: {
        src: '../images//menu/icon-solutions.svg',
        alt: 'ic-solutions',
      },
      cols: [
        {
          title: 'BUSINESS',
          key: 'business',
          items: [
            {
              title: 'bus-1-title',
              desc: 'bus-1-desc',
              link: {
                href: '/esign-digital-transformation',
              },
            },
            {
              title: 'bus-4-title',
              desc: 'bus-4-desc',
              key: 'adnex',
              link: {
                href: 'link:adnex-link',
                isExternal: true,
                target: '_self',
                localeParam: {
                  ADNEX,
                },
              },
            },
            {
              title: 'bus-3-title',
              desc: 'bus-3-desc',
              link: {
                href: '/document-ai-solution',
              },
            },
            {
              title: 'bus-2-title',
              desc: 'bus-2-desc',
              link: {
                href: '/creative-solution',
              },
            },
          ],
        },
        {
          title: 'DEVELOPERS',
          key: 'developers',
          items: [
            {
              title: 'dev-1-title',
              desc: 'dev-1-desc',
              link: {
                href: '/esignature-api',
              },
            },
            {
              title: 'dev-2-title',
              desc: 'dev-2-desc',
              link: {
                href: '/pdf-sdk',
              },
            },
            {
              title: 'dev-3-title',
              desc: 'dev-3-desc',
              link: {
                href: '/pdf-converter-sdk',
              },
            },
          ],
        },
      ],
    },
    {
      text: 'Company',
      key: 'nav-company',
      images: {
        src: '../images//menu/icon-company.svg',
        alt: 'ic-company',
      },
      cols: [
        {
          key: 'company',
          items: [
            {
              title: 'About Us',
              link: {
                href: '/aboutus',
              },
            },
            {
              title: 'Leadership',
              link: {
                href: '/leadership',
              },
            },
            {
              title: 'Blog',
              link: {
                href: 'link:blog-link',
                isExternal: true,
                target: '_self',
              },
            },
            {
              title: 'Career',
              link: {
                href: '/career',
              },
            },
            {
              title: 'Press Center',
              link: {
                href: '/press',
              },
            },
            {
              title: 'GDPR',
              link: {
                href: '/trust/gdpr',
              },
            },
          ],
        },
      ],
    },
    {
      text: 'Support',
      key: 'nav-support',
      images: {
        src: '../images//menu/icon-support.svg',
        alt: 'ic-support',
      },
      cols: [
        {
          key: 'support',
          items: [
            {
              title: 'Contact Us',
              link: {
                href: '/contact',
              },
            },
            {
              title: 'FAQ',
              link: {
                href: 'https://support.kdanmobile.com/hc',
                isExternal: true,
                target: '_self',
              },
            },
          ],
        },
      ],
    },
  ],
  btns: {
    default: {
      size: 'medium',
      href: '/products',
      btnTheme: 'default',
      text: 'free-btn',
      id: 'Explore_BtnClick_AllAppPage',
    },
    eSign: {
      size: 'medium',
      href: '/contact-sales-solutions?solution=esign',
      btnTheme: 'default',
      text: 'contact-sales-btn',
      id: 'Contact_BtnClick_Esign_Navi',
    },
    creative: {
      size: 'medium',
      href: '/contact-sales-solutions?solution=creative',
      btnTheme: 'default',
      text: 'contact-sales-btn',
      id: 'Contact_BtnClick_Creative_Navi',
    },
    'eSign-api': {
      size: 'medium',
      href: '/contact-sales-api',
      btnTheme: 'default',
      text: 'contact-sales-btn',
      id: 'Contact_BtnClick_EsignAPI_Navi',
    },
    documentAI: {
      size: 'medium',
      href: '/contact-sales-solutions?solution=documentAI',
      btnTheme: 'default',
      text: 'contact-sales-btn',
      id: 'Contact_BtnClick_DocumentAI_Navi',
    },
    contactSales: null,
  },
};

export default data;

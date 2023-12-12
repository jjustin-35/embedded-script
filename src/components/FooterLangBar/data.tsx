import config from "../../config";

const { KDAN_WEBSITE } = config;

export const footerLinks = [
  {
    text: 'terms-of-service',
    linkSrc: `${KDAN_WEBSITE}/terms_of_service`,
  },
  {
    text: 'privacy-policy',
    linkSrc: `${KDAN_WEBSITE}/privacy_policy`,
  },
  {
    text: 'security',
    linkSrc: `${KDAN_WEBSITE}/security`,
  },
  {
    key: 'cookie',
    text: 'cookie-settings',
  },
];

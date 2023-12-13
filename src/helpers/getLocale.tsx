import language from "../constants/language";
import { LangType } from "../constants/types";

const getLocale = () => {
  if (typeof window === 'undefined') return 'en';
  const pathname = window.location.pathname;
  const pathArray = pathname.split('/');
  const locale = pathArray.find((path) => Object.values(language).includes(path as LangType));
  return locale || 'en';
}

export default getLocale;
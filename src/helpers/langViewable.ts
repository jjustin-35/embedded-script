import { LangType } from '../constants/types';

const langViewable = (lang: LangType, viewableLangs: LangType[]) => {
  if (viewableLangs.includes(lang)) return true;
  return false;
};

export default langViewable;

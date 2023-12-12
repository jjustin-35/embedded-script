import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Select from '@kdanmobile/kdan-ui/dist/Select';

import { langLabels as labels, campaignLangLabels } from './data';

const langSelect = ({ isCampaign }) => {
  const langLabels = isCampaign ? campaignLangLabels : labels;

  const router = useRouter();

  const [activeLang, setLang] = useState('English');

  useEffect(() => {
    const activeItem = langLabels.filter((el) => el.key === router.locale);
    setLang(activeItem[0].value);
  }, []);

  const handleChange = (selected) => {
    window.location.href = `/${selected.key}${router.asPath}`;
  };

  return <Select defaultValue={activeLang} onChange={handleChange} options={langLabels} position="top" />;
};

export default langSelect;

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import getLocale from "../../helpers/getLocale";
import getPath from "../../helpers/getPath";
import Select, { OptionType } from "../../components/Select";

import { langLabels } from "./data";

const langSelect = () => {
  const [activeLang, setLang] = useState<OptionType>(langLabels[0]);
  const { t } = useTranslation(["common"]);
  const lang = getLocale();

  useEffect(() => {
    const activeItem = langLabels.find((el) => el.key === lang) || langLabels[0];
    setLang(activeItem);
  }, []);

  const handleChange = (item: OptionType) => {
    const path = getPath();
    window.location.href = `/${item.key}${path}`;
  };

  return (
    <Select
      activeOption={activeLang}
      onChange={handleChange}
      options={langLabels}
      t={t}
    />
  );
};

export default langSelect;

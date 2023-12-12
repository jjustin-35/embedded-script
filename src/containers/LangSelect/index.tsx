import { useState, useEffect } from "react";
import getLocale from "../../helpers/getLocale";
import Select from "@kdanmobile/kdan-ui/dist/Select";

import { langLabels } from "./data";

const langSelect = () => {
  const [activeLang, setLang] = useState("English");
  const lang = getLocale();

  useEffect(() => {
    const activeItem = langLabels.filter((el) => el.key === lang);
    setLang(activeItem[0].value);
  }, []);

  const handleChange = (selected: { value: string; key: string }) => {
    window.location.href = `/${selected.key}${router.asPath}`;
  };

  return (
    <Select
      defaultValue={activeLang}
      onChange={handleChange}
      options={langLabels}
      position="top"
    />
  );
};

export default langSelect;

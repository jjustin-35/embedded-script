import getLocale from "./getLocale";

const getPath = () => {
  if (typeof window === "undefined") {
    return "/";
  }

  const lang = getLocale();
  const pathname = window.location.pathname;
  const pathArr = pathname.split("/");
  const filteredPath = pathArr.filter(path => path !== lang);
  const path = filteredPath.join("/");

  return path;
};

export default getPath;

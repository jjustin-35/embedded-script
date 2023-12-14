import { ApiMethod } from "../constants/types";

const fetchApi = async (
  url: string,
  method: ApiMethod,
  body?: Record<string, unknown>,
  headers?: Record<string, string>
) => {
  if (method === "GET") {
    const query = Object.keys(body).reduce((acc, key) => {
      if (typeof body[key] !== "number" && !body[key]) return acc;
      return `${acc}&${key}=${body[key]}`;
    }, '');
    url = `${url}?${query}`;
  }

  const resp = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...(method !== "GET" && { body: JSON.stringify(body) }),
  });

  const data = resp.json();

  return data;
};

export default fetchApi;
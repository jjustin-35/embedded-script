import fetchApi from "../helpers/apiHelper";
import config from "../config";
import apiPath from "../constants/apiPath";

const sendKlaviyo = async (email: string) => {
  const name = email.split('@')[0];

  const url = `${config.MAIL_CENTER}${apiPath.klaviyo.register}`;
  const data = {
    list_id: 'MZHXja',
    account: 'kdan_default',
    profiles: [
      {
        source: 'kdan_website',
        email,
        $first_name: name,
        test_data: false,
      },
    ],
    subscribe_type: 'subscribe',
  };

  const result = await fetchApi(url, "POST", data);

  return result;
};

export default sendKlaviyo;
import { GetBaseURL } from "../utilities/getBaseURL";
import HttpRequest from "../utilities/httpRequest";
// const URL = process.env.NEXT_PUBLIC_URL
// const TOKEN = process.env.NEXT_PUBLIC_TOKEN
const httpRequest = new HttpRequest();
import cookie from "js-cookie";

export default class UseUserService {
  login = async (data) => {
    const { URL, TOKEN } = await GetBaseURL();
    // console.log({ URL, TOKEN });

    const user = await httpRequest.get(URL + `?sheet=users`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return user;
  };
}

import { BASE_URL } from "../utils/constants";

export default async function (skip = 0, limit = 20) {
  console.log(BASE_URL);
  let response = await fetch(BASE_URL + "?skip=" + skip + "&limit=" + limit);
  return await response.json();
}

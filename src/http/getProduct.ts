import { BASE_URL } from "../utils/constants";

export default async function (productId: number) {
  let response = await fetch(BASE_URL + "/" + productId);
  return await response.json();
}

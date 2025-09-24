import Cookies from "js-cookie";

export const getUserToken = (): string | undefined => {
  return Cookies.get("userToken");
};

export const setUserToken = (token: string): void => {
  Cookies.set("userToken", token, { expires: 3, secure: true });
};

export const removeUserToken = (): void => {
  Cookies.remove("userToken");
};

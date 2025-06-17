// services/jwtservice.ts
const accessToken = "accessToken" as string;

/**
 * @description get token from localStorage
 */
export const getToken = (): string | null => {
  return window.localStorage.getItem(accessToken);
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveToken = (token: string): void => {
  window.localStorage.setItem(accessToken, token);
};

/**
 * @description remove token from localStorage
 */
export const destroyToken = (): void => {
  window.localStorage.removeItem(accessToken);
};

export default { getToken, saveToken, destroyToken };

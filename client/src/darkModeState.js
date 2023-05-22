// darkModeState.js
import { atom } from 'recoil';

const getCookieValue = (name) => {
  const cookieValue = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${name}=`));

  if (cookieValue) {
    const [, value] = cookieValue.split("=");
    return value === "true";
  }

  return null;
};
export const darkModeState = atom({
  key: 'darkModeState',
  default: getCookieValue('darkMode'),
});

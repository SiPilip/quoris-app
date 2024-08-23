/* eslint-disable no-useless-escape */
export function regexText() {
  return /^[A-Za-z0-9\s\.,'-]*$/;
}
export function regexNumber() {
  return /^[0-9]+$/;
}
export function regexEmail() {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
}
export function regexURL() {
  return /^(?!:\/\/)([a-zA-Z0-9-_]{1,63}\.)+[a-zA-Z]{2,6}$/;
}
export function regexAddress() {
  return /^[A-Za-z0-9\s\.,':-]*$/;
}

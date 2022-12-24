const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const DOMAIN_REGEX =
  /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/;

export function nameVal(value) {
  if (!!value && value.length >= 5) {
    return true;
  } else return false;
}

export function phoneVal(value) {
  if (!!value && value.match(PHONE_REGEX)) {
    return true;
  } else return false;
}

export function emailVal(value) {
  if (!!value && value.match(EMAIL_REGEX)) {
    return true;
  } else return false;
}

export function domainVal(value) {
  if (!!value && value.match(DOMAIN_REGEX)) {
    return true;
  } else return false;
}

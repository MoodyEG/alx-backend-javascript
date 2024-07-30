export default function cleanSet(set, startString) {
  let str = '';
  let sep = '';
  if (startString === '') {
    return str;
  }
  for (const value of set) {
    if (value.startsWith(startString)) {
      str += sep + value.substring(startString.length);
      sep = '-';
    }
  }
  return str;
}

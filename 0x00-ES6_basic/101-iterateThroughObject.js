export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  let sep = '';
  for (const item of reportWithIterator) {
    str += sep + item;
    sep = ' | ';
  }

  return str;
}

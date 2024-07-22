export default function createIteratorObject(report) {
  const list = [];

  for (const department of Object.values(report.allEmployees)) {
    for (const employ of department) {
      list.push(employ);
    }
  }

  return list;
}

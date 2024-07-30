export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  weakMap.set(endpoint, weakMap.get(endpoint) === undefined ? 1 : weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    return weakMap.get(endpoint);
  }
}

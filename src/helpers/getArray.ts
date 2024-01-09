export function getArray<T>(elem: T, length: number): T[] {
  const arr: T[] = [];
  for (let i = 0; i < length; i++) {
    arr.push(elem);
  }
  return arr;
}

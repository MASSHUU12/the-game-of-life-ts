export function make2DArray(size: number): any[][] {
  let arr = new Array(size);

  for (let i = 0; i < size; i++) {
    arr[i] = new Array(size);
  }
  return arr;
}

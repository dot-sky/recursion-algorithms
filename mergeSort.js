function mergeSort(arr) {
  if (arr.length == 1) return arr;
  const left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  const right = mergeSort(arr.slice(Math.floor(arr.length / 2)));
  const merged = [];
  let i = 0;
  let j = 0;
  while (i < left.length || j < right.length) {
    if (left[i] < right[j] || j >= right.length) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }
  return merged;
}
console.log(mergeSort([2, 6, 4, 0, 3, 5, 7, 10, 8, 9]));

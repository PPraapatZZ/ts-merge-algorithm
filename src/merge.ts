export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  if (collection_1.length === 0 && collection_2.length === 0 && collection_3.length === 0) {
    return [];
  }

  const result: number[] = [];
  let i = 0;
  let j = 0;
  let k = collection_3.length - 1;
  while (i < collection_1.length && j < collection_2.length && k >= 0) {
    const val1 = collection_1[i];
    const val2 = collection_2[j];
    const val3 = collection_3[k];

    if (val1 <= val2 && val1 <= val3) {
      result.push(val1);
      i++;
    } else if (val2 <= val1 && val2 <= val3) {
      result.push(val2);
      j++;
    } else {
      result.push(val3);
      k--;
    }
  }

  // Merge remaining elements from collection_1 and collection_2
  while (i < collection_1.length && j < collection_2.length) {
    if (collection_1[i] <= collection_2[j]) {
      result.push(collection_1[i]);
      i++;
    } else {
      result.push(collection_2[j]);
      j++;
    }
  }

  // Merge remaining elements from collection_1 and collection_3
  while (i < collection_1.length && k >= 0) {
    if (collection_1[i] <= collection_3[k]) {
      result.push(collection_1[i]);
      i++;
    } else {
      result.push(collection_3[k]);
      k--;
    }
  }

  // Merge remaining elements from collection_2 and collection_3
  while (j < collection_2.length && k >= 0) {
    if (collection_2[j] <= collection_3[k]) {
      result.push(collection_2[j]);
      j++;
    } else {
      result.push(collection_3[k]);
      k--;
    }
  }

  // Add any remaining elements from collection_1
  while (i < collection_1.length) {
    result.push(collection_1[i]);
    i++;
  }

  // Add any remaining elements from collection_2
  while (j < collection_2.length) {
    result.push(collection_2[j]);
    j++;
  }

  // Add any remaining elements from collection_3
  while (k >= 0) {
    result.push(collection_3[k]);
    k--;
  }

  return result;
}

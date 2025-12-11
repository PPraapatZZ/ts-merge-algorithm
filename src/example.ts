import { merge } from './merge';

// Example 1: Basic merge
console.log('Example 1: Basic merge');
const result1 = merge([1, 3, 5], [2, 4, 6], [9, 7, 1]);
console.log('Input:  collection_1=[1, 3, 5], collection_2=[2, 4, 6], collection_3=[9, 7, 1]');
console.log('Output:', result1);
console.log();

// Example 2: With negative numbers
console.log('Example 2: With negative numbers');
const result2 = merge([-5, -3, -1], [-4, -2, 0], [2, 0, -2]);
console.log('Input:  collection_1=[-5, -3, -1], collection_2=[-4, -2, 0], collection_3=[2, 0, -2]');
console.log('Output:', result2);
console.log();

// Example 3: With duplicates
console.log('Example 3: With duplicates');
const result3 = merge([1, 2, 3], [2, 3, 4], [5, 3, 2]);
console.log('Input:  collection_1=[1, 2, 3], collection_2=[2, 3, 4], collection_3=[5, 3, 2]');
console.log('Output:', result3);
console.log();

// Example 4: Empty arrays
console.log('Example 4: With empty arrays');
const result4 = merge([], [1, 2], [3, 2]);
console.log('Input:  collection_1=[], collection_2=[1, 2], collection_3=[3, 2]');
console.log('Output:', result4);
console.log();

// Example 5: Large example
console.log('Example 5: Larger arrays');
const result5 = merge(
  [1, 5, 9, 13, 17],
  [2, 6, 10, 14, 18],
  [20, 16, 12, 8, 4]
);
console.log('Input:  collection_1=[1, 5, 9, 13, 17]');
console.log('        collection_2=[2, 6, 10, 14, 18]');
console.log('        collection_3=[20, 16, 12, 8, 4]');
console.log('Output:', result5);

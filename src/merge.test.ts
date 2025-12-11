import { merge } from './merge';

describe('merge', () => {
  describe('Basic functionality', () => {
    test('should merge three sorted arrays correctly', () => {
      const collection_1 = [1, 3, 5, 7];
      const collection_2 = [2, 4, 6, 8];
      const collection_3 = [9, 5, 1];
      
      const result = merge(collection_1, collection_2, collection_3);
      
      expect(result).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9]);
    });

    test('should handle empty arrays', () => {
      expect(merge([], [], [])).toEqual([]);
    });

    test('should handle when collection_1 is empty', () => {
      const result = merge([], [1, 2, 3], [6, 5, 4]);
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('should handle when collection_2 is empty', () => {
      const result = merge([1, 2, 3], [], [6, 5, 4]);
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('should handle when collection_3 is empty', () => {
      const result = merge([1, 3, 5], [2, 4, 6], []);
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('should handle when only collection_1 has elements', () => {
      const result = merge([1, 2, 3, 4], [], []);
      expect(result).toEqual([1, 2, 3, 4]);
    });

    test('should handle when only collection_2 has elements', () => {
      const result = merge([], [1, 2, 3, 4], []);
      expect(result).toEqual([1, 2, 3, 4]);
    });

    test('should handle when only collection_3 has elements', () => {
      const result = merge([], [], [4, 3, 2, 1]);
      expect(result).toEqual([1, 2, 3, 4]);
    });
  });

  describe('Edge cases', () => {
    test('should handle arrays with single elements', () => {
      const result = merge([1], [2], [3]);
      expect(result).toEqual([1, 2, 3]);
    });

    test('should handle duplicate values across arrays', () => {
      const result = merge([1, 2, 3], [2, 3, 4], [5, 3, 2]);
      expect(result).toEqual([1, 2, 2, 2, 3, 3, 3, 4, 5]);
    });

    test('should handle all same values', () => {
      const result = merge([5, 5, 5], [5, 5], [5, 5, 5, 5]);
      expect(result).toEqual([5, 5, 5, 5, 5, 5, 5, 5, 5]);
    });

    test('should handle negative numbers', () => {
      const result = merge([-5, -3, -1], [-4, -2, 0], [2, 0, -2]);
      expect(result).toEqual([-5, -4, -3, -2, -2, -1, 0, 0, 2]);
    });

    test('should handle mix of negative and positive numbers', () => {
      const result = merge([-10, -5, 0, 5], [-8, -3, 2, 6], [10, 4, -1, -6]);
      expect(result).toEqual([-10, -8, -6, -5, -3, -1, 0, 2, 4, 5, 6, 10]);
    });
  });

  describe('Different array lengths', () => {
    test('should handle collection_1 being much longer', () => {
      const result = merge([1, 2, 3, 4, 5, 6, 7, 8], [9], [11, 10]);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    });

    test('should handle collection_2 being much longer', () => {
      const result = merge([1], [2, 3, 4, 5, 6, 7, 8], [10, 9]);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    test('should handle collection_3 being much longer', () => {
      const result = merge([1], [2], [10, 9, 8, 7, 6, 5, 4, 3]);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });

  describe('Extreme values', () => {
    test('should handle very large numbers', () => {
      const result = merge([1000000, 2000000], [1500000, 2500000], [3000000, 500000]);
      expect(result).toEqual([500000, 1000000, 1500000, 2000000, 2500000, 3000000]);
    });

    test('should handle zero', () => {
      const result = merge([0, 1, 2], [0, 3, 4], [5, 0]);
      expect(result).toEqual([0, 0, 0, 1, 2, 3, 4, 5]);
    });
  });

  describe('Verify sorting without sort function', () => {
    test('result should be in ascending order', () => {
      const collection_1 = [1, 5, 9, 13, 17];
      const collection_2 = [2, 6, 10, 14, 18];
      const collection_3 = [20, 16, 12, 8, 4];
      
      const result = merge(collection_1, collection_2, collection_3);
      
      // Verify result is sorted
      for (let i = 1; i < result.length; i++) {
        expect(result[i]).toBeGreaterThanOrEqual(result[i - 1]);
      }
    });

    test('should contain all elements from input arrays', () => {
      const collection_1 = [1, 3, 5];
      const collection_2 = [2, 4, 6];
      const collection_3 = [9, 8, 7];
      
      const result = merge(collection_1, collection_2, collection_3);
      
      // Verify length
      expect(result.length).toBe(
        collection_1.length + collection_2.length + collection_3.length
      );
      
      // Verify all elements are present
      const allElements = [...collection_1, ...collection_2, ...collection_3].sort((a, b) => a - b);
      expect(result).toEqual(allElements);
    });
  });

  describe('Real-world scenarios', () => {
    test('should merge sensor readings from three sources', () => {
      const sensor1 = [10, 15, 20, 25];
      const sensor2 = [12, 18, 22, 28];
      const sensor3 = [30, 24, 16, 8];
      
      const result = merge(sensor1, sensor2, sensor3);
      
      expect(result).toEqual([8, 10, 12, 15, 16, 18, 20, 22, 24, 25, 28, 30]);
    });

    test('should merge timestamps', () => {
      const timestamps1 = [100, 200, 300];
      const timestamps2 = [150, 250, 350];
      const timestamps3 = [400, 300, 50];
      
      const result = merge(timestamps1, timestamps2, timestamps3);
      
      expect(result).toEqual([50, 100, 150, 200, 250, 300, 300, 350, 400]);
    });
  });
});

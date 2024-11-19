import { removeDuplicates } from './26';

describe('Array > 26', () => {
  it.each([
    [
      [1, 1, 2],
      [1, 2],
    ],
    [
      [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
      [0, 1, 2, 3, 4],
    ],
    [
      [1, 2, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ],
  ])(
    'should return array without duplicates',
    (nums: number[], expected: number[]) => {
      const actual: number = removeDuplicates(nums);

      expect(actual).toEqual(expected.length);
    },
  );
});

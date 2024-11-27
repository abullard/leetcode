import { sorting88Merge } from "./88";

describe('Type: Sorting, Problem: 88', () => {
    it.each([
        [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3, [1, 2, 2, 3, 5, 6]],
        [[1], 1, [], 0, [1]],
        [[0], 0, [1], 1, [1]],
        [[1, 0], 1, [2], 1, [1, 2]],
        [[1, 2, 3, 0, 0, 0], 3, [4, 5, 6], 3, [1, 2, 3, 4, 5, 6]],
        [[4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3, [1, 2, 3, 4, 5, 6]],
        [[1, 3, 5, 8, 0, 0, 0, 0], 4, [2, 4, 6, 7], 4, [1, 2, 3, 4, 5, 6, 7, 8]],
    ])('should merge sorted arrays, %s', (nums1: number[], m: number, nums2: number[], n: number, expected: number[]) => {
        sorting88Merge(nums1, m, nums2, n);

        expect(nums1).toEqual(expected);
    });
});
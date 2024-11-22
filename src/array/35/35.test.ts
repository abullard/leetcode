import { searchInsert } from "./35";

describe('Type: Array, Number: 25', () => {
    describe('O(log n) runtime', () => {
        it.each([
            [[1, 3, 5, 6], 5, 2],
            [[1, 2, 3, 5, 6, 7, 63], 51, 6],
            [[1, 3, 4, 5, 6, 7, 63], 2, 1],
        ])('should return the index of the value in the array', (nums: number[], target: number, expected: number) => {
            const actual = searchInsert(nums, target);

            expect(actual).toEqual(expected);
        });

        it.each([
            [[1, 3, 5, 6], 2, 1],
            [[1, 3, 5, 6], 7, 4]
        ])('should return the index of where the value would be in the array', (nums: number[], target: number, expected: number) => {
            const actual = searchInsert(nums, target);

            expect(actual).toEqual(expected);
        });
    })
});
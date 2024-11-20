import { removeElement } from "./27";

describe('Type: array, Problem: 27', () => {
    it.each([
        [[3, 2, 2, 3], 3, 2],
        [[0, 1, 2, 2, 3, 0, 4, 2], 2, 5],
    ])('should remove an element', (nums: number[], val: number, expected: number) => {
        const actual = removeElement(nums, val);

        expect(actual).toEqual(expected);
    });
});

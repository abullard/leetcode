import { plusOne } from "./66";

describe('', () => {
    it.each([
        [
            [9],
            [1, 0]],
        [
            [4, 3, 2, 1],
            [4, 3, 2, 2]],
        [
            [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3],
            [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4],
        ],
        [
            [6, 9, 9, 9, 9, 9, 9],
            [7, 0, 0, 0, 0, 0, 0],
        ],
    ])('should add one', (digits: number[], expected: number[]) => {
        const actual = plusOne(digits);
        expect(actual).toEqual(expected);
    });
});
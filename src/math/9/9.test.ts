import { isPalindromeUsingStrings } from "./9";

describe('Type: Math, Problem: 9', () => {
    it.each([
        [121, true],
        [-121, false],
        [10, false],
        [114454411, true]
    ])('should determine if %s is a palindrome using string manipulation', (x: number, expected: boolean) => {
        const actual = isPalindromeUsingStrings(x);

        expect(actual).toEqual(expected);
    });
});
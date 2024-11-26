import { climbStairs } from "./70";

describe('Type: Dynamic Programming, Problem: 70', () => {
    it.each([
        [2, 2],
        [3, 3],
        [4, 5],
        [5, 8],
        [6, 13],
        [7, 21],
        [8, 34],
    ])
        ('should find num permutations of climbing n stairs with 1 or 2 steps per action', (n: number, expected: number) => {
            const actual = climbStairs(n);

            expect(actual).toEqual(expected);
        });
});
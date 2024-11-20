import { romanToIntEfficent, romanToIntNaive } from "./13";

describe('Type: string, Problem: 13', () => {
    it.each([
        ['III', 3],
        ['LVIII', 58],
        ['MCMXCIV', 1994],
        ['DCCCXLV', 845]
    ])('should convert roman numerals to integers', (s: string, expected: number) => {
        const actual = romanToIntNaive(s);

        expect(actual).toEqual(expected);
    });

    it.each([
        ['III', 3],
        ['LVIII', 58],
        ['MCMXCIV', 1994],
        ['DCCCXLV', 845]
    ])('should convert roman numerals to integers', (s: string, expected: number) => {
        const actual = romanToIntEfficent(s);

        expect(actual).toEqual(expected);
    });
});
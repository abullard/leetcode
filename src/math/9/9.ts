// Problem: https://leetcode.com/problems/palindrome-number

export const isPalindromeUsingStrings = (x: number): boolean => {
    if (x < 0) {
        return false;
    }

    const y = Number(x.toString().split('').reverse().join(''));

    return y === x;
};
// Problem: https://leetcode.com/problems/plus-one

export const plusOne = (digits: number[]): number[] => {
    let i = 0; 
    let reverse = digits.reverse();
    const hasCarryOver = (val: number) => (val === 9 ? true : false);

    while(hasCarryOver(reverse[i]) === true) {
        reverse[i] = 0;
        i++;
    }

    typeof reverse[i] === 'undefined' ? reverse.push(1) : reverse[i]++;
    return reverse.reverse();
}
// problem: https://leetcode.com/problems/remove-element

export const removeElement = (nums: number[], val: number): number => {
    let ptr = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            swap(nums, i, ptr);
            ptr++;
        }
    }

    return ptr;
};

const swap = (array: number[], start: number, end: number) => {
    const temp = array[start];
    array[start] = array[end];
    array[end] = temp;
}

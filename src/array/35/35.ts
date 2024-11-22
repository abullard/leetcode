// problem: https://leetcode.com/problems/search-insert-position

export const searchInsert = (nums: number[], target: number): number => {
    let low = 0;
    let high = nums.length - 1;
    let mid;
    let ret: number = 0;

    while (low <= high) {
        mid = low + Math.floor((high - low) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            high = mid - 1;
            ret = mid;
        } else {
            low = mid + 1;
            ret = mid + 1;
        }
    }

    return ret;
};

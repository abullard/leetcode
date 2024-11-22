// problem: https://leetcode.com/problems/roman-to-integer/

export const removeDuplicates = (nums: number[]): number => {
  let ptr1 = 0;

  for (ptr1; ptr1 < nums.length; ptr1++) {
    let ptr2 = ptr1 + 1;

    while (nums[ptr1] === nums[ptr2]) {
      nums.splice(ptr2, 1);
    }
  }

  return nums.length;
};

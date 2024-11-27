export const sorting88Merge = (nums1: number[], m: number, nums2: number[], n: number): void => {
    let i = nums1.length - 1;
    m--; n--;

    while (m >= 0 && n >= 0) {
        if (nums1[m] > nums2[n]) {
            swap(nums1, m, i);
            m--;
        } else if (nums1[m] < nums2[n]) {
            nums1[i] = nums2[n];
            n--;
        } else {
            nums1[i] = nums2[n];
            n--;
        }

        i--;
    }

    while(n >= 0) {
        nums1[i] = nums2[n];
        n--; i--;
    }
};

const swap = (array: number[], start: number, end: number): number[] => {
    const temp = array[start];
    array[start] = array[end];
    array[end] = temp;

    return array;
}
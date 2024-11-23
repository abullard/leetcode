// Problem: https://leetcode.com/problems/linked-list-cycle

export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export const hasCycle = (head: ListNode | null): boolean => {
    let count = 0;
    let cur: ListNode | null = head;

    while(cur && cur.next !== null) {
        cur = cur?.next || null;
        count++;

        if(count > Math.pow(10, 4)) {
            return true;
        }
    }

    return false;
};

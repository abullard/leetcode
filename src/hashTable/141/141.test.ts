import { hasCycle, ListNode } from "./141";

describe('Type: Hash Table, Problem: 141', () => {
    it.each([true, false, true, false, false])(`has cycle?: %s`, (cycle: boolean) => {
        const head: ListNode = createLinkedList(cycle);

        const actual = hasCycle(head);

        expect(actual).toEqual(cycle);
    });

    it('should return false when linked list is empty', () => {
        const head: ListNode | null = null;

        const actual = hasCycle(head);

        expect(actual).toEqual(false);
    });
});

const createLinkedList = (hasCycle: boolean): ListNode => {
    const head = createNewListNode(0, null);

    let cur = head;
    let cycleStartNode: ListNode | null;
    const minPossibleValue = Math.pow(-10, 5);
    const maxPossibleValue = Math.pow(10, 5);
    const length = scale(0, Math.pow(10, 4), Math.random());
    const randomCycleStart = scale(0, length, Math.random());

    for (let i = 0; i < length; i++) {
        const newNodeValue = scale(minPossibleValue, maxPossibleValue, Math.random());
        cur.next = createNewListNode(newNodeValue, null);

        cur = cur.next;
        if (i === randomCycleStart) {
            cycleStartNode = cur;
        }
    }

    if (hasCycle) {
        cur.next = cycleStartNode!;
        console.log('AJB: cur.val: ', cur.next!.val);
        console.log('AJB: cycleStartNode.val: ', cycleStartNode!.val);
    }

    return head;
};

const createNewListNode = (value: number, next: ListNode | null) => {
    return new ListNode(value, next);
};

const scale = (start: number, end: number, normalized: number): number => {
    return Math.floor(start + (end - start) * normalized);
};
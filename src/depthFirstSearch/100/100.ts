import { TreeNode } from "../94/94";

export const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
    if (p === null && q === null) {
        return true;
    }

    const pHasLeft = p?.left !== null;
    const qHasLeft = q?.left !== null;
    const pHasRight = p?.right !== null;
    const qHasRight = q?.right !== null;
    const pVal = p?.val;
    const qVal = q?.val;

    // are the curRoots values the same?
    if (pVal !== qVal) {
        return false;
    }

    // do the curRoots both have/not-have left roots OR
    // do the curRoots both have/not-have right roots
    if (pHasLeft !== qHasLeft || pHasRight !== qHasRight) {
        return false;
    }

    // if the trees are defined (stupid redudant typescript check)
    if (p && q) {
        // check the left subtree, only if it's not the same, do we return false
        if (pHasLeft && isSameTree(p.left, q.left) === false) {
            return false;
        }

        // same for the right sub tree
        if (pHasRight && isSameTree(p.right, q.right) === false) {
            return false;
        }
    }

    return true;
};

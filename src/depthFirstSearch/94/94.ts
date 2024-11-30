// Problem: https://leetcode.com/problems/binary-tree-inorder-traversal

export const inorderTraversalRecursive = (root: TreeNode | null): number[] => {
    // empty tree
    if (root === null) {
        return [];
    }

    // leaf node, just return the value
    if(root.left === null && root.right === null) {
        return [root.val];
    }

    let dfsResult = [];

    // step all the way left first, and spread the sub-tree's dfsResult
    if (root.left !== null) {
        dfsResult.push(...inorderTraversalRecursive(root.left));
    }
    // we've already checked left, so push our root's val
    dfsResult.push(root.val);

    // right sub-tree, spread the dfsResult
    if (root.right !== null) {
        dfsResult.push(...inorderTraversalRecursive(root.right)); 
    }
    
    // all done with the sub-tree, return the result
    return dfsResult;
};

export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}
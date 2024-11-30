import { inorderTraversalRecursive, TreeNode } from "./94";

describe('Type: Depth First Search, Problem: 94', () => {
    it('should find the in-order traversal of the supplied binary tree', () => {
        // TreeNode constructor: new TreeNode(val, left, right)
        const three: TreeNode = new TreeNode(3, null, null);
        const two: TreeNode = new TreeNode(2, three, null);
        const rootOne: TreeNode = new TreeNode(1, null, two);


        /* BTree visualized
        
            1
             \
              2
             /
            3
        
        */

        const actual = inorderTraversalRecursive(rootOne);

        expect(actual).toEqual([1, 3, 2]);
    });

    it('should find the in-order traversal of the supplied binary tree #2', () => {
        // TreeNode constructor: new TreeNode(val, left, right)
        const nine: TreeNode = new TreeNode(9, null, null);
        const eight: TreeNode = new TreeNode(8, nine, null);
        const seven: TreeNode = new TreeNode(7, null, null);
        const six: TreeNode = new TreeNode(6, null, null);
        const five: TreeNode = new TreeNode(5, six, seven);
        const four: TreeNode = new TreeNode(4, null, null);
        const three: TreeNode = new TreeNode(3, null, eight);
        const two: TreeNode = new TreeNode(2, four, five);
        const rootOne: TreeNode = new TreeNode(1, two, three);


        /* BTree visualized
        
                 1
               /   \
              2     3
             / \     \
            4  5      8
              / \    /
             6   7  9

        */

        const actual = inorderTraversalRecursive(rootOne);

        expect(actual).toEqual([4, 2, 6, 5, 7, 1, 3, 9, 8]);
    });

    it('should find the in-order traversal of the supplied binary tree #3', () => {
        const rootOne: TreeNode | null = null;

        /* BTree visualized
        */

        const actual = inorderTraversalRecursive(rootOne);

        expect(actual).toEqual([]);
    });

    it('should find the in-order traversal of the supplied binary tree #4', () => {
        const rootOne: TreeNode | null = new TreeNode(1, null, null);

        /* BTree visualized
            1
        */

        const actual = inorderTraversalRecursive(rootOne);

        expect(actual).toEqual([1]);
    });
});
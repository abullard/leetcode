import { TreeNode } from "../94/94";
import { isSameTree } from "./100";

describe('Type: Depth First Search, Problem: 100', () => {
    it('should determine if the bTrees are identical', () => {
        // TreeNode constructor: new TreeNode(val, left, right)
        const three: TreeNode = new TreeNode(3, null, null);
        const two: TreeNode = new TreeNode(2, three, null);
        const p: TreeNode = new TreeNode(1, null, two);

        const q = p;

        const actual = isSameTree(p, q);

        expect(actual).toBeTruthy();
    });

    it('should determine if the bTrees are identical #2', () => {
        // TreeNode constructor: new TreeNode(val, left, right)
        const two: TreeNode = new TreeNode(2, null, null);
        const p: TreeNode = new TreeNode(1, null, two);

        const q: TreeNode = new TreeNode(1, two, null);

        const actual = isSameTree(p, q);

        expect(actual).toBeFalsy();
    });

    it('should determine if the bTrees are identical #3', () => {
        const p: TreeNode | null = null;

        const q: TreeNode = new TreeNode(0, null, null);

        const actual = isSameTree(p, q);

        expect(actual).toBeFalsy();
    });

    // TODO AJB 11/30/2024: write a test case for this
    // [2,2,2,null,2,null,null,2]
    // [2,2,2,2,null,2,null]
    
    it('should determine if the bTrees are identical #4', () => {
        const pFive = new TreeNode(5, null, null);
        const pFifteen = new TreeNode(15, null, null);
        const p: TreeNode | null = new TreeNode(10, pFive, pFifteen);

        const qFifteen = new TreeNode(15, null, null);
        const qFive = new TreeNode(5, null, qFifteen);
        const q: TreeNode = new TreeNode(10, qFive, null);

           /* BTrees visualized
        
              p = 10        q = 10
                 /  \          /  
                5   15        5
                               \
                               15

        */

        const actual = isSameTree(p, q);

        expect(actual).toBeFalsy();
    });

    it('should determine if the bTrees are identical #5', () => {
        const pFive = new TreeNode(5, null, null);
        const pFour = new TreeNode(4, null, null);
        const pThree = new TreeNode(3, pFour, pFive);
        const pTwo = new TreeNode(2, null, null);
        const p: TreeNode | null = new TreeNode(1, pTwo, pThree);

        const qThree: TreeNode = new TreeNode(3, null, null);
        const qTwo: TreeNode = new TreeNode(2, null, null);
        const q: TreeNode = new TreeNode(1, qTwo, qThree);

           /* BTrees visualized
        
              p = 1        q = 1
                 / \          / \ 
                2   3        2   3
                   / \             
                  4   5

        */

        const actual = isSameTree(p, q);

        expect(actual).toBeFalsy();
    });


});
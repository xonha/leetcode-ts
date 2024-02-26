// 110. Balanced Binary Tree

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function getDepth(root: TreeNode | null): number {
    if (!root) return 0;

    let leftDepth = getDepth(root.left);
    let rightDepth = getDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
}

function isBalanced(root: TreeNode | null): boolean {
    if (!root) return true;

    let left = Math.abs(getDepth(root.left));
    let right = Math.abs(getDepth(root.right));

    if (Math.abs(left - right) > 1) return false;

    return isBalanced(root.left) && isBalanced(root.right);
}

console.log(
    //false
    isBalanced(
        new TreeNode(
            1,
            new TreeNode(2, new TreeNode(3, new TreeNode(4))),
            new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4)))
        )
    )
);

// console.log(
//     isBalanced(
//         new TreeNode(
//             3,
//             new TreeNode(9),
//             new TreeNode(20, new TreeNode(15), new TreeNode(7))
//         )
//     )
// );

// 104. Maximum Depth of Binary Tree

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

function countSides(root: TreeNode | null, prevCount: number): number {
    if (!root) return 0;
    if (!root.left && !root.right) return prevCount;

    let leftCount = 0;
    let rightCount = 0;

    if (root.left) leftCount += countSides(root.left, prevCount + 1);

    if (root.right) rightCount += countSides(root.right, prevCount + 1);

    prevCount = Math.max(leftCount, rightCount);

    return prevCount;
}

// function maxDepth(root: TreeNode | null): number {
//     if (!root) return 0;

//     return countSides(root, 1);
// }

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

console.log(
    maxDepth(
        new TreeNode(
            3,
            new TreeNode(9, null, null),
            new TreeNode(20, new TreeNode(15), new TreeNode(7))
        )
    )
);

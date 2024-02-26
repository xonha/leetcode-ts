// 111. Minimum Depth of Binary Tree

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

function minDepth(root: TreeNode | null): number {
    if (!root) return 0;

    let left = minDepth(root.left);
    let right = minDepth(root.right);

    if (left === 0 && right !== 0) return right + 1;
    if (right === 0 && left !== 0) return left + 1;
    return Math.min(left, right) + 1;
}

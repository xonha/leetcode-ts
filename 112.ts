// 112. Path Sum

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

function isLeaf(node: TreeNode): boolean {
    if (node.left || node.right) return false;
    return true;
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false;

    targetSum -= root.val;
    if (targetSum === 0 && !root.left && !root.right) return true;

    const left = hasPathSum(root.left, targetSum);
    const right = hasPathSum(root.right, targetSum);

    return left || right;
}

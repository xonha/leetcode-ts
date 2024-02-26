// 101. Symmetric Tree

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

function compareTwoTrees(
    left: TreeNode | null,
    right: TreeNode | null
): boolean {
    if (!left && !right) return true;
    else if (!left || !right) return false;

    if (left.left?.val !== right.right?.val) return false;
    else if (left.right?.val !== right.left?.val) return false;

    return (
        compareTwoTrees(left.left, right.right) &&
        compareTwoTrees(left.right, right.left)
    );
}

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return false;
    if (root.left?.val !== root.right?.val) return false;

    return compareTwoTrees(root.left, root.right);
}

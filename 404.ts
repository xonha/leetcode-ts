// 404. Sum of Left Leaves

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

function isLeaf(node: TreeNode | null): boolean {
    if (!node) return false;
    if (!node.left && !node.right) return true;
    return false;
}

function helper(node: TreeNode | null, leftNode: boolean): number {
    if (!node) return 0;
    if (isLeaf(node)) {
        if (leftNode) return node.val;
        return 0;
    }
    let left = helper(node.left, true);
    let right = helper(node.right, false);

    return left + right;
}

function sumOfLeftLeaves(root: TreeNode | null): number {
    if (!root) return 0;

    let left = helper(root.left, true);

    let right = helper(root.right, false);

    return left + right;
}

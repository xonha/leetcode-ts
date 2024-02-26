// 226. Invert Binary Tree

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

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;
    if (isLeaf(root)) return root;

    const right = invertTree(root.right);
    const left = invertTree(root.left);

    root.left = right;
    root.right = left;

    return root;
}

console.log(invertTree(new TreeNode(2, new TreeNode(1), null)));

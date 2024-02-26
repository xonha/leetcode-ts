// 257. Binary Tree Paths

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

function helper(
    node: TreeNode | null,
    paths: string[],
    curStr: string
): string[] {
    if (!node) return paths;
    if (isLeaf(node)) {
        curStr += node.val;
        paths.push(curStr);
        return paths;
    }

    curStr += node.val + "->";
    helper(node.right, paths, curStr);
    helper(node.left, paths, curStr);

    return paths;
}

function binaryTreePaths(root: TreeNode | null): string[] {
    if (!root) return [""];

    return helper(root, [], "");
}

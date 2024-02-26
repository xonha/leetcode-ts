// 222. Count Complete Tree Nodes

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

function getHeight(node: TreeNode | null, height: number): number {
    if (!node) return 0;
    if (isLeaf(node)) return height++;
    return getHeight(node.left, height + 1);
}

function countNodesHelper(
    node: TreeNode | null,
    height: number,
    value: number // 1
): number {
    if (!node) return 0;
    if (height === 0) return 1;

    if (height === 1) {
        if (node.right) return value * 2 + 1;
        else if (node.left) return value * 2;
        return 0;
    }

    let hasLast = countNodesHelper(node.right, height - 1, value * 2 + 1);
    if (hasLast) return hasLast;

    hasLast = countNodesHelper(node.left, height - 1, value * 2);
    if (hasLast) return hasLast;

    return 0;
}

function countNodes(root: TreeNode | null): number {
    if (!root) return 0;
    const height = getHeight(root, 0);
    return countNodesHelper(root, height, 1);
}

console.log(
    countNodes(
        new TreeNode(
            1,
            new TreeNode(2, new TreeNode(4, new TreeNode(8)), new TreeNode(5)),
            new TreeNode(3, new TreeNode(6), new TreeNode(7))
        )
    )
);

// console.log(
//     countNodes(
//         new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3))
//     )
// );

// console.log(
//     countNodes(
//         new TreeNode(
//             1,
//             new TreeNode(2, new TreeNode(4), new TreeNode(5)),
//             new TreeNode(3, new TreeNode(6))
//         )
//     )
// );

// 144. Binary Tree Preorder Traversal

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

function preorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = [];
    let stack: TreeNode[] = [];
    let returned = false;

    while (true) {
        if (!root) return result;

        if (!returned) {
            result.push(root.val);
            stack.push(root);
        } else returned = false;

        if (root.left) {
            root = root.left;
            continue;
        } else if (root.right) {
            root = root.right;
            stack.pop();
            continue;
        }

        stack.pop();
        root = stack[stack.length - 1];
        if (root && root.left) root.left = null;
        returned = true;
    }
}

// console.log(
//     preorderTraversal(
//         new TreeNode(
//             1,
//             new TreeNode(2, new TreeNode(3), new TreeNode(4)),
//             new TreeNode(5)
//         )
//     )
// );

console.log(
    preorderTraversal(new TreeNode(3, new TreeNode(1), new TreeNode(2)))
);

// console.log(
//     preorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3))))
// );

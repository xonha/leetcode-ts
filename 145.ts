// 145. Binary Tree Postorder Traversal

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

function postorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = [];
    let stack: TreeNode[] = [];
    let returned = false;

    while (true) {
        if (!root) return result;

        if (!returned) {
            stack.push(root);
        } else returned = false;

        if (root.left) {
            root = root.left;
            continue;
        } else if (root.right) {
            root = root.right;
            stack[stack.length - 1].right = null;
            continue;
        }

        if (!returned) {
            result.push(root.val);
        } else returned = false;

        stack.pop();
        root = stack[stack.length - 1];
        if (root && root.left) root.left = null;
        returned = true;
    }
}

console.log(
    postorderTraversal(
        new TreeNode(
            1,
            new TreeNode(2, new TreeNode(3), new TreeNode(4)),
            new TreeNode(5)
        )
    )
);

// console.log(
//     postorderTraversal(new TreeNode(3, new TreeNode(1), new TreeNode(2)))
// );

// console.log(
//     postorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3))))
// );

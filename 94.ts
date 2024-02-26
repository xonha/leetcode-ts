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

// function inorderTraversal(root: TreeNode | null): number[] {
//     let order: number[] = [];

//     function printInorder(root: TreeNode | null) {
//         if (!root) return;

//         printInorder(root.left);

//         order.push(root.val);

//         printInorder(root.right);
//     }

//     printInorder(root);

//     return order;
// }

function inorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = [];
    let stack: TreeNode[] = [];
    if (!root) return [];
    stack.push(root);

    if (!root.left) {
        result.push(root.val);
        stack.pop();

        if (!root.right) return result;
        stack.push(root.right);
        root = root.right;
    }

    while (true) {
        if (!root) return result;

        if (root.left) {
            stack.push(root.left);
            root = root.left;
            continue;
        }
        result.push(root.val);
        stack.pop();

        if (root.right) {
            stack.push(root.right);
            root = root.right;
            continue;
        }

        if (stack.length === 0) break;
        root = stack[stack.length - 1];
        root.left = null;
    }

    return result;
}

// console.log(
//     inorderTraversal(
//         new TreeNode(
//             1,
//             new TreeNode(2, new TreeNode(3), new TreeNode(4)),
//             new TreeNode(5)
//         )
//     )
// );

console.log(
    inorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3))))
);

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    if (!l1 && !l2) return null;

    let sum = 0;
    let list: ListNode | null = null;

    if (l1) {
        sum += l1.val;
        l1 = l1.next;
    }
    if (l2) {
        sum += l2.val;
        l2 = l2.next;
    }

    if (sum > 9) {
        sum -= 10;
        if (l1) l1.val += 1;
        else if (l2) l2.val += 1;
        else l1 = new ListNode(1);
    }

    list = addTwoNumbers(l1, l2);
    return new ListNode(sum, list);
}
const l1 = new ListNode(2, new ListNode(4, new ListNode(9)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(9))));
const lista = addTwoNumbers(l1, l2);
console.log(lista);

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const result = deleteDuplicates(
  new ListNode(
    1,
    new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))),
  ),
);
console.log("result: ", result);

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head;
  if (!head.next) return head;

  if (head.val === head.next.val) {
    head.next = head.next.next;
    deleteDuplicates(head);
  }

  deleteDuplicates(head.next);
  return head;
}

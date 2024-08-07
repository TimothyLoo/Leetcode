/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let tail = null;
    while (head) {
        const temp = head.next;
        head.next = tail;
        tail = head;
        head = temp;
    }
    
    return tail;
};
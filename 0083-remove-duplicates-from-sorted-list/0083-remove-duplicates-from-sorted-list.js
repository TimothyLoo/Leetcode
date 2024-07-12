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
var deleteDuplicates = function(head) {
    let l = head;
    
    while (l) {
        let r = l.next;
        while (r && r.val === l.val) {
            r = r.next;
        }
        l.next = r;
        l = l.next;
    }
    
    return head;
};
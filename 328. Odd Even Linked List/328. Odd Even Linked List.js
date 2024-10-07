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
var oddEvenList = function(head) {
    if(head === null) return head;
    if(head.next === null) return head;
    if(head.next.next === null) return head;

    let oddHead = head;
    let evenHead = head.next;
    let tempEvenHead =  head.next;
    while(evenHead){
        if(evenHead.next === null) break;
        oddHead.next = evenHead.next;
        oddHead = oddHead.next
        evenHead.next = oddHead.next;
        evenHead = evenHead.next

    }
    oddHead.next = tempEvenHead
    return head
};
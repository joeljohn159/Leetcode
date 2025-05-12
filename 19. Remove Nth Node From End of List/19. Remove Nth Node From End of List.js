/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let curr = head;
    let count = 0;
    while(curr != null){
        count++;
        curr = curr.next;
    }
    curr = head;
    function removeTheNextNode(pointer){
        if(pointer.next === null){
            return pointer;
        }
        pointer.next = pointer.next.next;
        return pointer;
    }

    for(let i = 0; i<=count-n; i++){
        if(count - n < 0) return null;
        if(count === n) {
            head = head.next;
            return head;
        }
        if(i+1 === count-n){
            removeTheNextNode(curr);
            return head;
        }
        curr = curr.next;
    }
};
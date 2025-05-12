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
    let arr = [];
    let iterator = head
    while(iterator){
        arr.push(iterator.val)
        iterator = iterator.next
    }
    iterator = head
    while(iterator){
        iterator.val = arr.pop()
        iterator = iterator.next
    }
    return head;
};
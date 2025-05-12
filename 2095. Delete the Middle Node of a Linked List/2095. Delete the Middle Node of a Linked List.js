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
var deleteMiddle = function(head) {
    let iterator = head;
    let n = 0;
    while(iterator != undefined){
        n++
        iterator = iterator.next;
    }
    let mid = Math.floor(n/2)

    if(mid === 0){
        head = null
        return head;
    }

    iterator = head;

    for(let i=0; i<=mid; i++){
        if(i != mid-1){
            iterator = iterator.next
            continue
        }
        iterator.next = iterator.next.next;
    }
    return head;
};
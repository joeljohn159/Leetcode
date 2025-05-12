/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    
    if(!root) return [];
    let result = [];
    let queue = [];
    queue.push(root)
    while(queue.length){
        let values = [];
        let n = queue.length;
        for(let i=0; i<n; i++){
            let test = queue.shift();
                if(test.left) queue.push(test.left);
                if(test.right) queue.push(test.right);
                values.push(test.val)
            
        }
        result.push(values.pop())
        
    }
    return result;
};
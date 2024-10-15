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
 * @return {number}
 */
var longestZigZag = function(root) {
    

    const helper = (node, isLeft, depth) => {
        if (!node) return depth;

        if (isLeft){
             depth  = Math.max( depth, helper(node.right, false, depth+1)
            ,helper(node.left, true, 0)
            )
        }
        else{
            
             depth  = Math.max( depth, helper(node.left, true, depth+1)
            ,helper(node.right, false, 0)
            )
        }
        return depth
    }

    let maxi =   Math.max(helper(root.left, true, 0),helper(root.right, false, 0))
    // console.log(maxi)
    return maxi;
};
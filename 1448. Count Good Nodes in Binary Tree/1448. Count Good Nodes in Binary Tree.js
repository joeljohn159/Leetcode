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
//  Function to find good nodes
// If root does not exist return 0

var goodNodes = function(root) {

    let numofGoodNodes = 0;
    
    const dfs = (node, max) => {
        if(!node) return 0;
        if(node.val >= max) {numofGoodNodes+=1;}
        let x = Math.max(node.val, max)
        dfs(node.left, x)
        dfs(node.right, x)
    }

    dfs(root, -Infinity)
    return numofGoodNodes
};
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
var maxLevelSum = function(root) {
    let sum = []
    const traverse = (node, depth) => {
        if(!node) return;

        sum[depth] = (sum[depth] ?? 0) + node.val;

        traverse(node.left, depth+1);
        traverse(node.right, depth+1);
    }
    traverse(root,0)
    // console.log(sum)
    return (sum.findIndex((ele) => ele === Math.max(...sum)) + 1);
};
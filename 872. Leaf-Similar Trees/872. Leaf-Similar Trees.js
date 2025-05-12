/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {

    let root1Arr = [];
    let root2Arr = [];

    const leafList = (node, arr) => {
        if(node.left){
            leafList(node.left, arr)
        }
        if(node.right){
            leafList(node.right, arr)
        }
        if(!node.left && !node.right){
        arr.push(node.val)
        }
    }

    leafList(root1, root1Arr)
    leafList(root2, root2Arr)
    // console.log(root1Arr,root2Arr)
    if(root1Arr.length != root2Arr.length) return false;
    for(let i = 0 ;i < root1Arr.length; i++){
        // console.log(root1Arr[i], root2Arr[i])
        if(root1Arr[i] === root2Arr[i]) continue;
        else return false;
    }
    return true
};
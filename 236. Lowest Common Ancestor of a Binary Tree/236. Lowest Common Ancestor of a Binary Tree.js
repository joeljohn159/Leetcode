/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null;

    if(root === p || root === q){
        // console.log(ro.ot, p,q)
        return root
    }

    let left = lowestCommonAncestor(root.left,p,q);
    let right = lowestCommonAncestor(root.right,p,q);

    if(left && right) {
        // console.log('left and right ',left, right)
        // console.log('nh')
        return root
    }
    else {return left || right}
};
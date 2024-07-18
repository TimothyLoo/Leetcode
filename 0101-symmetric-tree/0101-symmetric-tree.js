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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const func = (l,r) => {
        if (!l && !r) return true;
        if (!l || !r) return false;
        if (l.val !== r.val) return false;
        return func(l.left, r.right) && func(l.right, r.left);
    }
    
    return func(root.left, root.right);
};
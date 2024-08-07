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
var minDepth = function(root, count = 0) {
    if (!root) return count;
    count++;
    if (!root.left) return minDepth(root.right, count);
    if (!root.right) return minDepth(root.left, count);
    return Math.min(minDepth(root.left,count),minDepth(root.right,count));
};
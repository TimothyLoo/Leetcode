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
var countNodes = function(root) {
    
    function lDepth(node) {
        if (!node) return 0;
        return lDepth(node.left) + 1;
    }
    
    function rDepth(node) {
        if (!node) return 0;
        return rDepth(node.right) + 1;
    }
    
    function trav(node) {
        const l = lDepth(node);
        const r = rDepth(node);
        
        if (r === l) return Math.pow(2, l) - 1;
        return trav(node.left) + trav(node.right) + 1;
    }
    
    return trav(root);
};
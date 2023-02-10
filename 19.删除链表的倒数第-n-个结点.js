/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let ary = []
    function fetchHead(node){
        ary.push(node);
        if(node.next){
            fetchHead(node.next)
        }
    }

    fetchHead(head)

    let len = ary.length;
    
    if(len === 1 || n > len){
        return null
    }
    if(n === 1){
        ary[len - 2].next = null;
        return head
    }
    if(n === len){
        return ary[1]
    }
    ary[len - n - 1].next = ary[len - n + 1]

    return head
};
// @lc code=end


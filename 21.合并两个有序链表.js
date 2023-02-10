/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if(!list2 && !list1){
        return null;
    }
    else if(!list1){
        return list2
    }
    else if(!list2){
        return list1
    }
    let rsList = new ListNode(0, null);

    function setVal(list, listOne, listTwo) {
        
        if (!listOne && !listTwo) {
            return;
        }

        let val1 = listOne.val;
        console.log('val1: ', val1);
        let val2 = listTwo.val;
        console.log('val2: ', val2);
        list.next = new ListNode(0, null);
        if (val1 > val2) {
            list.val = val2
            if (!listTwo.next) {
                list.next = listOne;
            }
            else {
                setVal(list.next, listOne, listTwo.next)
            }
        }
        else if(val2 > val1){
            list.val = val1
            if (!listOne.next) {
                list.next = listTwo;
            }
            else {
                setVal(list.next, listOne.next, listTwo)

            }
        }
        else{
            list.val = val1
            list.next = new ListNode(val2,new ListNode(0,null))
            if(listOne.next && listTwo.next){   
                setVal(list.next.next, listOne.next, listTwo.next)
            }
            else if(listOne.next){
                list.next.next = listOne.next
            }
            else if(listTwo.next){
                list.next.next = listTwo.next
            }
            else{
                list.next.next = null
            }
        }
    }

    setVal(rsList, list1, list2)

    return rsList
};
// @lc code=end


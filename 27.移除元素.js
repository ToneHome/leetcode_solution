/*
 * @Date: 2022-01-24 17:26:27
 * @LastEditors: OBKoro1
 * @Author: Li Tong
 * @Number: 01409332
 * @FilePath: \leetcode\solute\27.移除元素.js
 */
/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let i = 0
    while (i < nums.length) {
        if (nums[i] === val) {
            nums.splice(i, 1)
        }
        else {
            i++
        }
    }
    return nums.length
};
// @lc code=end


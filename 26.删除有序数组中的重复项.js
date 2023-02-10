/*
 * @Date: 2022-01-24 17:11:11
 * @LastEditors: OBKoro1
 * @Author: Li Tong
 * @Number: 01409332
 * @FilePath: \leetcode\solute\26.删除有序数组中的重复项.js
 */
/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    // return Array.from(new Set(nums))

    let i = 0;
    while (i < nums.length - 1) {
        if (nums.lastIndexOf(nums[i] > -1) && nums.lastIndexOf(nums[i]) !== i) {
            nums.splice(i, 1)
        }
        else {
            i++
        }
    }
    return nums.length
};
// @lc code=end


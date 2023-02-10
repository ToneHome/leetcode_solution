/*
 * @Date: 2022-01-24 17:29:40
 * @LastEditors: OBKoro1
 * @Author: Li Tong
 * @Number: 01409332
 * @FilePath: \leetcode\solute\29.两数相除.js
 */
/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
   return Math.floor(dividend/divisor) >= 0?Math.floor(dividend/divisor) :Math.floor(dividend/divisor)  + 1
};
// @lc code=end


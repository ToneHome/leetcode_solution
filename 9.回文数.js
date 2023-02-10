/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false
    x = x + ''
    let len = x.length

    if (len === 1) return true


    if (x[len - 1] === '0') return false

    let a = Math.floor(len / 2)

    for (let i = 0; i < a; i++) {
        if (x[i] !== x[len - i - 1]) {
            return false
        }
    }

    return true
};
// @lc code=end


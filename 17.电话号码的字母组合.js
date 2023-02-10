/*
 * @Date: 2022-01-24 16:31:07
 * @LastEditors: OBKoro1
 * @Author: Li Tong
 * @Number: 01409332
 * @FilePath: \leetcode\solute\17.电话号码的字母组合.js
 */
/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {

    if (!digits) return []
    const obj = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }


    if (digits.length === 1) return obj[digits].split('')

    function aryConnect(ary1, ary2) {
        if (!ary1.length) return ary2
        let ary = []
        for (let i = 0; i < ary1.length; i++) {
            for (let j = 0; j < ary2.length; j++) {
                ary.push(ary1[i] + ary2[j])
            }
        }
        return ary
    }

    return digits.split('').reduce((ary, num) => {
        return aryConnect(ary, obj[num].split(''))
    }, [])

    // return []



};
// @lc code=end


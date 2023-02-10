/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let flag1 = flag2 = flag3 = true;
    function isWrong(ary) {
        if (ary.length === 1) return true;

        let firstOne = ary.shift();
        if (ary.indexOf(firstOne) > -1) {
            return false
        }
        else {
            return isWrong(ary)
        }
    }
    for (let i = 0; i < 9; i++) {
        if (!isWrong(board[i])) return false

        let ary = []
        for (let j = 0; j < 9; j++) {
            ary.push(board[j][i])
        }
        if(!isWrong(ary)) return false
    }

    for (let i = 0; i < 9; i++) {
        let ary = [];
        let index = Math.floor(i / 9)
        for (let j = 0; j < 9; j++) {
            
        }
        
    }

};
// @lc code=end

